import {Component} from "@angular/core";
import {NavController} from "ionic-angular"; 
@Component({
    template:'<button ion-button (click)="onBack()">뒤로가기</button>'
})
export class MyPage{
    constructor(public navCtrl: NavController){
        
    }
    onBack(){
        this.navCtrl.pop();
    }    
}