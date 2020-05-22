import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellScriptHomeComponent } from './shell-script-home/shell-script-home.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { ShellIntroComponent } from './shell_script_tutorials/shell-intro/shell-intro.component';

const routes: Routes = [
  {
    path:'shell-script-tutorials',
    component:ShellScriptHomeComponent
  },
  {
    path:'introduction-linux-shell-scripting',
    component:ShellIntroComponent
  }
]
 
@NgModule({
  declarations: [ShellScriptHomeComponent, ShellIntroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShellScriptModule { }
