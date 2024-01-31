import { axiosClient } from "../axiosClient/axiosClient";
import { Cat } from "@react-nestjs/common";

export const getAll = () => axiosClient.get<never, Cat[]>("/cats");
