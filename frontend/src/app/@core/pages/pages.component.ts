import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Page } from 'src/app/@shared/model/page';
import { GetPages, PageState } from 'src/app/@shared/states/page.state';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {
  @Select(PageState.pages) pages$:Observable<Page[]>;
  constructor(private store:Store) {
    this.store.dispatch(new GetPages());
  }

  ngOnInit(): void {
  }

}
