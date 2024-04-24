import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioPermissao } from "./usuario-permissao.entity";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_usuario' })
    id: number;

    @Column({ length: 60, nullable: false })
    nome: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false, select: false })
    senha: string;

    @Column({ nullable: false })
    ativo: boolean;

    @Column({ nullable: false })
    admin: boolean;

    @OneToMany(() => UsuarioPermissao, (permissao) => permissao.usuario, { eager: true })
    permisao: UsuarioPermissao[]
}
