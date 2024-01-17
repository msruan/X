import { IRepositorioDePostagens } from "./IRepositorioDePostagens";
import { NullOrUndefinedValueError } from "../erros/NullOrUndefinedValueError";
import { Postagem } from "../classes/Postagem";
import { validarNullEUndefined } from "../utils";

export class RepositorioDePostagensArray implements IRepositorioDePostagens {


    private _postagens : Postagem[];

    constructor(postagens : Postagem[] = []){

        this._postagens = postagens;
    }

    public incluir(postagem: Postagem): void { //@throws NullOrUndefinedValueError

        validarNullEUndefined(postagem);
        this._postagens.push(postagem);  
    }

    public getPostagens(): Postagem[] {
        return this._postagens;
    }
}