import { Component, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite'

/**
 * Generated class for the TextaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-textadd',
  templateUrl: 'textadd.html',
})
export class TextaddPage {

  viewCntRef:any;
  
  @Output() 
  testFun:any = new EventEmitter<any>();

  constructor(public navCtrl: NavController, private sqlite:SQLite) {
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
    save(){
      this.viewCntRef.destroy();
      this.getDatetime();
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
      .then((db:SQLiteObject) => {
        
        db.executeSql('CREATE TABLE IF NOT EXISTS notepad(idx INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,memo TEXT, createtime TEXT)', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
        db.executeSql('INSERT INTO notepad(name,memo,createtime) VALUES(?,?,?)', [this.username,this.usermemo,this.datec])
        .then(() => console.log('Executed SQL삽입'))
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
          
            this.testFun.next("hello world!");
          
          

        }, (err) => {
          console.log('Unable to execute sql: '+JSON.stringify(err));
          });
          })
          .catch(e => console.log(JSON.stringify(e)+"aa"));
       
          
          }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad TextaddPage');
  }
 
}
