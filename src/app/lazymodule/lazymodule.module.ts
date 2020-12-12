import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AboutusComponent} from './aboutus/aboutus.component';
import{FeedbackComponent} from './feedback/feedback.component';
import{PrivacyComponent} from './privacy/privacy.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes=[

{path:'aboutus', component:AboutusComponent},
{path:'feedback', component:FeedbackComponent},
{path:'privacy-terms',component:PrivacyComponent}
 

]
@NgModule({
  declarations: [AboutusComponent, FeedbackComponent,PrivacyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})


export class LazymoduleModule {

  constructor(){
    console.log('Lazy module loaded');
  }
 }
