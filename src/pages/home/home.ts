import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	
   constructor(public navCtrl: NavController) {

  }


fechaCorta: string = new Date().toISOString();
  fecha: string = this.fechaCorta;
  minFecha: string = (new Date().getFullYear()-5).toString();
  maxFecha: string = (new Date().getFullYear()+5).toString();

}
