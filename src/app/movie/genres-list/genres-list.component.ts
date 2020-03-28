import { Component, OnInit } from '@angular/core';
import { Pagina } from 'src/app/module/page.model';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

  public pagina = new Pagina();
  private error: any;

  //paginacao
  public paginaAnt;
  public paginaAtual;
  public paginaProx;
  public totalPagina = this.pagina.total_pages;
  
  //váriaveis para pegar informações do gênero
  public genero;
  public generoNome;

  constructor( private service: Service, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void { 
    this.setPagina(1);
    this.genero=this.activatedRoute.snapshot.params['genero'];    
   }

  //função para atualizar dados da  página
  atualizar():any{
      let g = this.activatedRoute.snapshot.params['genero'];
      if(this.genero!= g && g!= null){
        this.genero=g;
        this.generoNome= this.service.getGeneroNome();
        this.getterListFilms(this.genero,1);
      
      } 
      return g;
  }

  //pegar os dados da api para lista filmes por mais recentes e por genero
  getterListFilms(genres:any, page: Number) {
    this.service.getListFilms(genres,page).subscribe(
      (data: Pagina) =>{
        this.pagina = data;
      },
      (error: any) =>{
        this.error=error;
        console.error('ERROR: ', error);
      }
    );    

  }  
 
  //paginacao 
  setPagina(pag : any) {
    this.paginaAtual = pag;
    this.paginaAnt = pag-1;
    this.paginaProx = pag+1;

    this.getterListFilms(this.genero,this.paginaAtual);
  }    
  
 //chamar a rota para vizualizar detalhes do filmes
  visualizarFilmes(id: Number) {
    this.router.navigateByUrl('/detalhes/'+id);
  }

}

