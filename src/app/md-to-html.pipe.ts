import { Pipe, PipeTransform } from '@angular/core';
import {ContentfulService} from './service/contentful.service';
import * as marked from 'marked';
@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

   
  transform(value:string):any {
  return marked(value);
  }

}
