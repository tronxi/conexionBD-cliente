import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionBDService {

  private url = 'http://raspberrytronxi.ddns.net:8000/conexionBD-node';
  private headers: Headers;
  constructor(private http: HttpClient) { }

  mostrarTodos() {
    return this.http.get(this.url + '/buscar', {responseType: 'text'});
  }
  borrarId(idUser: number) {
    return this.http.post(this.url + '/borrardatos', {id: idUser});
  }
  insertarNombre(nombre: string) {
    return this.http.post(this.url + '/insertarDatos', {nombre: nombre});
  }
}
