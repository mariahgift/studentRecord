import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentsDataService {

  constructor() { }

  getStudentList() {
    return [
      { "id": 1, "Name": "Andrew", "Age": 22 },
      { "id": 2, "Name": "John", "Age": 21 },
      { "id": 3, "Name": "Mark", "Age": 20 },
      { "id": 4, "Name": "Jenny", "Age": 14 },
    ]
  }


}
