import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { NavParams } from 'ionic-angular';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
servicio:string;
// fecha:string;
// hora:string;
// zona:string
  constructor(public navCtrl: NavController,  public navParams: NavParams ) {
	 this.servicio =this.navParams.get('servicio');
 // this.fecha =this.navParams.get('fecha');
 // this.hora =this.navParams.get('hora');
 // this.zona =this.navParams.get('zona');

  }

   
perfil(){
	this.navCtrl.push(AboutPage, { status: 'nombre' ,habilidad: 'cocinar'})

}


nombre_propiedad:string = 'Esto es un test';

}


