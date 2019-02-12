import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionBDService {

  //private url = 'http://192.168.0.5/conexionBD-spring';
  private url = 'http://raspberrytronxi.ddns.net/conexionBD-spring';
  private headers: Headers;
  constructor(private http: HttpClient) { }
  
  mostrarTodos() {
    return this.http.get(this.url + '/dato');
  }
  borrarId(idUser: number) {
    return this.http.delete(this.url + '/dato/' + idUser);
  }
  insertarNombre(nombre: string) {
    return this.http.post(this.url + '/dato/', {nombre: nombre});
  }
}
