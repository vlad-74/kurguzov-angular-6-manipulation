import {Component, OnInit, OnDestroy} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})

export class MainComponent implements OnInit, OnDestroy {
  permission = '';
  accessControl: FormControl;
  debounce: number = 200;

  private readonly destroyed$ = new Subject();

  ngOnInit() {
    this.accessControl = new FormControl('');
    this.accessControl.valueChanges
      .pipe(takeUntil(this.destroyed$),debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        this.permission = query
      });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}