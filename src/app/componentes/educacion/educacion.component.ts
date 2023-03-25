import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacionList:any;
  edActivo=false;
  isLogged=false;
  dEditados="";
  dNuevo="?nombre_inst=Insertar nombre instituto&url_logo=Insertar url del logo&carrera=Insertar carrera&inicio=Insertar inicio&fin=Insertar fin";
  id="";

  educEd(): void{
    this.edActivo=!this.edActivo;
    if(this.edActivo==false){
      for(let educacion of this.educacionList){
        this.dEditados=educacion.id+"?nombre_inst="+educacion.nombreInst+"&url_logo="+educacion.urlLogo+"&carrera="+educacion.carrera+"&inicio="+educacion.inicio+"&fin="+educacion.fin;
        console.log(this.dEditados);
        this.datosEducacion.editarDatos(this.dEditados).subscribe(
          data=>{}
        )
      }
    }
    
  }

  newEdu(){
    console.log(this.dNuevo);
    this.datosEducacion.agregarDatos(this.dNuevo).subscribe(
      data=>{
        location.reload();
      }
    )
  }

  delEdu(id:any){
    console.log(id);
    this.datosEducacion.eliminarDatos(id).subscribe(
      data=>{
        location.reload();
      }
    )
  }
  constructor(private tokenService:TokenService,private datosEducacion:EducacionService){ 
    console.log("Funciona educacion");
  }
  
  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(dataeducacion =>{
      this.educacionList = dataeducacion;
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;}
    });
  }

}
