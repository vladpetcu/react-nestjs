import { axiosClient } from "../axiosClient/axiosClient";
import { CreateUserDto, User } from "@react-nestjs/common";

export const create = (createUserDto: CreateUserDto) =>
  axiosClient.post<never, User>("/users", createUserDto);

export const getAll = () => axiosClient.get<never, User[]>("/users");
