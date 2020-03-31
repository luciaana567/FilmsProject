import { Component, OnInit } from '@angular/core';
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

  constructor( private service: Service,private router: Router) { }

  ngOnInit(): void {
    this.generoId='Todos';
    this.generoName='Todos';
    
  }


    //escolher o genero da página
    setGenero(id: any, name:string){
      this.generoId = id;
      this.service.setGenero(id,name);
      this.router.navigateByUrl('/filmes/' +id+'/'+1);
    }

}
