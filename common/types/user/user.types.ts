import { Cat } from "../cat/cat.types";

export interface User {
  id: number;
  email: string;
  name: string;
  cats: Cat[];
}
