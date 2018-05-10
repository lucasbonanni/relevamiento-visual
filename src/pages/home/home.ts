import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageSlidePage } from '../image-slide/image-slide';
import { PhotoTakerPage } from '../photo-taker/photo-taker';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test:number;
  constructor(public navCtrl: NavController, private auth: AuthServiceProvider) {
    this.test = 0;
  }

  panned(){
    this.test++;
    console.log(this.test);
  }

  cosasFeas(){
    this.navCtrl.push(ImageSlidePage);
  }

  takePhoto(){
    this.navCtrl.push(PhotoTakerPage);
  }

  public logout() {
    this.auth.signOut().then(() => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

}
