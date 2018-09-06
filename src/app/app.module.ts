import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { AgGridLayoutComponent } from './ag-grid-layout/ag-grid-layout.component';
import { GridActionsComponent } from './grid-actions/grid-actions.component';
import { CaseTileComponent } from './case-tile/case-tile.component';
import { CaseTitleListComponent } from './case-title-list/case-title-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AgGridLayoutComponent,
    GridActionsComponent,
    CaseTileComponent,
    CaseTitleListComponent
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    GridActionsComponent,
  ]
})
export class AppModule { }
