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
  }

}
