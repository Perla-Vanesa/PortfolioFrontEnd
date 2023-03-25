import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerUrl="http://localhost:8080/";

  constructor(private http:HttpClient) { }

    obtenerDatos():Observable<any>{
      return this.http.get(this.headerUrl+'ver/header');}
    
    editarDatos(datoUrl:string):Observable<any>{
      return this.http.put<any>(this.headerUrl+"edit/header/"+datoUrl,null);
    }
}
