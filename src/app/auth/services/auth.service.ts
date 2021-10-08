import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth!}
  }

  constructor(private http: HttpClient) { }

  verifyAuthUser(): Observable<boolean>{
    if(!localStorage.getItem("token")){
      return of(false)// of creates observable with value provided as argument
    }

    return this.http.get<Auth>(`${this.baseUrl}/users/1`) //Return an auth type object
               .pipe( 
                 map( auth => { //Used to transform what is returned from the observable subscription
                  console.log('Map', auth)
                   this._auth = auth;
                   return true
                 })
               ) 
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/users/1`)
                    .pipe(//Using .pipe avoid destroy the subscribe for the login() on loginComponent
                      tap( auth =>{
                        this._auth = auth
                        console.log('tap', auth)
                      } ), //The tap get the subscribe reponse before subscribe on loginComponent
                      tap( auth => localStorage.setItem("token", auth.id))
                    )
  }

  logout(){
    this._auth = undefined;
    localStorage.removeItem("token")
  }

}
