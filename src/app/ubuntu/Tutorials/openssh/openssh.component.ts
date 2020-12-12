import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-openssh',
  templateUrl: './openssh.component.html',
  styleUrls: ['./openssh.component.css']
})
export class OpensshComponent implements OnInit {

  constructor( private meta: Meta, private titleservice: Title) { }

  ngOnInit() {
    this.titleservice.setTitle('Open-SSH Installation');
    this.meta.addTag({
      name: 'open ssh',
      content: 'here we were showing how to install open ssh and use it on linux machine'
    });
    var disqus_config = function () {
      this.page.url = 'https://visionrosetta.in/ubuntu-openssh';  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier ='ubuntu-openssh'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://https-visionrosetta-in-3.disqus.com/embed.js';
      s.setAttribute('data-timestamp', new Date().toString());
      (d.head || d.body).appendChild(s);
      })();
      
  }
 
}
