import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AgGridLayoutComponent } from './ag-grid-layout/ag-grid-layout.component';

const routes: Routes = [
  { path: 'gridLayout', component: AgGridLayoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AgGridLayoutComponent
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
