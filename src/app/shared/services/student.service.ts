import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map } from 'rxjs/Operators';
import { Student } from "../models/student.model";

const API: string = "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  public students: BehaviorSubject<Student[]> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
    this.findAll()
  }

  findAll(): void {
    this.http
      .get<Student[]>(API + '/students')
      .subscribe((students: Student[]) => {
        this.students.next(students);
      });
  }

  findById(id: number): Observable<Student> {
    return this.students.pipe(
      filter((students: Student[]) => students !== null),
      map((students: Student[]) => students[id])
    );
  }
}
