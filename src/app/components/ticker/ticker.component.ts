import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./css/ticker.component.css']
})
export class TickerComponent implements OnInit {
    @Input() nameCity: string;


  constructor() {

  }

  ngOnInit() {

      setInterval(function(){

      }, 1000);

  }
}
@Component({
  selector: 'ny-ticker',
  templateUrl: './ny-ticker.component.html',
  styleUrls: ['./css/ny-ticker.component.css']
})
export class  NyTicker {
    ngOnInit() {

        setInterval(function(){

        }, 1000);

    }
}
@Component({
  selector: 'london-ticker',
  templateUrl: './london-ticker.component.html',
  styleUrls: ['./css/london-ticker.component.css']
})
export class  LondonTicker {
    ngOnInit() {

        setInterval(function(){

        }, 1000);

    }
}
@Component({
  selector: 'kiev-ticker',
  templateUrl: './kiev-ticker.component.html',
  styleUrls: ['./css/kiev-ticker.component.css']
})
export class KievTicker {
    ngOnInit() {

        setInterval(function(){

        }, 1000);

    }
}
