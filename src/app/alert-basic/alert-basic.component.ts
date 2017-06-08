import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-alert-basic',
  templateUrl: './alert-basic.component.html',
  styleUrls: ['./alert-basic.component.css']
})
export class AlertBasicComponent {
  public alerts: Array<t> = [];
  constructor() {
    this.alerts.push({id:1, message: "alert1"}, {id:2, message: "alert2"})
}

}
export interface t{
  id: number;
  message: string;
}
