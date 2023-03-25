import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaList:any;
  expActivo=false;
  isLogged=false;
  dEditados="";
  dNuevo="?nombre_empresa=&puesto=Insertar puesto&inicio=Insertar inicio&fin=Insertar fin&descripcion=Insertar descripcion&url_logo=Insertar url del logo";
  id="";

  expEd(): void{
    this.expActivo=!this.expActivo;
    if(this.expActivo==false){
      for(let experiencia of this.experienciaList){
        this.dEditados=experiencia.id+"?nombre_empresa="+experiencia.nombreEmpresa+"&puesto="+experiencia.puesto+"&inicio="+experiencia.inicio+"&fin="+experiencia.fin+"&descripcion="+experiencia.descripcion+"&url_logo="+experiencia.urlLogo;
        console.log(this.dEditados);
        this.datosExperiencia.editarDatos(this.dEditados).subscribe(
          data=>{}
        )
      }
    }
    
  }

  newExp(){
    console.log(this.dNuevo);
    this.datosExperiencia.agregarDatos(this.dNuevo).subscribe(
      data=>{
        location.reload();
      }
    )
  }

  delExp(id:any){
    console.log(id);
    this.datosExperiencia.eliminarDatos(id).subscribe(
      data=>{
        location.reload();
      }
    )
  }

  constructor(private tokenService:TokenService,private datosExperiencia:ExperienciaService){ 
    console.log("Funciona experiencia");
  }
  
  ngOnInit(): void {
    this.datosExperiencia.obtenerDatos().subscribe(dataexperiencia =>{
      this.experienciaList = dataexperiencia;
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{        
      this.isLogged=false;}
    });
  }

}
