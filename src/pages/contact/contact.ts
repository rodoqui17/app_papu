import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, AlertController } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {

  constructor(public navCtrl: NavController,private oneSignal: OneSignal,
private alertCtrl: AlertController) {
					
  }

   
perfil(){
	this.navCtrl.push(AboutPage, { status: 'Rodrigo',habilidad: 'cocinar'})

}


nombre_propiedad:string = 'Esto es un test';

}


