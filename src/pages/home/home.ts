import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageSlidePage } from '../image-slide/image-slide';
import { PhotoTakerPage } from '../photo-taker/photo-taker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test:number;
  constructor(public navCtrl: NavController) {
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

}
