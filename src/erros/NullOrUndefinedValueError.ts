import { SocialError } from "./SocialError";

export class NullOrUndefinedValueError extends SocialError {

    constructor(message: string = "Valor nulo ou indefinido encontrado.") {
        
        super(message);
        this.name = "ValorNuloException";
    } 
}