import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

constructor(private route: ActivatedRoute,
  public productoServicio: ProductoService){}

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.route.params.subscribe( params=>{
    console.log(params['termino']);
    this.productoServicio.busquedaProducto(params['termino']);
  })
  
}

}
