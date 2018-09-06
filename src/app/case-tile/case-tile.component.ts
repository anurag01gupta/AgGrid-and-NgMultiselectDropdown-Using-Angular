import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case-tile',
  templateUrl: './case-tile.component.html',
  styleUrls: ['./case-tile.component.scss']
})
export class CaseTileComponent implements OnInit {
  @Input('casetile') casetile: any;
  @Input('firstNode') firstNode: boolean;
  @Output() action = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    console.log(this.firstNode);
  }

  actions(status: boolean){
    this.action.emit(status);
  }

}
