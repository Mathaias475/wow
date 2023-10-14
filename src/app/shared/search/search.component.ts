import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'wow-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

 private debouncer = new Subject<string>();
  
  ngOnInit(): void {
    this.debouncer.subscribe( value => { console.log(value);}
    )
  }

onSearch( searchTerm: string ) {
  console.log(searchTerm);
  
}

}
