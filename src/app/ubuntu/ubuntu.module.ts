import{NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{UbuntuinstalltionComponent} from './ubuntuinstalltion/ubuntuinstalltion.component';
import{UbuntuTutHomeComponent} from './ubuntu-tut-home/ubuntu-tut-home.component';
import{DetectingOpenportComponent} from './Tutorials/detecting-openport/detecting-openport.component';
import {OpensshComponent}from './Tutorials/openssh/openssh.component';
import { PartitionFilesystemComponent } from './Tutorials/partition-filesystem/partition-filesystem.component';
import { Ubuntu20Component } from './Tutorials/ubuntu20/ubuntu20.component';
<<<<<<< HEAD
import { UbuntuLoginLoopProblemComponent } from './Tutorials/ubuntu-login-loop-problem/ubuntu-login-loop-problem.component';
 const routes: Routes=[
=======
const routes: Routes=[
>>>>>>> 1ec4c86735c319ace676d54b3862a1df3224f11e

    {path:'ubuntu-19.04-installation', component:UbuntuinstalltionComponent},
    {path:'ubuntu-tutorials', component:UbuntuTutHomeComponent},
    {path:'detecting-open-port-linux', component:DetectingOpenportComponent},
    {
        path:'ubuntu-openssh',
        component:OpensshComponent
    },
    {
        path:'partition-filesystem-on-linux',
        component:PartitionFilesystemComponent
    },

    {path:'how-to-install-ubuntu-20.04',
     component:Ubuntu20Component
<<<<<<< HEAD
    } ,
    {
        path:'ubuntu-20.4-login-loop-problem',
        component:UbuntuLoginLoopProblemComponent
=======
>>>>>>> 1ec4c86735c319ace676d54b3862a1df3224f11e
    }
]

@NgModule({
<<<<<<< HEAD
    declarations:[UbuntuTutHomeComponent,UbuntuinstalltionComponent,DetectingOpenportComponent, OpensshComponent, PartitionFilesystemComponent, Ubuntu20Component, UbuntuLoginLoopProblemComponent],
=======
    declarations:[UbuntuTutHomeComponent,UbuntuinstalltionComponent,DetectingOpenportComponent, OpensshComponent, PartitionFilesystemComponent, Ubuntu20Component],
>>>>>>> 1ec4c86735c319ace676d54b3862a1df3224f11e
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class UbuntuModule{
    contructor(){
        console.log('ubuntu module loaded');
        
    }
}