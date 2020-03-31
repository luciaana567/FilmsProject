import { Component, OnInit } from '@angular/core';
import { FilmesDetalhes } from 'src/app/module/movieDetails.model';
import { Genero } from 'src/app/module/genre.model';
import { Service } from 'src/app/service/service';
import { ActivatedRoute } from '@angular/router';

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
  public descricao:string;
  public dataDeLancamento:string;
  public generos: Array<Genero>;
  public duracao:Number;
  public avaliacao:Number;
  public foto: string;

  constructor( private service: Service, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idFilme =  this.activatedRoute.snapshot.params['id'];
    this.getterFilm(this.idFilme);
  }

  //pegar os dados da api para lista filmes por mais recentes e por genero
  getterFilm(id: Number) {
    this.service.getDetalhes(id).subscribe(
      (data: FilmesDetalhes) =>{
        this.filme = data;
        this.nome=this.filme.original_title;
        this.descricao = this.filme.overview;;
        this.dataDeLancamento = this.filme.release_date;
        this.duracao = this.filme.runtime;
        this.generos= this.filme.genres;
        this.avaliacao = this.filme.vote_average;
        this.foto = 'https://image.tmdb.org/t/p/original'+this.filme.poster_path;
        console.log(this.generos);
      },
      (error: any) =>{
        this.error=error;
        console.error('ERROR: ', error);
      }
    );    

  }

}
