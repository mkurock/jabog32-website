import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { NavGroup } from 'src/app/@shared/model/navigation';
import { UserState } from 'src/app/@shared/states/user.state';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {
  shouldShow = false;
  @Select(UserState.navigation) navigation:NavGroup[];


  constructor(private store:Store) {
  }

  ngOnInit(): void {
  }

}
