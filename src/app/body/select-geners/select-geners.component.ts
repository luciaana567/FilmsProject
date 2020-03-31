import { Component, OnInit } from '@angular/core';
import { ListaGenero } from 'src/app/module/genre.model';
import { Service } from 'src/app/service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-geners',
  templateUrl: './select-geners.component.html',
  styleUrls: ['./select-geners.component.css']
})
export class SelectGenersComponent implements OnInit {

 
  public listGeneros = new ListaGenero();
  private error: any;
  public panelOpenState =false;

  public generoId;
  public generoName;

  constructor( private service: Service,private router: Router) { }

  ngOnInit(): void {
    this.getterListGeners();
  }

   // pegar os gêneros da api
   getterListGeners(){
    this.service.getListGeners().subscribe(
      (data: ListaGenero) =>{
        this.listGeneros = data;
      },
      (error: any) =>{
        this.error=error;
        console.error('ERROR: ', error);
      }
    );
  }

    //escolher o genero da página
    setGenero(id: any, name:string){
      this.generoId = id;
      this.service.setGenero(id,name);
      this.router.navigateByUrl('/filmes/' +id+'/'+1);
    }
}



