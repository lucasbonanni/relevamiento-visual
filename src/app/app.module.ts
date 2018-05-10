import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//ionic plugins
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Camera } from '@ionic-native/camera';

//App modules
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImageSlidePage } from '../pages/image-slide/image-slide';
import { PhotoTakerPage } from '../pages/photo-taker/photo-taker';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
//firebase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../enviroments/enviroment';
import { AngularFireModule } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { FirebaseProvider } from '../providers/firebase/firebase';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImageSlidePage,
    PhotoTakerPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ImageSlidePage,
    PhotoTakerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    AuthServiceProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
