import { Genero } from "./genre.model"

export class FilmesDetalhes{
    
    public adult: boolean;
    public backdrop_path: string;
    public belongs_to_collection: any;
    public budget: Number;
    public genres: Array<Genero>;
    public homepage: string;
    public id: Number;
    public imdb_id: string;
    public original_language: string;
    public original_title: string;
    public overview: string;
    public popularity: Number;
    public poster_path: string;
    public production_comp: Array<ProductionCompanies>; 
    public production_countries: Array<ProductionCountries>
    public release_date: string;
    public revenue: string;
    public runtime: Number;
    public spoken_languages: Array<SpokenLanguages>;
    public status: string;
    public tagline: string;
    public title: string;
    public video: boolean;
    public vote_average: Number;
    public vote_count: Number;
}

export class ProductionCompanies{
      public id: Number;
      public logo_path: any;
      public name: string;
      public origin_country: string;
}

export class ProductionCountries {
    public iso_3166_1: string;
    public name: string;
}

export class SpokenLanguages {
      public iso_639_1: string;
      public name: string;
    }