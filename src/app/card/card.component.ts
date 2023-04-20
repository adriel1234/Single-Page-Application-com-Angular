import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = [];
  menuType:string = "diretor";
  item:string = "";


  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ];
   }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push(this.item);
  }

  remover(index:number){
    this.produtos.splice(index,1);

  }

}
