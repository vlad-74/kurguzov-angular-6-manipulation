import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
})
export class SecondComponent  {
  users;
  searchStr
  searchControl: FormControl;
  debounce: number = 200;

  private readonly destroyed$ = new Subject();

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => { this.users = json })
          
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(takeUntil(this.destroyed$), debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => { this.searchStr = query});
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

