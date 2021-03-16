import { Pipe, PipeTransform } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { Courses } from './courses';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Courses: Courses[], searchValue: string): Courses[] {

    if(!Courses || !searchValue){
      return Courses;
    }
    return Courses.filter(cs=>
      cs.Provider.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      cs.NextSessionDate.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      cs.ChildSubject.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
