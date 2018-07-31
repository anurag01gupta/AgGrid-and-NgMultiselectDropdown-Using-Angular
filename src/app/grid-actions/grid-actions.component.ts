import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-grid-actions',
  template: '<a class="cursor-pointer" style="margin-right:5px;" data-action-type="edit"><i class="far fa-edit" (click)="invokeParentMethod(1)"></i></a><a data-action-type="delete" class="cursor-pointer"><i class="far fa-trash-alt" (click)="invokeParentMethod(2)"></i></a>'
})
export class GridActionsComponent implements ICellRendererAngularComp  {
  public params: any;

  constructor() { }
  agInit(params: any): void {
      this.params = params;
  }
  public invokeParentMethod(from) {
      this.params.context.componentParent.methodFromParent({Row: this.params.node.rowIndex, Message: from});
  }
  refresh(): boolean {
      return false;
  }

}
