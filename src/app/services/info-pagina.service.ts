
//Se utiliza para hacer peticion a servidores REs
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPaginaInfe } from '../Interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPaginaInfe={};
  cargada = false;
  equipo: any[]=[];


  constructor( private http: HttpClient ) {
     console.log('Informacion cargada Pagina');
     this.CargaInfo();
     this.CargaInfoEquipo();

    

   }

  private CargaInfo(){
 //leer el archivo JSON
     this.http.get('assets/Data/Data-pagina.json').subscribe(
       (resp: infoPaginaInfe) =>{
        this.cargada= true;
        this.info= resp;
        
       }
     );

  }


  private CargaInfoEquipo(){
    //leer el archivo JSON
        this.http.get('https://cocobaby-24022-default-rtdb.firebaseio.com/Equipo.json').subscribe(
          (resp: any): void =>{      
            
            this.equipo=resp;
            //Se comenta el log para que no cargue
          // console.log(this.equipo)
           
          }

        );
   
     }



}
