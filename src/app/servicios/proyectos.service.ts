import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyUrl="http://localhost:8080/";

  constructor(private http:HttpClient) { }

    obtenerDatos():Observable<any>{
      return this.http.get(this.proyUrl+'ver/proyecto');}
    
    editarDatos(datoUrl:string):Observable<any>{
      return this.http.put<any>(this.proyUrl+"edit/proyecto/"+datoUrl,null);
    }
    
    agregarDatos(nuevoUrl:string):Observable<any>{
      return this.http.post<any>(this.proyUrl+"new/proyecto/"+nuevoUrl,null);
    }

    eliminarDatos(id:string):Observable<any>{
      return this.http.delete(this.proyUrl+"delete/proyecto/"+id);
    }
}
