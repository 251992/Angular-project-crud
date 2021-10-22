import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  formdata={
    "fname":'',
    "lname":'',
    'email':'',
    'mobile':'',
    'department':'',
    'password':'',
    'confirmpassword':'',
    'address':''
  }
  constructor() {

    this.test()
   }

  ngOnInit(): void {
  }

  submit(data:NgForm){
    console.log(data)
  }

  test(x?:number){
    console.log("hi "+x)
  }
}
