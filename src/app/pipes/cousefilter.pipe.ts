import { Pipe, PipeTransform } from '@angular/core';
import { course } from '../course';
@Pipe({
  name: 'cousefilter'
})
export class CousefilterPipe implements PipeTransform {

  transform(courses: course[], pricetype: any): any {
    let temp = [];
    if (pricetype == 1) {
      for (let x in courses) {
        if (courses[x].price >= 19000) {
          temp.push(courses[x]);
        }
      }
      return temp;
    }
    else if (pricetype ==2) {
      for (let x in courses) {
        if (courses[x].price >= 12000 && courses[x].price < 19000) {
          temp.push(courses[x]);
        }
      }
      return temp;
    }
    else if (pricetype == 3) {
      for (let x in courses) {
        if (courses[x].price < 12000) {
          temp.push(courses[x]);
        }
      }
      return temp;
    }
    else {
      return courses;
    }
  }

}
