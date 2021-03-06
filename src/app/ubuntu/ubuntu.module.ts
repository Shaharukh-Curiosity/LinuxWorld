import{NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{UbuntuinstalltionComponent} from './ubuntuinstalltion/ubuntuinstalltion.component';
import{UbuntuTutHomeComponent} from './ubuntu-tut-home/ubuntu-tut-home.component';
import{DetectingOpenportComponent} from './Tutorials/detecting-openport/detecting-openport.component';
import {OpensshComponent}from './Tutorials/openssh/openssh.component';
import { PartitionFilesystemComponent } from './Tutorials/partition-filesystem/partition-filesystem.component';
import { Ubuntu20Component } from './Tutorials/ubuntu20/ubuntu20.component';
import { UbuntuLoginLoopProblemComponent } from './Tutorials/ubuntu-login-loop-problem/ubuntu-login-loop-problem.component';
import { BraveBrowserComponent } from './Tutorials/brave-browser/brave-browser.component';
 const routes: Routes=[

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
    } ,
    
    {
        path:'ubuntu-20.4-login-loop-problem',
        component:UbuntuLoginLoopProblemComponent
    },
    {
        path:'brave-browser-install',
        component:BraveBrowserComponent
    }
]

@NgModule({
    declarations:[UbuntuTutHomeComponent,UbuntuinstalltionComponent,DetectingOpenportComponent, OpensshComponent, PartitionFilesystemComponent, Ubuntu20Component, UbuntuLoginLoopProblemComponent, BraveBrowserComponent],
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