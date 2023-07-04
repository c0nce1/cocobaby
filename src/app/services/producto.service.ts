import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  cargandoproducto= true;
  productos:Producto[]=[];

  // como hacemos llamada al servidor de firebise  utilizamos  @angular/common/http
  constructor( private http: HttpClient) { 

       this.Cargaproductos();

  }


  private Cargaproductos(){
       //leer el archivo JSON
       this.http.get('https://cocobaby-24022-default-rtdb.firebaseio.com/productos_idx.json').subscribe(
        (resp: any): void =>{      
          
        
          //Se comenta el log para que no cargue
        //
        this.productos=resp;
        this.cargandoproducto= false;
        console.log(this.productos);
        }

      );

  }

}
