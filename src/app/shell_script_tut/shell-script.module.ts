import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellScriptHomeComponent } from './shell-script-home/shell-script-home.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { ShellIntroComponent } from './shell_script_tutorials/shell-intro/shell-intro.component';
import { ConditionalStatmentComponent } from './shell_script_tutorials/conditional-statment/conditional-statment.component';

const routes: Routes = [
  {
    path:'shell-script-tutorials',
    component:ShellScriptHomeComponent
  },
  {
    path:'introduction-linux-shell-scripting',
    component:ShellIntroComponent
  },
  {
    path:'conditional-statement-in-shell-script',
    component:ConditionalStatmentComponent
  }
]
 
@NgModule({
  declarations: [ShellScriptHomeComponent, ShellIntroComponent, ConditionalStatmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShellScriptModule { }
