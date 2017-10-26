import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelloworldPage } from './helloworld';

@NgModule({
  declarations: [
    HelloworldPage,
  ],
  imports: [
    IonicPageModule.forChild(HelloworldPage),
  ],
  entryComponents:[
    HelloworldPage
  ]
})
export class HelloworldPageModule {}
