import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { AcknowledgeNotamFromHome, GetHomeData, HomeState, HomeStateModel } from 'src/app/@shared/states/home.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @Select() home$:Observable<HomeStateModel>;
  home:HomeStateModel;
  constructor(private store:Store,
    private notify:NotificationService,
    ) { 
    this.home$.subscribe(x => this.home = x);
    this.store.dispatch(new GetHomeData());
  }
  async acknowledge(id:number){
    try {
      await this.store.dispatch(new AcknowledgeNotamFromHome(id)).toPromise();
      this.notify.showSnackbar("Notam acknowledged");
    } catch(e){

    }
  }

  ngOnInit(): void {
  }

}
