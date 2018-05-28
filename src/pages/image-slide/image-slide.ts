import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content, Slides } from 'ionic-angular';
import { ImageModel } from '../../models/imageModel';
import { Observable } from 'rxjs/Observable';
import { ImageDbProvider } from '../../providers/firebase/firebase';
import { PhotoTakerPage } from '../photo-taker/photo-taker';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { Subscription } from 'rxjs/Subscription';
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
  @ViewChild('slides') slidesRef: Slides;
  y: number;
  subscription: Subscription;
  // public contentHeight: number;
  public orientationY: number;
  orientationX: number;

  @ViewChild('content') content: Content


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: ImageDbProvider,
    private deviceMotion: DeviceMotion,
    private platform: Platform) {
    this.type = this.navParams.get('type');
  }

  ngOnInit(): void {
    if (this.type === 'feas') {
      this.images = this.firebase.getFeas();
    } else if (this.type === 'lindas') {
      this.images = this.firebase.getLindas();
    }
    this.platform.ready().then(() => {
      // Get the device current acceleration
      this.deviceMotion.getCurrentAcceleration().then(
        (acceleration: DeviceMotionAccelerationData) => {
          this.orientationX = acceleration.x;
          this.orientationY = acceleration.y;
          // this.orientationZ = acceleration.z;
        },
        (error: any) => alert(error)
      );
      this.y = 200;
      // this.contentHeight = this.content.scrollHeight;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageSlidePage');
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      // Watch device acceleration
    
      this.subscription = this.deviceMotion.watchAcceleration({ frequency: 300 })
        .subscribe((acceleration: DeviceMotionAccelerationData) => {
          this.orientationX = acceleration.x;
          this.orientationY = acceleration.y;
          if (this.orientationX > 4 ) {
            this.slidesRef.slideNext();
          }
          if (this.orientationX < -4 && this.y > 0) {
            this.slidesRef.slidePrev();
          }
        },
          (error: any) => alert(error)
        );

    });
  }

  public takePhoto() {
    this.navCtrl.push(PhotoTakerPage, { type: this.type });
  }

  ionViewWillUnload() {
    this.subscription.unsubscribe();
  }
}
