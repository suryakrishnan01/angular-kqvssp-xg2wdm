import { Component, ViewEncapsulation } from '@angular/core';
import {
  PageChangeEvent,
  RowClassArgs,
  ScrollMode,
} from '@progress/kendo-angular-grid';
import { createRandomData } from './data-generator';

@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  template: `
        <!-- The kendoGridBinding handles the grouping, sorting and filtering with virtual scrolling -->
        <kendo-grid
            [kendoGridBinding]="data"
            [rowClass]="rowCallback"
            [navigable]="true"
            [sortable]="true"
            [filterable]="true"
            [groupable]="true"
            (pageChange)="onPageChange($event)"
            [pageSize]="(scrollMode == 'virtual') ? 100 : pageable ? pageSize : this.data.length"
            [pageable]="pageable"
            [scrollable]="scrollMode"
            [rowHeight]="(scrollMode == 'virtual') ? 36 : 0"
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
  public pageSize: number = 50;
  public pageable: boolean = true;
  public scrollMode: ScrollMode = 'virtual';

  constructor() {
    // generating 1000 rows of local data
    this.data = createRandomData(1000);
    console.log(this.data.length);
  }

  public rowCallback = (context: RowClassArgs) => {
    //console.log(context);
    // if (context.dataItem.UnitPrice <= 0) {
    //   return { gold: true };
    // } else {
    //   return { green: true };
    // }
    return '';
  };

  public onPageChange(e: PageChangeEvent): void {
    console.log(e);
  }
}
