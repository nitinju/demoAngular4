import { NgModule, Component } from '@angular/core';
// import { ButtonComponent } from './button/button.component';
@Component({
    template: '<router-outlet></router-outlet>',
})
export class RootComponent {}

@Component({
  // selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works fine!';
  userList = false;
  users = ['test', 'test2', 'test3'];
}
