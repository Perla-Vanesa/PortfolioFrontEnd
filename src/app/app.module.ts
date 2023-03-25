import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HaSSComponent } from './componentes/ha-ss/ha-ss.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HassService } from './servicios/hass.service';
import { AcercaDeService } from './servicios/acerca-de.service';
import { EducacionService } from './servicios/educacion.service';
import { ExperienciaService } from './servicios/experiencia.service';
import { HeaderService } from './servicios/header.service';
import { ProyectosService } from './servicios/proyectos.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider, InterceptorService } from './servicios/interceptor-service';
import { HomeComponent } from './componentes/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HaSSComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HassService,AcercaDeService,EducacionService,ExperienciaService,HeaderService,ProyectosService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
