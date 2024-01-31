import { axiosClient } from "../axiosClient/axiosClient";
import { User } from "@react-nestjs/common";

export const getAll = () => axiosClient.get<never, User[]>("/users");
