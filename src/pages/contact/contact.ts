import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {

  constructor(public navCtrl: NavController) {
					
  }

   
perfil(){
	this.navCtrl.push(AboutPage, { status: 'Rodri',habilidad: 'cocinar'})

}


nombre_propiedad:string = 'Esto es un test';

}


