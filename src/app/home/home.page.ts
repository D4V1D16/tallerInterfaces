import { Component } from '@angular/core';
import { Celular } from './producto.interface';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrCells: Celular[] = [
    {
        marca: "Samsung",
        modelo: "Galaxy S21",
        precio: 999,
        almacenamientoInterno: 128,
        color: "Negro",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_701848-MLA53734668228_022023-O.webp"
    },
    {
        marca: "Apple",
        modelo: "iPhone 13",
        precio: 1099,
        almacenamientoInterno: 256,
        color: "Plata",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_821416-MLA47781962896_102021-O.webp"
    },
    {
        marca: "Xiaomi",
        modelo: "Mi 11",
        precio: 799,
        almacenamientoInterno: 256,
        color: "Azul",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_644644-MLU69665123481_052023-O.webp"
    },
    {
        marca: "OnePlus",
        modelo: "9 Pro",
        precio: 899,
        almacenamientoInterno: 256,
        color: "Verde",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_864695-MLA47698970218_092021-O.webp"
    },
    {
        marca: "Google",
        modelo: "Pixel 6",
        precio: 699,
        almacenamientoInterno: 128,
        color: "Blanco",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_636688-MLA74650240550_022024-O.webp"
    }
];

  ngOnInit(){
  }

}
