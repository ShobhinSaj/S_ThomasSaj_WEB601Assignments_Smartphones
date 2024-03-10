import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ContentCardComponent } from './content-card/content-card.component';
import {ContentListComponent} from './content-list/content-list.component';
import {MessagesComponent} from './messages/messages.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContentListComponent,MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SmartPhones';
}
