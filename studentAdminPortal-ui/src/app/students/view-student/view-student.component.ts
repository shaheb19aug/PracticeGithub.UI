import { Component, OnInit } from '@angular/core';
import { StudentsComponent } from '../students.component';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Model/Ui-Models/Students.model';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent  implements OnInit{

  student:Student={
    id:'',
  firstName:'',
  lastName:'',
  dateOfBirth:'',
  email:'',
  mobile:0,
  profileImageUrl:'',
  genderId:'',
  gender:{
    id:'',
    description:''
  },
  address:{
    id:'',
    physicalAddress:'',
    postalAddress:''
  }
  }
  studentId:string | null | undefined;
  constructor(private readonly studentService:StudentService,private readonly route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=>{
        this.studentId= params.get('id');
      if(this.studentId)
      {
        this.studentService.getStudent(this.studentId)
        .subscribe(
          (successResponse)=>{
            this.student= successResponse;
          }
        );
      }
      }
    )

  }

}
