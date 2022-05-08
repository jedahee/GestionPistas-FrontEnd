import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    let data = {
      email: email,
      password: password
    }

    return this.http.post<any>(this.url + 'login', data);
  }

  register(nombre: string, apellidos: string, email: string, password: string) {

    let data = {
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      password: password,
      rol_id: 3
    }

    return this.http.post<any>(this.url + 'register', data);
  }

  forgotPassword(email: string) {
    return this.http.get<any>(this.url + 'forgot-password/' + email);
  }
}