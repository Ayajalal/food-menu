import { Component } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodmenu';
   sub1=new BehaviorSubject(1);
   constructor() {
   }

}
