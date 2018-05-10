import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageModel } from '../../models/imageModel';
import { Observable } from 'rxjs/Observable';
import { ImageDbProvider } from '../../providers/firebase/firebase';

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
export class ImageSlidePage implements OnInit {

  public images: Observable<ImageModel[]>;
  public type: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase: ImageDbProvider) {
    this.type = this.navParams.get('type');
  }

  ngOnInit(): void {
    // if(this.type === 'feas'){
    //   this.images = this.firebase.getFeas();
    // }else if(this.type === 'lindas'){
    //   this.images = this.firebase.getLindas();
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageSlidePage');
  }

}
