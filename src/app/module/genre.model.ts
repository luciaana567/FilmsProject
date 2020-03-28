

export class ListaGenero {
    public genres: Array<Genero>;

   
}

export class Genero {
    public id: Number;
    public name: string;

    constructor(id,name){
        this.id=id;
        this.name=name;
    }
}