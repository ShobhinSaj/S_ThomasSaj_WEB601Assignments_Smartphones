import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Content } from '../helper-files/content-interface'
import { CommonModule } from '@angular/common';
import { SlicePipe } from '@angular/common';
import { ContentTypeFilterPipe } from './../pipes/content-type-filter/content-type-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ContentCardComponent } from './../content-card/content-card.component';
import { ContentCreateComponent } from './../content-create/content-create.component';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, SlicePipe, ContentTypeFilterPipe, FormsModule,ContentCardComponent,ContentCreateComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {


  private contentArray: Content[] = [
    {
      id: 1,
      title: 'Iphone 15 Pro',
      description: 'Sleek design that seamlessly merges elegance with cutting-edge technology.',
      creator: 'Apple',
      imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/iphne15pro.jpg',
      type: 'ios',
      tags: ['Apple', 'iphone', 'iphone15', 'iphone15pro']
    },
    {
      id: 2,
      title: 'Google Pixel 9 Pro',
      description: 'Experience the stock Android OS at its best with the all new Pixel 8 Pro',
      creator: 'Google',
      imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/pixel8pro.jpg',
      type: 'android',
      tags: ['Google', 'pixel', 'pixel8pro']
    },
    {
      id: 3,
      title: 'Samsung Galaxy S23',
      description: 'Latest and Greatest from the all new Flagship S23 series of smartphones from Samsung',
      creator: 'Samsung',
      imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/s23.jpg',
      type: 'android',
      tags: ['samsung', 'galaxy', 's23', 's23ultra']
    },
    {
      id: 4,
      title: 'OnePlus 10 Pro',
      description: 'Powerful performance and a stunning display in the latest flagship from OnePlus.',
      creator: 'OnePlus',
      imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/oneplus10.jpg',
      type: 'android',
      tags: ['OnePlus', 'oneplus10', 'oneplus10pro']
    },
    {
      id: 5,
      title: 'Xiaomi Mi 12',
      description: 'Innovative features and sleek design make the Mi 12 an exceptional choice.',
      creator: 'Xiaomi',
      //imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/mi10pro.jpg',
      imgURL:'',
      type: 'android',
      tags: ['Xiaomi', 'mi12']
    },
    {
      id: 6,
      title: 'Sony Xperia 5 Mark III',
      description: 'Experience cutting-edge technology with Sony\'s Xperia 5 Mark III.',
      creator: 'Sony',
      imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/sony.png',
      type: '',
      tags: ['Sony', 'xperia5', 'xperia5markiii']
    },
    {
      id: 7,
      title: 'Iphone 14',
      description: 'Iphone 14- Clever yet simple, subtle but effective. Performance that beats all other competitors',
      creator: 'Apple',
      imgURL: 'https://sthomassaj.scweb.ca/angularapp_assets/iphone14.jpeg',
      type: 'ios',
      tags: ['Apple', 'iphone14', 'iphone14pro']
    }
  ]
  searchTitle: string = '';
  searchResult = { exists: false, message: '' };
  showIdExistsWarning: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  getContentArray(): Content[] {
    return this.contentArray;

  }

  modTitle(title: string): string {
    return title.replace(/\s/g, '');
  }

  getHtmlOutput(index: number): string {
    if (index >= 0 && index < this.contentArray.length) {
      const item = this.contentArray[index];
      // let isFirstCard = index === 0;  
      // const cardClass = `card mb-3 ${isFirstCard ? 'border-2 border-dark' : 'border-success border-1'}`;//to give the first card 2px black border 

      // return `<div class="${cardClass}">
      return `<div class="card-body">
                  <h5 class="card-text fw-bold text-center">${item.title}</h5>
                  <p class="card-text">Description: ${item.description}</p>
                  <p class="card-text">Creator: ${item.creator}</p>
                  ${item.imgURL ? `<img src="${item.imgURL}"  class="card-img-top" alt="Image">` : ' '}
                  ${item.type ? `<p class="card-text">Type: ${item.type}</p>` : ''}
                  ${item.tags ? `<p class="card-text">Tags: ${item.tags?.join(', ')}</p>` : ''}
                </div>`;
      //  </div>`;
    } else {
      return `<h4 class="text-white">Error: Index out of range!</h4>`;

    }
  }

  //handle click on card image
  handleClick(id: number, title: string): void {
    console.log(`Image ID: ${id}\nTitle: ${title}`);

  }

  //method to handle search
  searchContent(): void {
    //remove highlighting box shadow from all cards
    this.contentArray.forEach(content => {
      const element = this.el.nativeElement.querySelector(`#${this.modTitle(content.title)}`);
      if (element) {
        this.renderer.removeStyle(element, 'box-shadow');

      }
    });

    const contentWithTitle = this.contentArray.find(content => content.title.toLowerCase().includes(this.searchTitle.trim().toLowerCase()));
    if (this.searchTitle != '') {
      if (contentWithTitle) {
        this.searchResult.exists = true;
        this.searchResult.message = `Content with title matching search term "${this.searchTitle}" exists!`;
        console.log(contentWithTitle.title);

        //Add styles to the element matching the searched title
        const element = this.el.nativeElement.querySelector(`#${this.modTitle(contentWithTitle.title)}`);
        if (element) {
          this.renderer.setStyle(element, 'box-shadow', '3px 2px 20px 17px #FC1414');
        }
      } else {
        this.searchResult.exists = false;
        this.searchResult.message = `No content found with title "${this.searchTitle}"`;
      }
    }
    else {
      this.searchResult.exists = false;
      this.searchResult.message = `Please enter search term!`;
    }
  }

  addNewDev(newDev: Content) {
    const idExists = this.contentArray.some(content => content.id === newDev.id);
    if (idExists) {
      
      this.showIdExistsWarning = true;
      alert("Id " + newDev.id + "  already exists!");  
    } else {
      // Reset the warning
      this.showIdExistsWarning = false;
      this.contentArray.push(newDev);
      console.log(this.contentArray);
      this.contentArray = [...this.contentArray];
     
   
  }
}
}
