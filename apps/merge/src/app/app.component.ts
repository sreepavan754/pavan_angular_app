import { Component } from '@angular/core';
import { account } from '@multi/account';
@Component({
  selector: 'multi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'merge';
  data:any = account();
  
}
