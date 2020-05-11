import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  
  constructor(private router: Router, private meta: Meta, private titleservice: Title) { }

  ngOnInit() {
    this.titleservice.setTitle('visionrosetta:Linux How-To Tutorials and Guides'); 
    this.meta.addTag({
      name: 'Ubuntu,OpenSSH,KaliLinux,Shell Script, Basic Useful Command',
      content: 'Ubuntu, Kali Linux & Shell Script Tutorials'
 
  })
}
 

}
