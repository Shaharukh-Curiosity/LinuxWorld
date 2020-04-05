import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import{Newslettermodel} from './newslettermodel';
 


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private dbpath = "/newsletter";



   newslettersRef: AngularFireList<Newslettermodel> = null;
   newsletterRef: AngularFireObject<any>; 

   constructor(private  db: AngularFireDatabase) { 
     this.newslettersRef=db.list(this.dbpath);
   }

  add_new_newsletter(newslettermodel: Newslettermodel): void{
    this.newslettersRef.push(newslettermodel)
  }
}
