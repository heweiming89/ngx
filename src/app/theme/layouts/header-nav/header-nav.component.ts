import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

declare let mLayout: any;

@Component({
  selector: "app-header-nav",
  templateUrl: "./header-nav.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {


  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    mLayout.initHeader();

  }

}
