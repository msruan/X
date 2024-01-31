import { SocialError } from "./SocialError";

class PostNotFoundError extends SocialError {

    constructor(message: string = "Postagem não encontrada!") {
        
        super(message);
        this.name = "PostNotFoundError";
    }
}