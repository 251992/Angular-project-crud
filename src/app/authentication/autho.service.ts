import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {
 private IsLogin=false
  constructor() { }

  Authentication(){ this.IsLogin=true}
  GetAuthenticate(){return this.IsLogin}
}
