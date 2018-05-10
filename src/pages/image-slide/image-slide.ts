import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImageSlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-slide',
  templateUrl: 'image-slide.html',
})
export class ImageSlidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('type'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageSlidePage');
  }

}
