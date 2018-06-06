import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';

/**
 * Generated class for the AddbeachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addbeach',
  templateUrl: 'addbeach.html',
})
export class AddbeachPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public platform: Platform,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbeachPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
