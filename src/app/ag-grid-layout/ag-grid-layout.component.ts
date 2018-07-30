import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid-layout',
  templateUrl: './ag-grid-layout.component.html',
  styleUrls: ['./ag-grid-layout.component.css']
})
export class AgGridLayoutComponent implements OnInit {

  constructor() { }
  columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  ngOnInit() {
  }

}
