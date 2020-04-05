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
import { ChromeExtensionComponent } from './chrome-extension/chrome-extension.component';
import { LinuxCommandComponent } from './linux-command/linux-command.component';
import { GoogleSheetComponent } from './google/google-sheet/google-sheet.component';
import {AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import{environment} from '../environments/environment';
import { NewsletterComponent } from './newsletter/newsletter.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent, 
    InstallnodejsubuntuComponent, KaliTutorialsHomeComponent , NonrootuserComponent, ChromeExtensionComponent, LinuxCommandComponent, GoogleSheetComponent, NewsletterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
