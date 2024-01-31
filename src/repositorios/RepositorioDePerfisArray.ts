import { IRepositorioDePerfis } from "./IRepositorioDePerfis";
import { Perfil } from "../classes/Perfil";
import { validarNullEUndefined } from "../utils";

export class RepositorioDePerfisArray implements IRepositorioDePerfis {

    private _perfis : Perfil[];

    constructor(perfis : Perfil[] = []){

        this._perfis = perfis;
    }

    //@throws NullOrUndefinedValueError
    public incluir(perfil: Perfil): void {

        validarNullEUndefined(perfil);
        this._perfis.push(perfil);
    }

    public consultar(username: string, email: string): Perfil {
        
        let perfil : Perfil;

        if(username != null)
            perfil = this.consultarUsername(username); 

        if(perfil == null && email != null)
            perfil = this.consultarEmail(email);

        return perfil;
    }

    private consultarUsername(username : string) : Perfil {

        let resultado : Perfil = null;

        this._perfis.forEach( (perfil : Perfil) => {if(perfil.username == username) resultado = perfil});
        return resultado;
    }

    private consultarEmail(email: string): Perfil {

        let resultado : Perfil = null;

        this._perfis.forEach( (perfil : Perfil) => {if(perfil.email == email) resultado = perfil});
        return resultado;
    }
    
    public getPerfis(): Perfil[] {
        return this._perfis;
    }
}