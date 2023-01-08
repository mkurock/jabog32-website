import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { News } from 'src/app/@shared/model/news';
import { CreateOrUpdateNews, GetSingleNews, NewsState } from 'src/app/@shared/states/news.state';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less']
})
export class NewsDetailComponent implements OnInit {
  @Select(NewsState.editItem) item$:Observable<News>;
  item:News = new News();
  constructor(private store:Store, private route:ActivatedRoute, private router:Router) { 
    this.item$.subscribe(x => this.item = {...x});
    this.route.params.subscribe(x => {
      let id = x.id;
      if(id != null)
        this.store.dispatch(new GetSingleNews(id));
    })
  }

  ngOnInit(): void {
  }

  async ok(){
    await this.store.dispatch(new CreateOrUpdateNews(this.item)).toPromise();
    this.router.navigate(['news'])
  }
  cancel(){
    this.router.navigate(['news']);
  }

}
