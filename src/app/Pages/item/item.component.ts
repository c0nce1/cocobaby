import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../../Interfaces/producto.interface';
import { ProdcutoCaracteristicas } from 'src/app/Interfaces/productos_caracteristicas.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  implements OnInit{
  productoca:ProdcutoCaracteristicas={};
   id: string='';

  constructor( private route: ActivatedRoute ,
   public productoservice : ProductoService ){ }



ngOnInit(): void {
  
  this.route.params.subscribe(
    parametros=>{
      //console.log(parametros['idProducto']);
   
      this.productoservice.getprodcuto(parametros['idProducto']).subscribe(
        (CaracteProducto:  ProdcutoCaracteristicas ) =>{
          this.id=parametros['idProducto'];
        this.productoca=CaracteProducto;
          
        }
      );


    }

  );
}

}
