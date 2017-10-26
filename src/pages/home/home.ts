import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { MyPage } from '../my-page/my-page';
import { YourPage } from '../your/your';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public DataArray: Array<Object>;

  constructor(public navCtrl: NavController, private sqlite:SQLite, private viewContainerRef:ViewContainerRef, private componentFactoryResolver:ComponentFactoryResolver) {
    console.log("homepae :: constructor()");
    
  }
  onClickYour(){
   this.navCtrl.push(YourPage);
  }
}