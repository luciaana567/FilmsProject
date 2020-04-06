import { Component, OnInit } from '@angular/core';
import { FilmesDetalhes } from 'src/app/module/movieDetails.model';
import { Genero } from 'src/app/module/genre.model';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  
  public idFilme:Number;
  public filme: FilmesDetalhes;
  private error: any;
  public nome:string;
  contraste:boolean;

  //dados do filmes
  public descricao:string;
  public dataDeLancamento:string;
  public generos: Array<Genero>;
  public duracao:Number;
  public avaliacao:Number;
  public foto: string;

  public baseUrlFoto ='https://image.tmdb.org/t/p/original';
  public NoPicture ='https://www.southernpipe.com/ASSETS/WEB_THEMES/SOUTHERNPIPES/images/NoImage.png';


  constructor( private service: Service, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.idFilme =  this.activatedRoute.snapshot.params['id'];
    this.getterFilm(this.idFilme);
    this.contraste=this.service.getContraste();
  }

  //função para atualizar contraste
  atualizarContraste():boolean{
    if(this.contraste!=this.service.getContraste()){
      this.contraste=this.service.getContraste();
      return false;
    }
    return true;
  }

  //pegar os dados da api para lista filmes por mais recentes e por genero
  getterFilm(id: Number) {
    this.service.getDetalhes(id).subscribe(
      (data: FilmesDetalhes) =>{
        this.filme = data;
        this.nome=this.filme.original_title;
        this.descricao = this.filme.overview;;
        let lancamento=this.filme.release_date.split('-').reverse().join('-');
        this.dataDeLancamento = lancamento;
        this.duracao = this.filme.runtime;
        this.generos= this.filme.genres;
        this.avaliacao = this.filme.vote_average;
    
      },
      (error: any) =>{
        this.error=error;
        console.error('ERROR: ', error);
      }
    );    

  }

  //escolher o genero da página
  setGenero(id: any, name:string){
    this.service.setGenero(id,name);
    this.router.navigateByUrl('/filmes/' +id+'/'+1);
  }
}
