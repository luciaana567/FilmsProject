import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filmes';
  altoContraste:boolean=false;
  black='black';

  Contraste(){
    if(this.altoContraste== false){
      this.altoContraste=true;
    }else{
      this.altoContraste=false;
    }
    
    console.log(this.altoContraste);
  }

}
