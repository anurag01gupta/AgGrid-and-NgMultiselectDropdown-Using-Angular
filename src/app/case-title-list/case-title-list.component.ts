import { Component, OnInit } from '@angular/core';
import { CaseTileComponent } from '../case-tile/case-tile.component';
import { Constants } from '../model/constants';

@Component({
  selector: 'app-case-title-list',
  templateUrl: './case-title-list.component.html',
  styleUrls: ['./case-title-list.component.scss']
})
export class CaseTitleListComponent implements OnInit {
  caseTileList: any;
  constructor() { }
  
  ngOnInit() {
      this.caseTileList = Constants.getConst.softWorkQueue;
  }
  action(status: boolean){
      this.caseTileList.splice(0, 1);
  }

}
