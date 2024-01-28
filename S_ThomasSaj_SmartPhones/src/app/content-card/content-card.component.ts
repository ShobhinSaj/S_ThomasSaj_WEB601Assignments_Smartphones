import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList;
  constructor() {
    this.contentList = new ContentList();

    this.contentList.add({
      id: 1,
      title: 'Iphone 15 Pro',
      description: 'Sleek design that seamlessly merges elegance with cutting-edge technology.',
      creator: 'Apple',
      imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/iphne15pro.jpg',
      type: 'Smartphone',
      tags: ['Apple', 'iphone','iphone15','iphone15pro'],
    });

    this.contentList.add({
      id: 2,
      title: 'Google Pixel 9 Pro',
      description: 'Experience the stock Android OS at its best with the all new Pixel 8 Pro',
      creator: 'Google',
      imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/pixel8pro.jpg',
      type: 'Google Smartphones',
      tags: ['Google', 'pixel','pixel8pro'],
    });

    this.contentList.add({
      id: 3,
      title: 'Samsung Galaxy S23',
      description: 'Latest and Greatest from the all new Flagship S23 series of smartphones from Samsung',
      creator: 'Samsung',
      imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/s23.jpg',
      type: 'Samsung Mobile',
      tags: ['samsung','galaxy','s23','s23ultra'],
    });
  }
}
