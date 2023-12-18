import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string): void{
    localStorage.setItem("token", token)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
    return this.getToken() !== null;
  }

  login({email, password}: any): Observable<any>{
    if(email === "admin" && password === "123"){
      this.setToken("abcdefghijklmnopqrstuvwyz");
      return of({name: "jamac", email})
    }

    return throwError(() => new Error("failed login"))
  }

  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(['login'])
  }


}
