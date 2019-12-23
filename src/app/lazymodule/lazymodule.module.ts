import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AboutusComponent} from './aboutus/aboutus.component';
import{FeedbackComponent} from './feedback/feedback.component';
import{SitemapComponent} from './sitemap/sitemap.component';
import{PrivacyComponent} from './privacy/privacy.component';
import{ErrorComponent} from './error/error.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes=[

{path:'aboutus', component:AboutusComponent},
{path:'feedback', component:FeedbackComponent},
{path:'sitemap', component:SitemapComponent},
{path:'privacy',component:PrivacyComponent}
//{path:'**', component:ErrorComponent}

]
@NgModule({
  declarations: [AboutusComponent, FeedbackComponent,SitemapComponent,PrivacyComponent,ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})


export class LazymoduleModule {

  constructor(){
    console.log('module loaded');
  }
 }
