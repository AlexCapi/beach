import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AddbeachPage } from './addbeach';
import {BeachProvider} from "../../providers/beach/beach";
import {BeachTypeProvider} from "../../providers/beachtype/beachtype";

@NgModule({
  declarations: [AddbeachPage],
  imports: [
    IonicPageModule.forChild(AddbeachPage),
    ReactiveFormsModule
  ],
  providers: [
    BeachProvider,
    BeachTypeProvider
  ]
})
export class AddbeachPageModule {}
