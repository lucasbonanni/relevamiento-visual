import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//ionic plugins
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Camera } from '@ionic-native/camera';
import { DeviceMotion } from '@ionic-native/device-motion';

//App modules
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ImageSlidePage } from '../pages/image-slide/image-slide';
// import { PhotoTakerPage } from '../pages/photo-taker/photo-taker';
// import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
//firebase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../enviroments/enviroment';
import { AngularFireModule } from 'angularfire2';

import { ImageDbProvider } from '../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { BusyLoaderProvider } from '../providers/busy-loader/busy-loader';

import { ImageSlidePageModule } from '../pages/image-slide/image-slide.module';
import { LoginPageModule } from '../pages/login/login.module';
import { PhotoTakerPageModule } from '../pages/photo-taker/photo-taker.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ImageSlidePage,
    // PhotoTakerPage,
    // LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicImageViewerModule,
    ImageSlidePageModule,
    LoginPageModule,
    PhotoTakerPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // ImageSlidePage,
    // PhotoTakerPage,
    // LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceMotion,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    AngularFireDatabase,
    AuthServiceProvider,
    ImageDbProvider,
    BusyLoaderProvider
  ]
})
export class AppModule {}
