import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SmartPhoneService } from '../services/smartphoneservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  newContentItem: Content = {
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags:[],
    id: null
  }

  constructor(private contentService: SmartPhoneService) {}

  addContent(): void {
    this.contentService
      .addContent(this.newContentItem)
      .subscribe(content  => { 
       this.contentAdded.emit(content);
        
        this.newContentItem = {
          id: null,
          title: '',
          description: '',
          creator: '',
          imgURL: '',
          type: '',
          tags: [],
        };

      });

    }
}
