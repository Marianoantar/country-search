import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';  

  @Output()
  public oninput = new EventEmitter<string>();

  emitValue ( capital: string):void {
    this.oninput.emit(capital);
  }


}
