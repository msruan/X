import { Postagem } from "../classes/Postagem";

export interface IRepositorioDePostagens {

    //@throws NullOrUndefinedError
    incluir(postagem : Postagem) : void;
    getPostagens() : Postagem[];
}