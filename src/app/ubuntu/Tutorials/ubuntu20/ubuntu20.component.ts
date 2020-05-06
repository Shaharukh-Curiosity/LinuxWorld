import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import {ContentfulService} from '../../../service/contentful.service';
import {Router} from '@angular/router';
import {createClient} from 'contentful'
import {environment} from '../../../../environments/environment'
@Component({
  selector: 'app-ubuntu20',
  templateUrl: './ubuntu20.component.html',
  styleUrls: ['./ubuntu20.component.css']
})
export class Ubuntu20Component implements OnInit {
  
  posts: Entry<any>[] = [];

   
  constructor(private router:Router,private contentfulservice: ContentfulService) {
 
   }

  ngOnInit() {
    this.contentfulservice.getPosts()
    .then(posts => this.posts = posts)

  }
 
}
