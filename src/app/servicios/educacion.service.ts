import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduUrl="https://portfolio-perlaacosta.onrender.com/";

  constructor(private http:HttpClient) { }

    obtenerDatos():Observable<any>{
      return this.http.get(this.eduUrl+'ver/educacion');}
    
    editarDatos(datoUrl:string):Observable<any>{
      return this.http.put<any>(this.eduUrl+"edit/educacion/"+datoUrl,null);
    }
    
    agregarDatos(nuevoUrl:string):Observable<any>{
      return this.http.post<any>(this.eduUrl+"new/educacion/"+nuevoUrl,null);
    }

    eliminarDatos(id:string):Observable<any>{
      return this.http.delete(this.eduUrl+"delete/educacion/"+id);
    }
}
