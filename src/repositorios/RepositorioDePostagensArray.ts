import { IRepositorioDePostagens } from "./IRepositorioDePostagens";
import { NullOrUndefinedValueError } from "../erros/NullOrUndefinedValueError";
import { Postagem } from "../classes/Postagem";
import { isPresent, validarNullEUndefined, validarParametros } from "../utils";
import { Perfil } from "../classes/Perfil";
import { PostagemAvancada } from "../classes/PostagemAvancada";

export class RepositorioDePostagensArray implements IRepositorioDePostagens {


    private _postagens : Postagem[];

    constructor(postagens : Postagem[] = []){

        this._postagens = postagens;
    }

    public getPostagens(): Postagem[] {
        return this._postagens;
    }

    public static getPostagensAvancadas(postagens : Postagem[]){

        const fun = (postagem: Postagem) => postagem instanceof PostagemAvancada;
        return postagens.filter(fun);
    }

    public getPostagensAvancadas() : Postagem[]{

        const fun = (postagem: Postagem) => postagem instanceof PostagemAvancada;
        return this.getPostagens().filter(fun);
    }

    //@throws NullOrUndefinedValueError
    public incluir(postagem: Postagem): void { 

        validarNullEUndefined(postagem);
        this._postagens.push(postagem);  
    }
    //@throws NullOrUndefinedValueError
    public buscarPostagem(idPost: string): Postagem {
        
        validarParametros(idPost);
        let postagemBuscada : Postagem;
        this.getPostagens().forEach(

            function(post : Postagem){
                if(post.id == idPost) 
                postagemBuscada = post;
            }
        );
        return postagemBuscada;
    }

    //@throws NullOrUndefinedValueError
    public buscarPostagens(texto : string, perfil : Perfil, hashtag : string) : Postagem[]{

        validarParametros(texto,perfil,hashtag);

        let saida : Postagem[] = this.getPostagens();

        if(isPresent(perfil))
            saida = this.buscarPostagensPorPerfil(perfil);

        if(isPresent(hashtag))
            saida = this.buscarPostagensPorHashtag(hashtag,saida);

        if(isPresent(texto))
            saida = this.buscarPostagensPorTexto(texto, saida);

        return saida;
    }

    private buscarPostagensPorPerfil(perfil: Perfil): Postagem[]{

        const fun = (postagem : Postagem) => postagem.idPerfil == perfil.id;
        return this.getPostagens().filter(fun);
    }


    private buscarPostagensPorTexto(texto: string, postagens : Postagem[]): Postagem[]{

        const fun = (postagem : Postagem) => postagem.texto.includes(texto);
        return RepositorioDePostagensArray.getPostagensAvancadas(postagens).filter(fun);
    }

     
    private buscarPostagensPorHashtag(hashtag: string, postagens : Postagem[]): Postagem[]{

        const fun = (postagem : PostagemAvancada) => postagem.hashtags.includes(hashtag);
        return postagens.filter(fun);
    }
}