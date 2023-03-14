import { Component } from '@angular/core';

@Component({
  selector: 'l-header', // prefix "l" mean that component is needed for "layout"
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'header';
  text = 'ffff';
}
