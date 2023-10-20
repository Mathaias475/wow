import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'wow-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  
  @Input() placeholder = '';
  @Output() onValue = new EventEmitter<string>();
  
  private debouncerSubscription?: Subscription;
  private debouncer = new Subject<string>();
  
  ngOnInit(): void {
   this.debouncerSubscription = this.debouncer.pipe(debounceTime(500)).subscribe( value => { this.onValue.emit(value)});
  }
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
    
  }

onSearch( searchTerm: string ) {
  this.debouncer.next(searchTerm);
}

}
