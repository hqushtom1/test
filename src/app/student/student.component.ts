import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

export class Student {
  constructor(
    public name: string,
    public email: string,
    public city: string
  ) { }
}
 
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  citys = ["Toronto", "London", "Kitchener"];

  model = new Student("Haytham", "ddd@ddd.com", this.citys[0]);

  diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit(): void {
  }

}
