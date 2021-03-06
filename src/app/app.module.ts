import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyPage } from '../pages/my-page/my-page';
import { YourPage } from '../pages/your/your';
import { TextaddPage } from '../pages/textadd/textadd';
import { SQLite } from '@ionic-native/sqlite'
import {HelloworldPageModule} from '../pages/helloworld/helloworld.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyPage,
    YourPage,
    TextaddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HelloworldPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyPage,
    YourPage,
    TextaddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
