import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StudentsDataService } from '../services/students-data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public students: any[] = [];
  constructor(private studentService: StudentsDataService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudentList();    
  }


}
