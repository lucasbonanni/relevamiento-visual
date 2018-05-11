import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ImageModel } from '../../models/imageModel';
import { User } from '@firebase/auth-types';
import { ImageDbProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the PhotoTakerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo-taker',
  templateUrl: 'photo-taker.html',
})
export class PhotoTakerPage implements OnInit {

  type: any;
  user: User;
  public photos: ImageModel[];
  public base64Image: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private alertCtrl: AlertController,
    private auth: AuthServiceProvider,
    private imageDb: ImageDbProvider
  ) {
    this.type = this.navParams.get('type');
  }

  ngOnInit(): void {
    this.photos = [];
    this.user = this.auth.getUserInfo();
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      let image = new ImageModel();
      image.displayName = this.user.displayName;
      image.image64Data = this.base64Image;
      this.photos.push(image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoTakerPage');
  }

  takePhoto() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      let image = new ImageModel();
      image.displayName = this.user.displayName;
      image.image64Data = this.base64Image;
      this.photos.push(image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }


  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: '¿Está seguro que quiere elminar la imagen?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
            this.photos.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }

  public uploadPhotos() {
    if(this.photos.length > 0){
      if (this.type === 'feas') {
        this.uploadFeas();
      } else if (this.type === 'lindas') {
        this.uploadLindas();
      }
    }
    this.navCtrl.pop();
  }

  private uploadFeas() {
    for (let index = 0; index < this.photos.length; index++) {
      this.imageDb.pushImageFea(this.photos[index]).then(subieron => {
        console.log('subieron las imagenes',subieron);
      }, rejected => {
        console.log('rechazado', rejected);
      });
    }
  }

  private uploadLindas() {
    for (let index = 0; index < this.photos.length; index++) {
      this.imageDb.pushImageLinda(this.photos[index]);
    }
  }

}
