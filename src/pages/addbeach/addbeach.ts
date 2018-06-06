import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

import { BeachTypeProvider } from '../../providers/beachtype/beachtype'


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

  @ViewChild('addbeachSlider') addbeachSlider: any;
  beachTypes: any;

  submitAttempt: boolean = false;

  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  next(){
    this.addbeachSlider.slideNext();
  }

  prev(){
    this.addbeachSlider.slidePrev();
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public platform: Platform,
              public formBuilder: FormBuilder,
              public beachTypeProvider: BeachTypeProvider) {

    beachTypeProvider.getBeachTypes().then(data => {
      this.beachTypes = data;
    });

    this.slideOneForm = formBuilder.group({
      name: [''],
      beachType: [''],
      dogAllowed: [false]
    });

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
