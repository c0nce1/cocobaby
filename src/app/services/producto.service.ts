import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Interfaces/producto.interface';
import { ProdcutoCaracteristicas } from '../Interfaces/productos_caracteristicas.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  cargandoproducto= true;
  productos:Producto[]=[];
  ProCaracte:ProdcutoCaracteristicas[]=[];
  ProductoFiltrado:Producto[]=[];
  // como hacemos llamada al servidor de firebise  utilizamos  @angular/common/http
  constructor( private http: HttpClient) { 

       this.Cargaproductos();

  }


  private Cargaproductos(){



    return new  Promise((resolve, reject)=>{

//leer el archivo JSON
this.http.get('https://cocobaby-24022-default-rtdb.firebaseio.com/productos_idx.json').subscribe(
  (resp: any): void =>{            
    //Se comenta el log para que no cargue
  //
  this.productos=resp;
  this.cargandoproducto= false;
  //this.resolve();
 
  }

);

    });
       

  }


getprodcuto(id: string){

  //El id se concatena
  //Template literales
  //Se regresa el observable
   return   this.http.get(`https://cocobaby-24022-default-rtdb.firebaseio.com/productos/${id}.json`);
}


busquedaProducto(termino: string){

  if (this.productos.length== 0){
    this.Cargaproductos().then(() =>{

      this.filtraprocutos(termino);
    }

    );

  }
else{

  this.filtraprocutos(termino);


  
}
   

}
private filtraprocutos(termino:string){
  this.ProductoFiltrado=[];
  termino=termino.toLocaleLowerCase();
  this.productos.forEach(prod=>{

    const titulolower = prod.titulo.toLocaleLowerCase();
    if(prod.categoria.indexOf(termino)>=0 || titulolower.indexOf(termino) >=0 ){
      this.ProductoFiltrado.push(prod);
    }
  });

 // this.ProductoFiltrado= this.productos.filter(producto=>{

//    return true;
 // })



}

}
