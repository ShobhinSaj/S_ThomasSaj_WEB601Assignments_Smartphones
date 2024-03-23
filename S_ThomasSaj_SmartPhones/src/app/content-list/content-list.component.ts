import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Content } from '../helper-files/content-interface'
import { CommonModule } from '@angular/common';
import { SlicePipe } from '@angular/common';
import { ContentTypeFilterPipe } from './../pipes/content-type-filter/content-type-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ContentCardComponent } from './../content-card/content-card.component'
import { SmartPhoneService } from '../services/smartphoneservice.service';
import {ModifyContentComponent } from './..//modify-content/modify-content.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, SlicePipe, ContentTypeFilterPipe, FormsModule,ContentCardComponent,ModifyContentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {


 
  searchTitle: string = '';
  searchResult = { exists: false, message: '' };
  contentArray: Content[]=[];
  singleContentItem: Content | undefined;
  constructor(private el: ElementRef, private renderer: Renderer2,private contentService: SmartPhoneService,private messageService: MessageService) { }
  ngOnInit(){
    this.contentService.getContent().subscribe(contentArray  => this.contentArray = contentArray);
    this.contentService.getContentById(1).subscribe(contentItem => this.singleContentItem = contentItem);
  }
  // getContentArray(): Content[] {
  //   return this.contentArray;

  // }

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
  isSingleContentItem(contentId: number): boolean {
    return !!this.singleContentItem && this.singleContentItem.id === contentId;
  }
  addNewContent(newContent:any){
    newContent.tags = newContent.tags.split(',').map((tag: string) => tag.trim());
    newContent.type=newContent.type.toLowerCase();
    this.contentArray.push(newContent);
    this.contentArray = [...this.contentArray];
  }

  // addContentToList(newContentItem: Content) : void {
  //   console.log(`Content added succesfully: ${newContentItem.title}`);
  //   console.log(newContentItem);

  //   }

  updateContentInList(contentItem: Content): void {
      this.contentService.updateContent(contentItem)
      .subscribe(() =>
      console.log("Content updated successfully")
    );
    }
}
