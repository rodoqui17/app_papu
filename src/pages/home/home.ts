import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

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

  buscar(){
	this.navCtrl.push(ContactPage, { status: 'Rodrigo',habilidad: 'cocinar'})

}

}
