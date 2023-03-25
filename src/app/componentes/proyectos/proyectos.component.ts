import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectoList:any;
  proyActivo=false;
  isLogged=false;
  dEditados="";
  dNuevo="?nombre_proyecto=Insertar nombre&inicio=Insertar inicio&fin=Insertar fin&descripcion=Insertar descripcion&url_proyecto=Insertar url del proyecto";
  id="";

  proyEd(): void{
    this.proyActivo=!this.proyActivo;
    if(this.proyActivo==false){
      for(let proyecto of this.proyectoList){
        this.dEditados=proyecto.id+"?nombre_proyecto="+proyecto.nombreProyecto+"&inicio="+proyecto.inicio+"&fin="+proyecto.fin+"&descripcion="+proyecto.descripcion+"&url_proyecto="+proyecto.urlProyecto;
        console.log(this.dEditados);
        this.datosProyecto.editarDatos(this.dEditados).subscribe(
          data=>{}
        )
      }
    }
    
  }

  newProy(){
    console.log(this.dNuevo);
    this.datosProyecto.agregarDatos(this.dNuevo).subscribe(
      data=>{
        location.reload();
      }
    )
  }

  delProy(id:any){
    console.log(id);
    this.datosProyecto.eliminarDatos(id).subscribe(
      data=>{
        location.reload();
      }
    )
  }

  constructor(private tokenService:TokenService,private datosProyecto:ProyectosService){ 
    console.log("Funciona proyecto");
  }
  
  ngOnInit(): void {
    this.datosProyecto.obtenerDatos().subscribe(dataProyecto =>{
      this.proyectoList = dataProyecto;
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;}
    });
  }

}
