export class Pokemon {
    public id?: number;
    public name: string;
    public image: string;
    public type: string;
    public hp: number;
    public attack: number;
    public defense: number; 
    public idAuthor: number;
    public createdAt?: string;
    public updatedAt: string

    constructor (id: number, name: string, image: string, type: string, hp: number, attack: number, defense: number,idAuthor: number, createdAt: string, 
        updatedAt: string){
        this.id = id,
        this.name = name;
        this.image = image;
        this.type = type;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.idAuthor = idAuthor;
        this.createdAt = createdAt;
        this.updatedAt =updatedAt
    }
}