import { Component,EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-create',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './content-create.component.html',
  styleUrl: './content-create.component.scss'
})
export class ContentCreateComponent {
  newDev: any = {tags: []};
  errMsg: string = '';
  @Output() addDeviceEvent = new EventEmitter<Content>();



  addNewDev() {

    const addDev = new Promise((resolve, reject) => {
      this.newDev.tags = this.newDev.tags.split(',').map((tag: string) => tag.trim());
      if (!this.newDev.title) {
        reject('Failed to add, Title is required');
      } else if (!this.newDev.description) {
        reject('Failed to add, Description is required');
      } else if (!this.newDev.creator) {
        reject('Failed to add, Creator is required');
      } else if (!this.newDev.id) {
        reject('Failed to add, Try again');
      } else {
        
        
        this.addDeviceEvent.emit(this.newDev);
        resolve(this.newDev.title);
      }
    });

    addDev.then(title => {
      this.errMsg = '';
      this.newDev = {};
      console.log(`New Device Added Successfully, Title: ${title}`);
    }).catch(err => {
      this.errMsg = err;
    });
  }
}
