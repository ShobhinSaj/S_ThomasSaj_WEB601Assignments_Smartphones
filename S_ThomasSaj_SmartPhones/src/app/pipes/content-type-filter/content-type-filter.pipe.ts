import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../../helper-files/content-interface';
@Pipe({
  name: 'contentTypeFilter',
  standalone: true
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(contents:Content[],typeFilter?: string): Content[] {
    if (!typeFilter) {
      return contents.filter(content => !content.type || content.type.trim() === '');
    }
    else{
      return contents.filter(content => content.type && content.type.trim().toLowerCase() === typeFilter.toLowerCase());
    }
  }

}
