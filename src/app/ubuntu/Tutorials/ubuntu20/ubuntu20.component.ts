import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../../service/contentful.service';
import { Router } from '@angular/router';
import { createClient } from 'contentful'
import { environment } from '../../../../environments/environment'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-ubuntu20',
  templateUrl: './ubuntu20.component.html',
  styleUrls: ['./ubuntu20.component.css']
})
export class Ubuntu20Component implements OnInit {

  body = '';
  title = '';
  description = '';
  imageUrl = '';
  publisher = '';
  conclusion = '';
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })

  constructor(private router: Router, private contentfulservice: ContentfulService) {

  }

  _returnHtmlFromRichText(richText) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

  ngOnInit() {


    this.client.getEntry('2I08u4FzKWsCRPEoL8Okke')

      .then(entry => {
        
        this.body = entry.fields.body;
        this.publisher = entry.fields.publisher;
        this.title = entry.fields.title;
        console.log(this.title)
        this.imageUrl = entry.fields.postImge.fields.file.url;
        this.description = entry.fields.description;
        this.conclusion=entry.fields.conclusion;

        // console.log(entry)
        document.getElementById('textbody').innerHTML = this._returnHtmlFromRichText(this.body);
        
      })




    // this.contentfulservice.getPosts()
    //.then(posts => console.log(posts))

  }

}
