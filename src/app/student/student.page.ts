import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Student } from "../shared/models/student.model";
import { StudentService } from "../shared/services/student.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.page.html",
  styleUrls: ["./student.page.scss"],
})
export class StudentPage implements OnInit {
  student: Student;
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.studentService.findById(params.id).subscribe((student: Student) => {
        this.student = student;
      });
    });
  }
}
