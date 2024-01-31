import { Perfil } from "../classes/Perfil";
import { Postagem } from "../classes/Postagem";

export interface IRepositorioDePostagens {

    //@throws NullOrUndefinedValueError
    incluir(postagem : Postagem) : void;
    getPostagens() : Postagem[];
    //@throws NullOrUndefinedValueError
    buscarPostagens(texto : string, perfil : Perfil, hashtag : string) : Postagem[];
    //@throws NullOrUndefinedError
    buscarPostagem(idPost : string) : Postagem;
}