import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HassService {
  hassUrl="http://localhost:8080/";

  constructor(private http:HttpClient) { }
  
    obtenerDatos():Observable<any>{
      return this.http.get(this.hassUrl+'ver/habilidad');}
    
    editarDatos(datoUrl:string):Observable<any>{
      return this.http.put<any>(this.hassUrl+"edit/habilidad/"+datoUrl,null);
    }
    
    agregarDatos(nuevoUrl:string):Observable<any>{
      return this.http.post<any>(this.hassUrl+"new/habilidad/"+nuevoUrl,null);
    }

    eliminarDatos(id:string):Observable<any>{
      return this.http.delete(this.hassUrl+"delete/habilidad/"+id);
    }
}
