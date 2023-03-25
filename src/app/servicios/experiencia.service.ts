import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expUrl="http://localhost:8080/";

  constructor(private http:HttpClient) { }

    obtenerDatos():Observable<any>{
      return this.http.get(this.expUrl+'ver/experiencia');}
    
    editarDatos(datoUrl:string):Observable<any>{
      return this.http.put<any>(this.expUrl+"edit/experiencia/"+datoUrl,null);
    }
    
    agregarDatos(nuevoUrl:string):Observable<any>{
      return this.http.post<any>(this.expUrl+"new/experiencia/"+nuevoUrl,null);
    }

    eliminarDatos(id:string):Observable<any>{
      return this.http.delete(this.expUrl+"delete/experiencia/"+id);
    }
}
