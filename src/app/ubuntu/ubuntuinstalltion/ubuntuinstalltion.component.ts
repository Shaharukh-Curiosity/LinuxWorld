import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ubuntuinstalltion',
  templateUrl: './ubuntuinstalltion.component.html',
  styleUrls: ['./ubuntuinstalltion.component.css']
})
export class UbuntuinstalltionComponent implements OnInit {

 
  constructor( private meta: Meta, private titleservice: Title) { 
    console.log('ubuntu installation component loaded')
  }

  ngOnInit() {
    this.titleservice.setTitle('Ubuntu Installation');
    this.meta.addTag({
      name: 'ubuntu',
      content: 'here we were provided ubuntu 1.04 installation tutorials from scratch'
    });
    var disqus_config = function () {
      this.page.url = 'https://visionrosetta.in/ubuntu-19.04-installation';  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier ='ubuntu-19.04-installation'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://https-visionrosetta-in-3.disqus.com/embed.js';
      s.setAttribute('data-timestamp', new Date().toString());
      (d.head || d.body).appendChild(s);
      })();
      
  }

  

}
