class User {

    id: number;
    nome: string;
    sobrenome: string;
    nickname: string;
    senha: string;

    constructor(){
        this.id = 0;
        this.nome = "";
        this.sobrenome = "";
        this.nickname = "";
        this.senha = "";
    }

}

export default User;