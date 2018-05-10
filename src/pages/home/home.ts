import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageSlidePage } from '../image-slide/image-slide';
import { PhotoTakerPage } from '../photo-taker/photo-taker';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  user: User;
  constructor(public navCtrl: NavController, private auth: AuthServiceProvider) {
    
  }

  ngOnInit(): void {
    this.user = this.auth.getUserInfo();
  }

  cosasFeas(){
    this.navCtrl.push(ImageSlidePage, {type:'feas'});
  }

  cosasLindas(){
    this.navCtrl.push(ImageSlidePage, {type:'lindas'});
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
