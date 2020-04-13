import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filmes';
  altoContraste:boolean=false;
  fontSize=100;
  modificadorFonte=10;
  font:string=this.fontSize+'%';


  Contraste(){
    this.altoContraste=!this.altoContraste;
    console.log(this.altoContraste);
  }


  aumentarFonte(){
    if(this.fontSize<130){
      this.fontSize= this.fontSize+this.modificadorFonte;
      this.font=this.fontSize+'%';
    }
  }

  restaurarFonte(){
    this.fontSize=100;
    this.font=this.fontSize+'%';
  }

  diminuirFonte(){
    if(this.fontSize>100){
      this.fontSize= this.fontSize-this.modificadorFonte;
      this.font=this.fontSize+'%';
    }
  }

}
