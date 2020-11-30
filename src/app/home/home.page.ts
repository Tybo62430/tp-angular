import { Component, OnInit } from "@angular/core";
import { StudentService } from "../shared/services/student.service";

interface Student {
  id?: number;
  name: string;
  grade: number;
  comment: string;
}

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.students.subscribe((students: Student[]) => {
      this.students = students;
    });
  }
}
