import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {InstallnodejsubuntuComponent} from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import {NonrootuserComponent} from'./kali_linux/kali_tutorials/nonrootuser/nonrootuser.component';
import{KaliTutorialsHomeComponent} from './kali_linux/kali-tutorials-home/kali-tutorials-home.component'
import{LinuxCommandComponent} from './linux-command/linux-command.component';
import{ErrorComponent} from './lazymodule/error/error.component'; 

const routes: Routes = [

  {path : '', component: HomeComponent},
 
  {path:'', loadChildren: './lazymodule/lazymodule.module#LazymoduleModule'},

  {path:'',loadChildren: './ubuntu/ubuntu.module#UbuntuModule'},

  {path:'',  loadChildren:'./shell_script_tut/shell-script.module#ShellScriptModule'},
    

  {path:'create-non-root-user-on-kali', component:NonrootuserComponent},

  {path: 'install-latest-nodejs-npm-on-ubuntu', component: InstallnodejsubuntuComponent},

  {
    path:'kali-linux-tutorials',
    component:KaliTutorialsHomeComponent
  },

  
  {
    path:'top-useful-linux-command',
    component:LinuxCommandComponent
  },

  {
    path:'**',
    component:ErrorComponent
  }
 

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 