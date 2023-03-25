import { Component, OnInit } from '@angular/core';
import { HassService } from 'src/app/servicios/hass.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-ha-ss',
  templateUrl: './ha-ss.component.html',
  styleUrls: ['./ha-ss.component.css']
})
export class HaSSComponent implements OnInit{

  haSSList:any;
  hActivo=false;
  dEditados="";
  dNuevo="?nombre_habilidad=insertar habilidad&dominio=0";
  id="";
  isLogged=false;

  edHabilidad(): void{
    this.hActivo=!this.hActivo;
    if(this.hActivo==false){
      for(let habilidad of this.haSSList){
        this.dEditados=habilidad.id+"?nombre_habilidad="+habilidad.nombreHabilidad+"&dominio="+habilidad.dominio;
        console.log(this.dEditados);
        this.datosHass.editarDatos(this.dEditados).subscribe(
          data=>{}
        )
      }
    }
    
  }

  newHabilidad(){
    console.log(this.dNuevo);
    this.datosHass.agregarDatos(this.dNuevo).subscribe(
      data=>{
        location.reload();
      }
    )
  }

  delHabilidad(id:any){
    console.log(id);
    this.datosHass.eliminarDatos(id).subscribe(
      data=>{
        location.reload();
      }
    )
  }

  constructor(private tokenService:TokenService,private datosHass:HassService){ 
    console.log("Funciona Hass");
  }
  
  ngOnInit(): void {
    this.datosHass.obtenerDatos().subscribe(datahabilidad =>{
      this.haSSList = datahabilidad;
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;}
    });
  }
}
