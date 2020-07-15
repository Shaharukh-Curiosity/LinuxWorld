import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detecting-openport',
  templateUrl: './detecting-openport.component.html',
  styleUrls: ['./detecting-openport.component.css']
})
export class DetectingOpenportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var disqus_config = function () {
      this.page.url = 'https://visionrosetta.in/detecting-open-port-linux';  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier ='detecting-open-port-linux'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://https-visionrosetta-in-3.disqus.com/embed.js';
      s.setAttribute('data-timestamp', new Date().toString());
      (d.head || d.body).appendChild(s);
      })();
      
  }

}
