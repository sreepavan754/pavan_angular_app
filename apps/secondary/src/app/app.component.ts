import { Component } from '@angular/core';
import { account } from '@multi/account';
@Component({
  selector: 'multi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'secondary';
  data:any;
  showDataSecond(){
    this.data = account();
  }
}
