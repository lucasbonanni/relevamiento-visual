import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ImageModel } from '../../models/imageModel';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider implements OnInit {

  public newMessage: ImageModel;
  public imageFeas: Observable<ImageModel[]>;
  public imageFeasRef: AngularFireList<ImageModel>;

  public imageLindas: Observable<ImageModel[]>;
  public imageLindasRef: AngularFireList<ImageModel>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.imageFeasRef = this.db.list<ImageModel>('relevamiento/feas');
    this.imageLindasRef = this.db.list<ImageModel>('relevamiento/lindas');
    this.imageFeas = this.imageFeasRef.valueChanges();
    this.imageLindas = this.imageLindasRef.valueChanges();
  }

  public pushImageLinda(image:ImageModel){
    return this.imageLindasRef.push(image);
  }

  public pushImageFea(image:ImageModel){
    return this.imageFeasRef.push(image);
  }

  public getFeas(){
    return this.imageFeas;
  }

  public getLindas(){
    return this.imageLindas;
  }

}
