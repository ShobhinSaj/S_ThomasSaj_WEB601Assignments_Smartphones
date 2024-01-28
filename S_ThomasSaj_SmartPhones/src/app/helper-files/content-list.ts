import { Content } from './content-interface';

export class ContentList {
    private contentArray: Content[] = [];
    constructor() { }
    get content(): Content[] {
        return this.contentArray;
    }
    add(item: Content): void {
        this.contentArray.push(item);
    }
    get numberOfItems(): number {
        return this.contentArray.length;
    }
    getHtmlOutput(index: number): string {
        if (index >= 0 && index < this.numberOfItems) {
            const item = this.contentArray[index];
            
            return `<div class="card">
            <div class="card-body">
              <p class="card-text fw-bold ">${item.title}</p>
              <p class="card-text">Description: ${item.description}</p>
              <p class="card-text">Creator: ${item.creator}</p>
              ${item.imgURL ? `<img src="${item.imgURL}" class="card-img-top" alt="Image">` : ''}
              <p class="card-text">Type: ${item.type}</p>
            </div>
          </div>`;
        } else {
            return `<h4 class="text-white">Error: Index out of range!</h4>`;
            
        }
    }
}
