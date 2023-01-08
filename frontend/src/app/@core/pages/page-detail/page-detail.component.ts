import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Page } from 'src/app/@shared/model/page';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { EditPage, PageState, UpdatePage } from 'src/app/@shared/states/page.state';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.less']
})
export class PageDetailComponent implements OnInit {
  @Select(PageState.editItem) item$:Observable<Page>;
  item:Page;
  constructor(private route:ActivatedRoute, private router:Router, private store:Store, private notify:NotificationService) { 
    this.item$.subscribe(x => this.item = { ...x });
    route.params.subscribe(x => {
      let id = x.id;
      this.store.dispatch(new EditPage(id));
    })
  }

  ngOnInit(): void {
  }

  async ok(){
    await this.store.dispatch(new UpdatePage(this.item)).toPromise();
    this.notify.showSnackbar("Page erfolgreich gespeichert")
    this.router.navigate(['/pages']);
  }

  cancel(){
    this.router.navigate(['/pages']);
  }

}
