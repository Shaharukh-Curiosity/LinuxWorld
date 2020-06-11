import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import {MatCardModule, MatInputModule, MatButtonModule, MatRadioModule, MatSnackBarModule,
 MatGridListModule, MatFormFieldModule, MatCheckboxModule, MatDialogModule,MatMenuModule, MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'; 
import { FooterComponent } from './footer/footer.component';   
import { HomeComponent } from './home/home.component';
import { InstallnodejsubuntuComponent } from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import { KaliTutorialsHomeComponent } from './kali_linux/kali-tutorials-home/kali-tutorials-home.component';
import {NonrootuserComponent} from'./kali_linux/kali_tutorials/nonrootuser/nonrootuser.component';
import { LinuxCommandComponent } from './linux-command/linux-command.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import{ErrorComponent} from './lazymodule/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent, 
    InstallnodejsubuntuComponent, KaliTutorialsHomeComponent ,ErrorComponent, NonrootuserComponent, LinuxCommandComponent, NewsletterComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,
    MatRadioModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule
     
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
