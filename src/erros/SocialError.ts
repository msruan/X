export abstract class SocialError extends Error {

    constructor(message: string = "Erro na aplicação!") {
        
        super(message);
        this.name = "SocialError";
    }
}

export class NullOrUndefinedValueError extends SocialError {

    constructor(message: string = "Valor nulo ou indefinido encontrado.") {
        
        super(message);
        this.name = "ValorNuloException";
    } 
}