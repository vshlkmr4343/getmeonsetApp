import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Network } from '@ionic-native/network/ngx';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { SideMenuHeaderComponent} from './utility/side-menu-header/side-menu-header.component';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { SearchPageModule} from './search/search.module'
//Pipe

import { GigtypePipe } from './pipes/gigtype.pipe';
import { GendertypePipe } from './pipes/gendertype.pipe';
import { ReharsalpaymentPipe } from './pipes/reharsalpayment.pipe';
import { IsnudityPipe } from './pipes/isnudity.pipe';
import { ViewmorePipe } from './pipes/viewmore.pipe';
import { PhonePipe } from './pipes/phone.pipe'


@NgModule({
  declarations: [
  AppComponent,
  SideMenuHeaderComponent,
  // GigtypePipe,
  // GendertypePipe,
  // ReharsalpaymentPipe,
  // IsnudityPipe,
  //ViewmorePipe,
  //PhonePipe
],
  entryComponents: [SideMenuHeaderComponent],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot({animated: false}),
    AppRoutingModule,
    SearchPageModule
  ],
  providers: [
    DocumentViewer,
    FileTransfer,
    File,
    FilePath,
    FileChooser,
    Network,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
