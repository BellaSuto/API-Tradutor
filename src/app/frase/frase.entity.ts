import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'frases'})
export class FraseEntity{

    constructor(linguagem, frase, traducao) {
        this.linguagem = linguagem;
        this.frase = frase;
        this.traducao = traducao;
      }
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    linguagem: string;

    @Column()
    frase: string;

    @Column()
    traducao: string;

    @CreateDateColumn({ name: 'criado_em' })
    criadoEm: Date;

}