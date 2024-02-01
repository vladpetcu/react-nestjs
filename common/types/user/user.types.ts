import { Cat } from "../cat/cat.types";

export interface User {
  id: number;
  name: string;
  email: string;
  cats: Cat[];
}
