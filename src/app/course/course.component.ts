import { Component, OnInit } from '@angular/core';
import { Courses } from '../courses';
import {CoursetypeService} from '../coursetype.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  collection: Courses[]=[];
  searchValue: any;
  constructor(private course: CoursetypeService) { }


  ngOnInit(): void {
    this.course.getData().subscribe((result)=>{
      this.collection=result;
    })
  }

  

}
function result(result: any) {
  throw new Error('Function not implemented.');
}

