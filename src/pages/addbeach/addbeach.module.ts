import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddbeachPage } from './addbeach';
import {BeachProvider} from "../../providers/beach/beach";

@NgModule({
  declarations: [AddbeachPage],
  imports: [IonicPageModule.forChild(AddbeachPage)],
  providers: [BeachProvider]
})
export class AddbeachPageModule {}
