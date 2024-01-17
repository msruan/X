import {v4 as UUID} from 'uuid'
export class Perfil {

    private _id : string;
    private _username : string;
    private _nome : string;
    private _email : string;

    constructor(id : string = UUID(), username : string, nome : string, email : string){

        this._id = id;
        this._username = username;
        this._nome = nome;
        this._email = email;
    }

    public get id() : string {
        return this._id;
    }

    public get username() : string {
        return this._username;
    }

    public get nome() : string {
        return this._nome;
    }

    public get email() : string {
        return this._email;
    }
}