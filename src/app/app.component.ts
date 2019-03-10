import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
    clocks = [];
    getgmtvalue: number;
    getCityname: string;
  constructor(private api: ApiService) {
      this.get();
  }
  get = () =>{
      this.api.getAll().subscribe(
          data => {
              this.clocks = data;
          },
          error => {
              console.log(error);
          }
      );
  }
  move(offset, hand_hours, hand_minutes,tagIdtxt){
      this.api.moveHands(offset,hand_hours,hand_minutes, tagIdtxt);
  }
  createNewClock(gmt){
      var disp=false;
      if(gmt!=""){
          for(let i = 0; i<this.clocks.length; i++)
          {
              var check = "(GMT "+this.clocks[i].gmt+" ) "+this.clocks[i].text;
              if(gmt==check)
              {

                  this.getgmtvalue=  0 + +gmt.substr(4,3);
                  this.getCityname=gmt.slice(9);
                  disp= true;
              }
          }
      }
      if(disp){
          document.getElementById("newClock").style.display= "block";
      }
      else {
          document.getElementById("newClock").style.display= "none";
      }

  }
}
