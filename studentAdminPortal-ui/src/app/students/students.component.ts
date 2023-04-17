import { Component,OnInit, ViewChild} from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../Model/Ui-Models/Students.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

students:Student[]=[];
//Genders:Gender[]=[];
  displayedColumns:string[]=['FirstName','LastName','DateOfBirth','Email','Mobile','Gender'];
  dataSource:MatTableDataSource<Student>=new MatTableDataSource<Student>();
  @ViewChild(MatPaginator)Matpaginator!:MatPaginator;
  @ViewChild(MatSort)matSort!: MatSort;
  // dataSourceg:MatTableDataSource<Gender>=new MatTableDataSource<Gender>();
  constructor(private studentService :  StudentService){}
  filterString='';

  ngOnInit(): void {

    //fetch Students
   this.studentService.getStudent()
   .subscribe(
    (successResponse)=>{
   this.students=successResponse;
   //console.log(this.students)

   this.dataSource=new MatTableDataSource<Student>(this.students);
   if(this.Matpaginator){
  this.dataSource.paginator=this.Matpaginator;


   }
   if(this.matSort!=null){
   this.dataSource.sort = this.matSort;
   console.log('data is comming')

   }
   // this.dataSourceg=new MatTableDataSource<Gender>(this.Genders);
  },
    (errorResponse)=>{
      console.log(errorResponse);
    }
   )

  }
  filterStudents()
  {
    this.dataSource.filter=this.filterString.trim().toLowerCase();
  }

}
