import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
 
@Component({
  selector: 'app-nonrootuser',
  templateUrl: './nonrootuser.component.html',
  styleUrls: ['./nonrootuser.component.css']
})
export class NonrootuserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
 
    var disqus_config = function () {
      this.page.url = 'https://visionrosetta.in/create-non-root-account-on-kali';  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier ='create-non-root-account-on-kali'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://https-visionrosetta-in-3.disqus.com/embed.js';
      s.setAttribute('data-timestamp', new Date().toString());
      (d.head || d.body).appendChild(s);
      })();
      
  }

}
