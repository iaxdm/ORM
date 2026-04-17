import { title } from "node:process";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  title!: string;

  @Column("text")
  content!: string;
  // Um usuário pode ter muitos posts
  @ManyToOne(() => User, (user) => user.posts, { onDelete: "CASCADE" })
  user!: User;
}
