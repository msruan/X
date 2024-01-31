import { IRepositorioDePerfis } from "../repositorios/IRepositorioDePerfis";
import { IRepositorioDePostagens } from "../repositorios/IRepositorioDePostagens";
import { Perfil } from "./Perfil";
import { Postagem } from "./Postagem";
import { PostagemAvancada } from "./PostagemAvancada";

export class RedeSocial{

    private _repositorioDePerfis : IRepositorioDePerfis;
    private _repositorioDePostagens : IRepositorioDePostagens;

    constructor(repositorioDePerfis : IRepositorioDePerfis, repositorioDePostagens : IRepositorioDePostagens){

        this._repositorioDePerfis = repositorioDePerfis;
        this._repositorioDePostagens = repositorioDePostagens;
    }
    
    public incluirPerfil(perfil : Perfil) : void{
        this._repositorioDePerfis.incluir(perfil);
    }

    public incluirPostagem(postagem : Postagem) : void {
        this._repositorioDePostagens.incluir(postagem);
    }

    public buscarPostagens(texto : string, perfil : Perfil, hashtag : string){
        this._repositorioDePostagens.buscarPostagens(texto, perfil, hashtag);
    }

    public curtir(idPost : string) : void{
    }
}