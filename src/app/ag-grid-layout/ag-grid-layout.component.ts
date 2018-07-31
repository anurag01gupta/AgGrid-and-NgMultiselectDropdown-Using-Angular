import { Component, OnInit } from '@angular/core';
import { GridActionsComponent } from "../grid-actions/grid-actions.component";

@Component({
  selector: 'app-ag-grid-layout',
  templateUrl: './ag-grid-layout.component.html'
})
export class AgGridLayoutComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private context;
  constructor() { 
    this.context = { componentParent: this };
  }
  columnDefs = [
      {headerName: 'Car', field: 'car' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'},
      {headerName: 'Launch Date', field: 'launchdate'},
      {headerName: 'Event Date', field: 'launchdate'},
      {headerName: 'Advertisement Date', field: 'launchdate'},
      {headerName: 'Setup Date', field: 'launchdate'},
      {headerName: 'Delivery Date', field: 'launchdate'},
      {headerName: 'Launch Date', field: 'launchdate'},
      {headerName: 'Launch Date', field: 'launchdate'},
      {headerName: 'Process Date', field: 'launchdate'},
      {headerName: 'Actions', field: 'actions', cellRendererFramework: GridActionsComponent} //, cellStyle:{'text-align': 'center'}, headerClass: 'pull-center'
  ];

  rowData = [
      { car: 'Toyota', model: 'Celica', price: 35000, launchdate: '27-4-2018' },
      { car: 'Ford', model: 'Mondeo', price: 32000, launchdate: '12-2-2019' },
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'},
      { car: 'Toyota', model: 'Celica', price: 35000, launchdate: '27-4-2018' },
      { car: 'Ford', model: 'Mondeo', price: 32000, launchdate: '12-2-2019' },
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'},
      { car: 'Toyota', model: 'Celica', price: 35000, launchdate: '27-4-2018' },
      { car: 'Ford', model: 'Mondeo', price: 32000, launchdate: '12-2-2019' },
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'},
      { car: 'Toyota', model: 'Celica', price: 35000, launchdate: '27-4-2018' },
      { car: 'Ford', model: 'Mondeo', price: 32000, launchdate: '12-2-2019' },
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'},
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'},
      { car: 'Toyota', model: 'Celica', price: 35000, launchdate: '27-4-2018' },
      { car: 'Ford', model: 'Mondeo', price: 32000, launchdate: '12-2-2019' },
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'},
      { car: 'Toyota', model: 'Celica', price: 35000, launchdate: '27-4-2018' },
      { car: 'Ford', model: 'Mondeo', price: 32000, launchdate: '12-2-2019' },
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'},
      { car: 'Ford', model: 'Mondeo', price: 32000, launchdate: '12-2-2019' },
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'},
      { car: 'Toyota', model: 'Celica', price: 35000, launchdate: '27-4-2018' },
      { car: 'Ford', model: 'Mondeo', price: 32000, launchdate: '12-2-2019' },
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'},
      { car: 'Porsche', model: 'Boxter', price: 72000, launchdate: '19-9-2017'}
  ];

  showMessage: boolean;
  message: any;
  methodFromParent(cell){
    console.log(cell);
    this.showMessage = true;
    switch(cell.Message){
      case 1:{
        this.message = 'Edit Clicked from Row '+cell.Row+'.';
        break;
      }
      case 2: {
        this.message = 'Delete Clicked from Row '+cell.Row+'.';
        break;
      }
    }
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  ngOnInit() {
  }

}
