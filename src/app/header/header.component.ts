/**
 * Created by smitt on 30/05/2017.
 */
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class headerComponent{
  @Output() page = new EventEmitter<string>();

  onSelect(pageName: string){
    this.page.emit(pageName);
  }
}
