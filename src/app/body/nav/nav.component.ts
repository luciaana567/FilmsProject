import { Component, OnInit, Input } from '@angular/core';
import { ListaGenero } from 'src/app/module/genre.model';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public listGeneros = new ListaGenero();
  private error: any;

  public generoId;
  public generoName;

  @Input() altoContraste ;
  @Input() font;
 

  constructor( private service: Service,private router: Router) { }

  ngOnInit(): void {
    this.generoId='Todos';
    this.generoName='Todos';
    this.service.setContraste(this.altoContraste);  
    this.service.setFont(this.font);
  }
  


  //função para verificar contrate 
  atualizar():boolean{
    if(this.service.getContraste()!=this.altoContraste){
      this.service.setContraste(this.altoContraste); 
      return true;
    }
    return false;
  }

    //escolher o genero da página
    setGenero(id: any, name:string){
      this.generoId = id;
      this.service.setGenero(id,name);
      this.router.navigateByUrl('/filmes/' +id+'/'+1);
    }

}
