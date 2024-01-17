import { NullOrUndefinedValueError } from "./erros/NullOrUndefinedValueError";

//TODO - Fazer isso no Rubi também
//@throws NullOrUndefinedValueError
export function validarNullEUndefined(...objetos : object[]) : void { 

    for(const objeto in objetos){

        if(objeto == undefined || objeto == undefined)
            throw new NullOrUndefinedValueError();
    }
} 