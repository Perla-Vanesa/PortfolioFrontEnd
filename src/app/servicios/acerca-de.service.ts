import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  acercaDeUrl="https://portfolio-perlaacosta.onrender.com/";

  constructor(private http:HttpClient) { }

    obtenerDatos():Observable<any>{
      return this.http.get(this.acercaDeUrl+'ver/persona');}
    
    editarDatos(datoUrl:string):Observable<any>{
      return this.http.put<any>(this.acercaDeUrl+"edit/persona/"+datoUrl,null);
    }
}
