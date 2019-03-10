import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private getId: number;
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
      return this.http.get(this.baseUrl + '/clocks/', {headers: this.httpHeaders});
  }
  moveHands(offset: number, hand_hours: string, hand_minutes: string, tagIdtxt: string){
      var g=new Date();
      var gmtHours = g.getTime() +(g.getTimezoneOffset() * 60000);
      var date =new Date(gmtHours + (3600000*offset));
      var seconds = date.getSeconds();
      var minutes = date.getMinutes();
      var hours = date.getHours();
      function checkTime(i)
      {
        if (i<10)
        {
            i="0" + i;
        }
        return i;
        }
      minutes=checkTime(minutes);
      seconds=checkTime(seconds);
      document.getElementById(tagIdtxt).innerHTML=hours+":"+minutes+":"+seconds;
      var hands =
      [
               {
                  hand: hand_hours,
                  angle: (hours * 30) + (minutes / 2)
               },
               {
                  hand: hand_minutes,
                  angle: (minutes * 6)
              },
              {
                 hand: "seconds",
                 angle: (seconds * 6)
             }
      ];
      //
       for (var j = 0; j < hands.length; j++)
       {
           var elements = <HTMLScriptElement[]><any>document.querySelectorAll('.' + hands[j].hand);
           // as HTMLCollectionOf<HTMLElement>
           for (var k = 0; k < elements.length; k++)
           {
                 elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
                 elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
         }
       }
  }
}
