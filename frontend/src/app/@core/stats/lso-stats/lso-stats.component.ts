import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetLSOGrades, LSOGradesState } from 'src/app/@shared/states/lsogrades.state';

@Component({
  selector: 'app-lso-stats',
  templateUrl: './lso-stats.component.html',
  styleUrls: ['./lso-stats.component.less']
})
export class LsoStatsComponent implements OnInit {
  @Input() map:string = "";
  grades$:Observable<any[]>
  data:any[] = [];
  columns:number[] = [];
  constructor(private store:Store) { }

  ngOnInit(): void {
    let mapKey = this.map == '' ? 'default' : this.map;
    this.store.dispatch(new GetLSOGrades(mapKey))
    this.grades$ = this.store.select(LSOGradesState.getLsoGrades(mapKey));
    this.grades$.subscribe(x => {
      if(!x){
        return;
      }
      this.columns = [];
      let colcount = 0
      x.forEach(c => {
        colcount = c.length > colcount ? c.length : colcount;
      })
      this.columns = [...Array(colcount).keys()];
      this.data = x
    });
  }

}
