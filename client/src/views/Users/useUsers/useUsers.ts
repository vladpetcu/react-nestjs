import { useState } from "react";
import { UsersApi } from "../../../api/api";
import { CreateUserDto, User } from "@react-nestjs/common";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const createUser = async (createUserDto: CreateUserDto) => {
    try {
      const newUser = await UsersApi.create(createUserDto);
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error: any) {
      console.error(error);
    }
  };

  const loadUsers = async () => {
    try {
      const newUsers = await UsersApi.getAll();
      setUsers(() => [...newUsers]);
    } catch (error: any) {
      console.error(error);
    }
  };

  return { users, createUser, loadUsers };
};
