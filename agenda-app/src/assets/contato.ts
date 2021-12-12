export class Contato {
    private _nome:string;
    private _email:string;
    private _telefone:number;
    private _aniversario:string;

    constructor(nome:string, email:string, telefone:number, aniversario:string){
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._aniversario = aniversario;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome:string){
        this._nome = novoNome;
    }

    get email(){
        return this._email;
    }

    set email(novoEmail:string){
        this._email = novoEmail;
    }

    get telefone(){
        return this._telefone;
    }

    set telefone(novoTelefone:number){
        this._telefone = novoTelefone;
    }

    get aniversario(){
        return this._aniversario;
    }

    set aniversario(aniversario:string){
        this._aniversario = aniversario;
    }

}