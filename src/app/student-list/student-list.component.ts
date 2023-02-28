import { Component } from '@angular/core';
import { StudentsDataService } from '../services/students-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  public students: any[] = [];
  constructor(private studentService: StudentsDataService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudentList();    
  }
}
