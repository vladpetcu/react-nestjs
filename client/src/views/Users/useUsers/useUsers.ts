import { useState } from "react";
import { UsersApi } from "../../../api/api";
import { CreateUserDto, User } from "@react-nestjs/common";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const createUser = async (createUserDto: CreateUserDto) => {
    try {
      setLoading(true);
      const newUser = await UsersApi.create(createUserDto);
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadUsers = async () => {
    try {
      setLoading(true);
      const newUsers = await UsersApi.getAll();
      setUsers(() => [...newUsers]);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { users, loading, createUser, loadUsers };
};
