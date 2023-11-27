export class Conferencia {
    id:number;
    nombre: String;
    starts: Date;
    ends: Date;
    venue:String;
    description: String;

    constructor(
        id:number,
        nombre:String,
        starts:Date,
        ends:Date,
        venue: String,
        description:String
    ){
        this.id=id;
        this.nombre=nombre;
        this.starts=starts;
        this.ends=ends;
        this.venue=venue;
        this.description=description;
    }

}
