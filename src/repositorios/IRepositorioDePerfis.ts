import {Perfil} from "../classes/Perfil";

export interface IRepositorioDePerfis {

    //@throws NullOrUndefinedValueError
    incluir(perfil : Perfil) : void;
    getPerfis() : Perfil[];
    consultar(username : string, email : string) : Perfil;
}