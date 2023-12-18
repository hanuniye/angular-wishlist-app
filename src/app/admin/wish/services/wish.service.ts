import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.log("there is issue client or network " + error.error)
    }
    else{
      console.log("server side error " + error.error)
    }

    return throwError(() => new Error("do not retrive wishes from the server. please try again"))
  }

  getWishes(){
    return this.http.get("assets/wishList.json").pipe(catchError(this.handleError));
  }
}
