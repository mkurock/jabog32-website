import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/@shared/components/confirm/confirm.component';
import { News } from 'src/app/@shared/model/news';
import { DeleteNews, GetNews, NewsState } from 'src/app/@shared/states/news.state';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  
  @Select(NewsState.allNews) items:Observable<News[]>;
  constructor(private store:Store, private dialog:MatDialog) { 
    this.store.dispatch(new GetNews());
  }

  ngOnInit(): void {
  }

  delete(id:number){
    const ref = this.dialog.open(ConfirmComponent, { data: { text: "News wirklich löschen?" }});
    ref.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new DeleteNews(id)).toPromise();
      }
    })
  }

}
