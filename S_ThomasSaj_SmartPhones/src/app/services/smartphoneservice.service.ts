import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { contentArray } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SmartPhoneService {

  constructor(private messageService: MessageService) { }
 
  getContent() : Observable<Content[]>{
      this.messageService.add("Content array loaded!");
      return of(contentArray);
      }
  
  getContentById(id: number): Observable<Content | undefined> {
        const contentItem = contentArray.find(item => item.id === id);
        this.messageService.add(`Content Item at id: ${id} loaded under Top Picks!`);
        return of(contentItem);
      }
}
