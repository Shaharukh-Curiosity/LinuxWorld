import { Component, OnInit } from '@angular/core';
import {createClient} from 'contentful';
import {environment} from '../../../../environments/environment';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
@Component({
  selector: 'app-conditional-statment',
  templateUrl: './conditional-statment.component.html',
  styleUrls: ['./conditional-statment.component.css']
})
export class ConditionalStatmentComponent implements OnInit {

   if_else:any=[];
     post_object={
     title:'',
     publisher:'',
     description:'',
     body:'',
     conclusion:''
   }
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })

  constructor() { }
  
  returnHtmlFromRichText(richText) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

  ngOnInit() {
    this.client.getEntry('2eRFt7arajIhuYnoDGGM01')
    .then((entry)=> {
      this.if_else=entry;
      this.post_object.title=this.if_else.fields.title;
      this.post_object.publisher=this.if_else.fields.publisher;
      this.post_object.description=this.if_else.fields.description;
      this.post_object.body=this.if_else.fields.body;
      this.post_object.conclusion=this.if_else.fields.conclusion;
      document.getElementById('textbody').innerHTML=this.returnHtmlFromRichText(this.post_object.body);
      console.log(this.post_object)
    })
    .catch((error)=>{
      console.log(error)
    })
       
  }

}
