import { Injectable } from '@angular/core';
import {createClient, Entry} from 'contentful';
import { environment } from '../../environments/environment';
 import * as marked from 'marked';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client=createClient({
    space:environment.contentful.spaceId,
    accessToken:environment.contentful.accessToken
  })
  constructor() { }

  getPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type:'blogPost'
    }, query))
    .then(res => res.items);
     
  }

  markdownTohtml(md:string){
    return marked(md)

  }
}
