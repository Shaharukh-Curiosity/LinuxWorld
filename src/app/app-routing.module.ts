import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {InstallnodejsubuntuComponent} from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import {NonrootuserComponent} from'./kali_linux/kali_tutorials/nonrootuser/nonrootuser.component';
import{KaliTutorialsHomeComponent} from './kali_linux/kali-tutorials-home/kali-tutorials-home.component'
import {ChromeExtensionComponent} from './chrome-extension/chrome-extension.component';
import{LinuxCommandComponent} from './linux-command/linux-command.component';
import {GoogleSheetComponent} from './google/google-sheet/google-sheet.component';
import { NewsletterComponent } from './newsletter/newsletter.component';


const routes: Routes = [

  {path : '', component: HomeComponent},
 
  {path:'', loadChildren: './lazymodule/lazymodule.module#LazymoduleModule'},

  {path:'',loadChildren: './ubuntu/ubuntu.module#UbuntuModule'},

  //{path:'', loadChildren: './kali_linux/kalilinux.module#KalilinuxModule'},
  
  {path:'create-non-root-user-on-kali', component:NonrootuserComponent},

  {path: 'ubuntu-nodejs-installation', component: InstallnodejsubuntuComponent},

  {
    path:'kali-linux-tutorials',
    component:KaliTutorialsHomeComponent
  },

  {
    path:'csv-to-json-converter',
    component:ChromeExtensionComponent
  },
  {
    path:'top-useful-linux-command',
    component:LinuxCommandComponent
  },

    {path:'how-to-submit-an-html-form-to-google-sheet-without-google-forms',
    component:GoogleSheetComponent
 } ,

 {
   path:'newsletter',
   component:NewsletterComponent
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 