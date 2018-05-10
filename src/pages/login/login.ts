import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, AlertController, LoadingController, ActionSheetController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { usuarios } from '../../app/users';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email: '', password: '', photoURL: '', displayName: '' };
  private: ActionSheetController;
  constructor(
    private nav: NavController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    this.auth.signInWithEmail(this.registerCredentials).then(allowed => {
      console.log(allowed);
      this.nav.setRoot(HomePage);
    }).catch(error => {
      alert(error);
      this.loading.dismiss();
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Se produjo un error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  loginWithGithub() {
    this.auth.signInWithGithub().then(() => {
      this.nav.setRoot(HomePage);
    }).catch(error => {
      alert(error);
    });;
  }

  loginWithGoogle() {
    this.auth.signInWithGoogle().then(() => {
      this.nav.setRoot(HomePage);
    }).catch(error => {
      alert(error);
    });
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Seleccionar un usuario',
      buttons: [
        {
          text: usuarios[0].perfil + ' ' + usuarios[0].nombre,
          handler: () => {
            this.registerCredentials.email = usuarios[0].nombre;
            this.registerCredentials.password = usuarios[0].clave;
            this.login();
          }
        }, {
          text: usuarios[1].perfil + ' ' + usuarios[1].nombre,
          handler: () => {
            this.registerCredentials.email = usuarios[1].nombre;
            this.registerCredentials.password = usuarios[1].clave;
            this.login();
          }
        }, {
          text: usuarios[2].perfil + ' ' + usuarios[2].nombre,
          handler: () => {
            this.registerCredentials.email = usuarios[2].nombre;
            this.registerCredentials.password = usuarios[2].clave;
            this.login();
            
          }
        },
        {
          text: usuarios[3].perfil + ' ' + usuarios[3].nombre,
          handler: () => {
            this.registerCredentials.email = usuarios[3].nombre;
            this.registerCredentials.password = usuarios[3].clave;
            this.login();
          }
        },
        {
          text: usuarios[4].perfil + ' ' + usuarios[4].nombre,
          handler: () => {
            this.registerCredentials.email = usuarios[4].nombre;
            this.registerCredentials.password = usuarios[4].clave;
            this.login();
          }
        }
      ]
    });
    actionSheet.present();
  }
}
