import { axiosClient } from "../axiosClient/axiosClient";
import { User } from "../../types";

export const getAll = () => axiosClient.get<never, User[]>("/users");
