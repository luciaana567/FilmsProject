import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class Service {

  private baseURL= 'https://api.themoviedb.org/3/discover/movie';
  private ano;
  private dia;
  private mes;
  private languageEn = '&language=en-US';
  private languagePortuguese = '&language=pt-BR';
  private numPage = '&page=';
  private generoId;
  private generoNome;
  

  constructor(private http: HttpClient) {}

  //chave de serviço da api
  private getKey():string {
    return '?api_key=66e45b061138e65ddc9f6027cc3ec7c6';
  }

  //pegar a data
  private getDate(): string{
    this.ano = new  Date().getFullYear();
    this.dia = new Date().getUTCDate();
    this.mes = new Date().getMonth()+1;
    let data;
    if(this.mes<10 ){
       data = this.ano+'-0'+this.mes+'-'+this.dia;
    }
    if(this.dia<10){
      data =  this.ano+'-'+this.mes+'-0'+this.dia;
    }
    if(this.dia<10 && this.mes<10){
      data =  this.ano+'-0'+this.mes+'-0'+this.dia;
    }
    return data;
  }

  //lista de filmes da api por genero
  public getListFilms(genero:any,page:Number): Observable<any> {
      let url;
      let genres ='&with_genres='
      let data = this.getDate();

        if(this.generoId==='Todos'){
          url =this.baseURL+this.getKey()+this.languageEn+'&sort_by=release_date.desc&include_adult=true&include_video=false'+this.numPage+page+'&primary_release_date.lte='+data; 
        }else if(this.generoId==='Populares'){
          url =this.baseURL+this.getKey()+this.languageEn+'&sort_by=popularity.desc&include_adult=true&include_video=false'+this.numPage+page+'&primary_release_date.lte='+data; 
        }else {
          url =this.baseURL+this.getKey()+this.languageEn+'&sort_by=release_date.desc&include_adult=true&include_video=false'+this.numPage+page+'&primary_release_date.lte='+data+genres+genero; 
        } 
    console.log(data)
      return this.http.get(url);
  }

  //lista de filmes da pesquisa da api
  public getListSearch(nomeFilme:any,page:Number): Observable<any>{

    const url='https://api.themoviedb.org/3/search/movie'+this.getKey()+'&query='+nomeFilme+this.numPage+page+'&include_adult=true';
    console.log(url)
    return this.http.get(url);

  }

  // lista de generos da api
  public getListGeners(): Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list'+this.getKey()+this.languagePortuguese)
  }

  //detalhes de do filmeda api
  public getDetalhes(id:Number): Observable<any> {
    const url = 'https://api.themoviedb.org/3/movie/'+id+this.getKey()+this.languagePortuguese;
    return this.http.get(url);
  }
  

  //setar o genero escolhido, globalmente
  public setGenero(id:any, nome:string){
    this.generoId=id;
    this.generoNome=nome;
  }

  public getGeneroId():any{
     return this.getGeneroId;
  }
  public getGeneroNome():any{
    return this.generoNome;
 }

}