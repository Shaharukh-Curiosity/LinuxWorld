import { Component, OnInit } from '@angular/core';
import { NewsletterService} from './newsletter.service';
import{Newslettermodel} from './newslettermodel'

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
 
  newsletter_subscribed = '';

  newsletter:Newslettermodel=new Newslettermodel();
  submitted=false;
 
  constructor(public nls:NewsletterService ) { 
   
  }

  ngOnInit() {
  
  }
 
/*
  save(){
    this.nls.add_new_newsletter(this.newsletter);
    this.newsletter=new Newslettermodel();
    alert('your subscription has been successfully added')
  }

  onSubmit(){
    this.submitted=true;
    this.save();

  }

   */
 
  
}
