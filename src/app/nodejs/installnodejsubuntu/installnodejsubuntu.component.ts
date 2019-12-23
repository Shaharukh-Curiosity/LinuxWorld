import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-installnodejsubuntu',
  templateUrl: './installnodejsubuntu.component.html',
  styleUrls: ['./installnodejsubuntu.component.css']
})
export class InstallnodejsubuntuComponent implements OnInit {

  constructor( private meta: Meta, private titleservice: Title) { }

  ngOnInit() {
    this.titleservice.setTitle('Node Js Installation');
    this.meta.addTag({
      name: 'nodejsubuntu',
      content: 'How to install nodejs on ubuntu'
    });
  }

}
