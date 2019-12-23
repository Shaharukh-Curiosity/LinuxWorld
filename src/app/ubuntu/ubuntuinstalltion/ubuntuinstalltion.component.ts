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

  }

}
