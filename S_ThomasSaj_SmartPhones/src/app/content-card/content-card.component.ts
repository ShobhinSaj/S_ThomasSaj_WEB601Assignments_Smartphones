import { Component, Input } from '@angular/core';
import {ContentListComponent} from '../content-list/content-list.component'
import { CommonModule } from '@angular/common';
import { HoverAffectDirective } from '../directives/hover-affect.directive';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule,ContentListComponent,HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content:any;
  @Input() isFirst: boolean=false;
  @Input() isSingleContentItem: boolean | undefined;
  modTitle(title: string): string {
    return title.replace(/\s/g, '');
  }
}
