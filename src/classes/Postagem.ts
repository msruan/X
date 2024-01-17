import {v4 as UUID} from 'uuid'

export class Postagem {

    private _id : string;
    private _idPerfil : string;
    private _data : Date;
    private _texto : string;
    private _curtidas : number;
    private _descurtidas : number;

    constructor(id : string = UUID(), idPerfil : string, data : Date = new Date(), texto : string, curtidas : number = 0, descurtidas : number = 0) {
       
        this._id = id;
        this._idPerfil = idPerfil;
        this._texto = texto;
        this._curtidas = curtidas;
        this._descurtidas = descurtidas;
        this._data = data;
    }

    public curtir() : void {
        this._curtidas++;
    }

    public descurtir() : void {
        this._descurtidas++;
    }

    public ehPopular() : boolean {
        return this.curtidas > this.descurtidas *  1.5; 
    }

    public get id() : string {
        return this._id;
    }

    public get idPerfil() : string {
        return this._idPerfil;
    }

    public get data() : Date {
        return this._data;
    }

    public get texto() : string {
        return this._texto;
    }

    public get curtidas() : number {
        return this._curtidas;
    }

    public get descurtidas() : number {
        return this._descurtidas;
    }
}