import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { BeachProvider } from '../../providers/beach/beach'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beaches: any;

  constructor(public navCtrl: NavController, public beachProvider: BeachProvider, public modalCtrl: ModalController) {
    this.getBeaches();
  }

  getBeaches() {
    this.beachProvider.getBeaches()
      .then(data => {
        this.beaches = data;
        console.log("Beaches", this.beaches);
      });
  }

  presentModal() {
    const modal = this.modalCtrl.create('AddbeachPage');
    modal.present();
  }

}
