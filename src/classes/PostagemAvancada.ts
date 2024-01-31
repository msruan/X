import {v4 as UUID} from 'uuid';
import { Postagem } from "./Postagem";

export class PostagemAvancada extends Postagem {

    private static _numeroPadraoViewsRestantes : number = 10;

    private _viewsRestantes : number;
    private _hashtags : string[];


    constructor(id : string = UUID(), idPerfil : string, data : Date = new Date(), texto : string, curtidas : number = 0, descurtidas : number = 0, viewsRestantes : number = PostagemAvancada._numeroPadraoViewsRestantes, hashtags : string[] = []) {
        
        super(id, idPerfil, data, texto, curtidas, descurtidas);
        this._viewsRestantes = viewsRestantes;
        this._hashtags = hashtags;
    }

    public adicionarHashtag(hashtag : string) : void{

        this._hashtags.push(hashtag);
    }

    public existeHashtag(hashtag : string) : boolean {
        return this._hashtags.includes(hashtag);
    }

    public get viewsRestantes() : number {
        return this._viewsRestantes;
    }

    public get hashtags() : string[]{
        return this._hashtags;
    }
}