import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular112720';
  onButtonClick() {
      this.title = 'Hello from Kendo UI!';
  }
  public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
	public opened = false;

	public close(status: any) {
	  console.log(`Dialog result: ${status}`);
	  this.opened = false;
	}

	public open() {
	  this.opened = true;
	}
}
