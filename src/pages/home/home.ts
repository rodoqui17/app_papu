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


servicios = [
        {"nombre": 'Cuidado de niños'},
        {"nombre": 'Cuidado de adultos'},
		{"nombre": 'Cuidado de mascotas'},
        {"nombre": 'Cuidado del hogar'} 
      ];

      zonas = [
        { "nombre": 'San Pedro'},
        { "nombre": 'Sopocachi'},
        { "nombre": 'Miraflores'},
        { "nombre": 'Obrajes'}, 
      ];

fechaCorta: string = new Date().toISOString();
  fecha: string = this.fechaCorta;
  servicio:string = this.servicio;
  minFecha: string = (new Date().getFullYear()-5).toString();
  maxFecha: string = (new Date().getFullYear()+5).toString();
  buscar(val:string){
	this.navCtrl.push(ContactPage, { servicio: val})
	alert(val);

}

}
