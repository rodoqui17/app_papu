import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 nombre_propiedad:string = 'Esto es un test';

  constructor(public navCtrl: NavController) {

  }

}
