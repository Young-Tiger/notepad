
import { Component, ViewContainerRef, ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { MyPage } from '../my-page/my-page';
import {TextaddPage} from '../textadd/textadd'

/**
 * Generated class for the YourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'your.html',
})
export class YourPage {
    
    public DataArray: Array<Object>;
    myDate: String = new Date().toISOString();
  
    constructor(public navCtrl: NavController, private sqlite:SQLite, private viewContainerRef:ViewContainerRef, private componentFactoryResolver:ComponentFactoryResolver) {
      //var today = new Date();
      console.log("homepae :: constructor()");
      this.Reload();
    }
    add(){
      let factoryResolver = this.componentFactoryResolver.resolveComponentFactory(TextaddPage);
      let viewCntRef = this.viewContainerRef.createComponent(factoryResolver);
      viewCntRef.instance.viewCntRef = viewCntRef;
      viewCntRef.instance.testFun.subscribe( data => { //rxjs
        this.Reloadtest();
      });

      //this.navCtrl.push("textaddPage");
    }
    
    username='';
    usermemo='';
    items=[];
    datec:String;
    getDatetime(){
      var arrayDay = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
      var datec:any=new Date();
      var nowMonth = datec.getMonth()+1;
      var nowDate = datec.getDate();
      var nowYear = datec.getFullYear();
      var nowDay = arrayDay[datec.getDay()];
      this.datec = nowYear + "년/" + nowMonth + "월/" + nowDate + "일/" + nowDay;
    }
    Reloadtest(){
      this.Reload();
    }
    Reload(){
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
      .then((db:SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS notepad(idx INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,memo TEXT, createtime TEXT)', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
        db.executeSql('select * from notepad', {}).then((data) => {
          console.log(JSON.stringify(data)+"qq");
          this.items=[];
          if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
          this.items.push(
            {
             name: data.rows.item(i).name,
             memo: data.rows.item(i).memo,
             ctime: data.rows.item(i).createtime
            }
          );
          }
          }
        }, (err) => {
          console.log('Unable to execute sql: '+JSON.stringify(err));
          });
          })
          .catch(e => console.log(JSON.stringify(e)+"aa"));
         
          
          }
          
          }