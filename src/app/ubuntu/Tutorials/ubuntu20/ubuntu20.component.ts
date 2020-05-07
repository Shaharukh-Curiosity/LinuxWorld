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
  imageURL: any;
  posts: any;
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


    this.client.getEntry('15mYO05tzBCT8PEXbpOR5X')

      .then(entry => {
        this.body = entry.fields.body;

        // console.log(entry)
        document.getElementById('textbody').innerHTML = this._returnHtmlFromRichText(this.body);
      })


      this.client.getAssets()
        .then(function(assets){
          assets.items.map(function(asset){
            var imageurl='https:'+ asset.fields.file.url;
            console.log(imageurl)
            var img=document.createElement("img")
            img.src=imageurl,
            img.width=100,
            img.height=200,
            img.alt='something went wrong with the image',
            document.body.appendChild(img);
          })

        })
      



    // this.contentfulservice.getPosts()
    //.then(posts => console.log(posts))

  }

}
