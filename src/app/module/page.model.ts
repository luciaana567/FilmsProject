import { Filme } from './aboutMovie.model';


// informações da página

export class Pagina {
    

    public results :Array<Filme>;
    public page: Number;
    public total_results: Number;
    
    public dates: {
        maximum: Date,
        minimum: Date,
    }
    public total_pages: Number;
    
}

