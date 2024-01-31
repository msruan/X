import { NullOrUndefinedValueError } from "./erros/NullOrUndefinedValueError";
import { SocialError } from "./erros/SocialError";

//TODO - Fazer isso no Rubi também
//@throws NullOrUndefinedValueError
export function validarNullEUndefined(...objetos : any[]) : void { 

    for(const objeto of objetos){

        if(!isPresent(objeto))
            throw new NullOrUndefinedValueError();
    }
} 

export function isPresent(objeto : any) : boolean {

    return objeto != undefined && objeto != null;
}

//@throws NullOrUndefinedValueError
export function validarParametros(...objetos : any[]) : void{

    let houveValido : boolean = false;

    for(const objeto of objetos){

        if(isPresent(objeto)){
            houveValido = true
            break;
        }
    }

    if(!houveValido)
        throw new NullOrUndefinedValueError();
}