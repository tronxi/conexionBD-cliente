import { Component, OnInit } from '@angular/core';
import {ConexionBDService} from '../conexion-bd.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
   nombre: string;
   id: number;
   texto: string;
   activadoMostrar: boolean;
  constructor(private conex: ConexionBDService) { }

  enviar() {
    if (this.nombre != null) {
      console.log(this.nombre);
      this.conex.insertarNombre(this.nombre).subscribe(() => {
      });
    }
    this.nombre = null;
    this.activadoMostrar = false;

  }
  borrar() {
    if (this.id != null) {
      console.log(this.id);
      this.conex.borrarId(this.id).subscribe(() => {
      });
    }
    this.id = null;
    this.activadoMostrar = false;
  }
  mostrar() {
    this.activadoMostrar = true;
    this.conex.mostrarTodos().subscribe((valor: string) => {
      this.texto = valor.replace(/<br>/g, ' ');
    });
  }

  ngOnInit() {
    this.activadoMostrar = false;
  }

}
