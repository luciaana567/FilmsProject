import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { Pagina } from 'src/app/module/page.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  public pagina = new Pagina();
  private error: any;
  public nomeFilme:string;
  //paginacao
  public paginaAnt;
  public paginaAtual;
  public paginaProx;
  public totalPagina;

  public baseUrlFoto ='https://image.tmdb.org/t/p/w300';
  public NoPicture ='https://www.southernpipe.com/ASSETS/WEB_THEMES/SOUTHERNPIPES/images/NoImage.png';


  constructor( private service: Service, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void { 
    this.nomeFilme=this.activatedRoute.snapshot.params['buscar'];
    this.paginaAtual = this.nomeFilme=this.activatedRoute.snapshot.params['pagina'];
    this.paginaAtual = Number(this.paginaAtual);
    this.paginaAnt = 0;
    this.paginaProx = 2;
    
    this.getterListFilms(this.nomeFilme,this.paginaAtual);
    
   }

  //função para atualizar dados da  página
  atualizar():any{
    let nome = this.activatedRoute.snapshot.params['buscar'];
    if(this.nomeFilme!= nome && nome!= null){
      this.nomeFilme=nome;
      this.getterListFilms(this.nomeFilme,1);
    } 
    return nome;
  }

  //pegar os dados da api para lista filmes por mais recentes e por genero
  getterListFilms(nome:any, page: Number) {
    this.service.getListSearch(nome,page).subscribe(
      (data: Pagina) =>{
        this.pagina = data;
        this.totalPagina= this.pagina.total_pages;
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

    this.router.navigateByUrl('/buscar/'+this.nomeFilme+'/'+this.paginaAtual);
    this.getterListFilms(this.nomeFilme,this.paginaAtual);
  }
 
  //chamar a rota para vizualizar detalhes do filmes
  visualizarFilmes(id: Number) {
    this.router.navigateByUrl('/detalhes/'+id);
  }

  pageNoFound():boolean{
    if(this.pagina.total_results==0){
      this.router.navigateByUrl('/noFound/'+this.nomeFilme);
      return true;
    }
    return false;
  }
}
