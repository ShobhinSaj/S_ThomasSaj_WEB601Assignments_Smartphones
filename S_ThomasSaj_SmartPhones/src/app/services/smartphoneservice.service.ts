import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
// import { contentArray } from '../helper-files/contentDb';
import { Observable, map, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmartPhoneService {
  private apiUrl = 'api/content'; 
  constructor(private messageService: MessageService,private http: HttpClient) { }
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };
  getContent() : Observable<Content[]>{
      this.messageService.add("Content array loaded!");
      // return of(contentArray); 
      return this.http.get<Content[]>(this.apiUrl)
      }
  
      getContentById(id: number): Observable<Content | undefined> {
        // Fetch a specific content item by ID
        return this.http.get<Content[]>(this.apiUrl).pipe(
          map((contentArray: Content[]) => {
            const contentItem = contentArray.find(item => item.id === id);
            return contentItem;
          })
        );
      }
      addContent(newContentItem: Content): Observable<Content>{
        return this.http.post<Content>(this.apiUrl, newContentItem, this.httpOptions)
      .pipe(tap(() => {
          this.messageService.add(`New Device added succesfully: ${newContentItem.title}`);
        })
      );
    }
  
        updateContent(contentItem: Content): Observable<any>{
          return this.http.put(this.apiUrl, contentItem,
          this.httpOptions);
          }
}
