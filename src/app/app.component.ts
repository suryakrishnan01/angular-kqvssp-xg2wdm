import { Component, ViewEncapsulation } from '@angular/core';
import { createRandomData } from './data-generator';

@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  template: `
        <!-- The kendoGridBinding handles the grouping, sorting and filtering with virtual scrolling -->
        <kendo-grid
            [kendoGridBinding]="data"
            [navigable]="true"
            [sortable]="true"
            [filterable]="true"
            [groupable]="true"
            [pageSize]="50"
            scrollable="virtual"
            [rowHeight]="36"
            [height]="450"
        >
        <kendo-grid-column field="id" [width]="80" title="ID"></kendo-grid-column>
        <kendo-grid-column field="firstName" title="First Name" [width]="130"></kendo-grid-column>
        <kendo-grid-column field="lastName" title="Last Name" [width]="130"></kendo-grid-column>
        <kendo-grid-column field="city" title="City" [width]="130"></kendo-grid-column>
        <kendo-grid-column field="title" title="Title" [width]="180"></kendo-grid-column>
      </kendo-grid>
  `,
})
export class AppComponent {
  public data: unknown[] = [];

  constructor() {
    // generating 1000 rows of local data
    this.data = createRandomData(1000);
    console.log(this.data.length);
  }
}
