import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'; 
import{createClient} from 'contentful';
import {environment} from '../../../environments/environment';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-installnodejsubuntu',
  templateUrl: './installnodejsubuntu.component.html',
  styleUrls: ['./installnodejsubuntu.component.css']
})
export class InstallnodejsubuntuComponent implements OnInit {

  post_object:any=[];
   Post_Data={
    title:'',
    publisher:'',
    image:'',
    description:'',
    body:'',
    conclusion:''
  }
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })

  
  constructor( private meta: Meta, private titleservice: Title) { }

  _returnHtmlFromRichText(richText) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }


  ngOnInit() {
    this.titleservice.setTitle('How to Install Latest node js on ubuntu 20.04 lts/18.04');
    this.meta.addTag({
      name: 'nodejs installation',
      content: 'install latetst node js and npm on ubuntu 20.04 lts/18.04, install nodejs on ubuntu virtual machine,how to update nodejs and npm'
    });
    this.client.getEntry('2JDzAFtGb8jSd8CIsVfUiw')
    .then((entry => {
      
      this.post_object=entry;
      this.Post_Data.title=this.post_object.fields.title;
      this.Post_Data.image=this.post_object.fields.postImge.fields.file.url;
      this.Post_Data.description=this.post_object.fields.description;
      this.Post_Data.body=this.post_object.fields.body;
      this.Post_Data.conclusion=this.post_object.fields.conclusion;
      document.getElementById('textbody').innerHTML=this._returnHtmlFromRichText(this.Post_Data.body);

    }))
    .catch((error) =>{
      console.log('something went wrong with APIS');

    })
    var disqus_config = function () {
      this.page.url = 'https://visionrosetta.in/install-latest-nodejs-npm-on-ubuntu';  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier ='install-latest-nodejs-npm-on-ubuntu'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://https-visionrosetta-in-3.disqus.com/embed.js';
      s.setAttribute('data-timestamp', new Date().toString());
      (d.head || d.body).appendChild(s);
      })();
      
  
  }

}
