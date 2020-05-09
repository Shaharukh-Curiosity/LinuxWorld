import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient } from 'contentful'
import { environment } from '../../../../environments/environment'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import{Meta,Title} from '@angular/platform-browser';
@Component({
  selector: 'app-ubuntu20',
  templateUrl: './ubuntu20.component.html',
  styleUrls: ['./ubuntu20.component.css']
})
export class Ubuntu20Component implements OnInit {

  post_array:any=[];
  post_Data = {
    body: '',
    title: '',
    publishAt:'',
    description: '',
    imageUrl: '',
    publisher: '',
    conclusion: ''
  };

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })

  constructor(private router: Router, private meta:Meta, private title:Title) {

  }

  _returnHtmlFromRichText(richText) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

  ngOnInit() {

    
    this.title.setTitle('how to install Ubuntu 20.04 LTS');
    this.meta.addTag({
      name:'how to install ubuntu 20.04 LTS',
      content:'install ubuntu 20.04 LTS with steps by steps guides , this can be very helpful to begginers'
    })
    
    this.client.getEntry('2I08u4FzKWsCRPEoL8Okke')
    .then((entry)=>{
      this.post_array=entry;
      
      this.post_Data.title=this.post_array.fields.title;
      this.post_Data.publisher=this.post_array.fields.publisher;
      this.post_Data.publishAt=entry.sys.createdAt;
      this.post_Data.description=this.post_array.fields.description;
      this.post_Data.body=this.post_array.fields.body;
      this.post_Data.conclusion=this.post_array.fields.conclusion;
      document.getElementById('textbody').innerHTML=this._returnHtmlFromRichText(this.post_Data.body);

    })
    .catch((error)=>{
      console.log(error);
      
    })

     // this.contentfulservice.getPosts()
    //.then(posts => console.log(posts))

  }

}
