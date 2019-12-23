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
    this.titleservice.setTitle('visionrosetta'); 
    this.meta.addTag({
      name: 'Ubuntu,SSH,KaliLinux',
      content: 'this blog has been designed special for tech savvy'
 
  })
}
 

}
