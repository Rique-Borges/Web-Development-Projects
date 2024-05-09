import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {COURSES} from '../../db-data'
import {Course} from '../model/course'
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
  @Input()
  course:Course;
  @Output()
  courseSelected = new EventEmitter<Course>();

constructor(){}
ngOnInit(){
}
onCourseViewed(){

  console.log("card-component - Button Clicked!");

  this.courseSelected.emit(this.course);

}
}
