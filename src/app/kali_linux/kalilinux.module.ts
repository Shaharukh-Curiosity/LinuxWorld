import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
//import{NonrootuserComponent} from './kali_tutorials/nonrootuser/nonrootuser.component';
import{KaliTutorialsHomeComponent} from './kali-tutorials-home/kali-tutorials-home.component';
const routes: Routes=[
{
    //path:'create-non-root-user-on-kali',
    //component: NonrootuserComponent
},
{
    path:'kali-linux-tutorials',
    component:KaliTutorialsHomeComponent

}
 ]

@NgModule({
declarations:[],
imports:[
    CommonModule,
    RouterModule.forChild(routes)
]
 
})

export class KaliliunxModule{
    constructor(){
        console.log('kali Linux Lazy Module has been called');
    }

}