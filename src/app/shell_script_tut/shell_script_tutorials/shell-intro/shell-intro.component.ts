import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-intro',
  templateUrl: './shell-intro.component.html',
  styleUrls: ['./shell-intro.component.css']
})
export class ShellIntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var disqus_config = function () {
      this.page.url = 'https://visionrosetta.in/introduction-linux-shell-scripting';  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier ='introduction-linux-shell-scripting'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://https-visionrosetta-in-3.disqus.com/embed.js';
      s.setAttribute('data-timestamp', new Date().toString());
      (d.head || d.body).appendChild(s);
      })();
      
  }

  

}
