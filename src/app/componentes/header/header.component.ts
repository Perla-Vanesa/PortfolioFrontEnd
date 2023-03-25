import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/servicios/header.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  headerList:any;
  hActivo=false;
  isLogged=false;
  dEditados="";

  headerEd(): void{
    this.hActivo=!this.hActivo;
    if(this.hActivo==false){
      for(let header of this.headerList){
        this.dEditados=header.id+"?ap_logo=assets/APLogo-20-20.png&nombre_programa=%23YoProgramo&login=Login&banner="+header.banner;
        console.log(this.dEditados);
        this.datosHeader.editarDatos(this.dEditados).subscribe(
          data=>{}
        )
      }
    }
    
  }

  constructor(private tokenService:TokenService,private datosHeader:HeaderService){ 
    console.log("Funciona header");
  }
  
  ngOnInit(): void {
    this.datosHeader.obtenerDatos().subscribe(dataheader =>{
      this.headerList = dataheader;
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    });
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  

}
