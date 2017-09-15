import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
MyParam:string;
Habilidad:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 this.MyParam =this.navParams.get('status');
 this.Habilidad =this.navParams.get('habilidad');
 }

}
