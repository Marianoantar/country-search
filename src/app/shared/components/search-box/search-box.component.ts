import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounce, debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  
  private debouncer: Subject<string> = new Subject<string>();
  
  @Input()
  public placeholder: string = '';  

  @Input()
  public initialValue: string = '';
  
  @Output()
  public oninput = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  private onDebounceSubscription?: Subscription;

  constructor(){
  }
  ngOnInit(): void { 

    this.onDebounceSubscription = this.debouncer
    .pipe(
      debounceTime( 500 )
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
    })
  }
  
  ngOnDestroy(): void {
    if (this.onDebounceSubscription) 
      this.onDebounceSubscription.unsubscribe();
  }
  
  emitValue ( capital: string):void {
    this.oninput.emit(capital);
  }

  onKeyPress( searchTerm: string):void {
      this.debouncer.next(searchTerm);
  }


}
