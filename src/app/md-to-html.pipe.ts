import { Pipe, PipeTransform } from '@angular/core';
import {ContentfulService} from './service/contentful.service';
@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  constructor(private cfs:ContentfulService){

  }
  transform(value:string) {
    return this.cfs.markdownTohtml(value)
  }

}
