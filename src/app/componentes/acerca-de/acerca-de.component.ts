import { Component, OnInit } from '@angular/core';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  acercaDeList:any;
  aDeActivo=false;
  perActivo=false;
  isLogged=false;
  dEditados="";

  acercaDeEd(){
    this.aDeActivo=!this.aDeActivo;
    if(this.aDeActivo==false){
      for(let acercaDe of this.acercaDeList){
        this.dEditados=acercaDe.id+"?name="+acercaDe.name+"&sobre_mi="+acercaDe.sobreMi+"&url_foto="+acercaDe.urlFoto+"&title="+acercaDe.title;
        console.log(this.dEditados);
        this.datosAcercaDe.editarDatos(this.dEditados).subscribe(
          data=>{}
        )
      }
    }
  }
  perfilEd(){
    this.perActivo=!this.perActivo;
    if(this.perActivo==false){
      for(let acercaDe of this.acercaDeList){
        this.dEditados=acercaDe.id+"?name="+acercaDe.name+"&sobre_mi="+acercaDe.sobreMi+"&url_foto="+acercaDe.urlFoto+"&title="+acercaDe.title;
        console.log(this.dEditados);
        this.datosAcercaDe.editarDatos(this.dEditados).subscribe(
          data=>{}
        )
      }
    }
  }
  constructor(private tokenService:TokenService,private datosAcercaDe:AcercaDeService){ 
    console.log("Funciona AcercaDe");
  }
  
  ngOnInit(): void {
    this.datosAcercaDe.obtenerDatos().subscribe(dataAcercaDe =>{
      this.acercaDeList = dataAcercaDe;
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;}
    });
  }

}
