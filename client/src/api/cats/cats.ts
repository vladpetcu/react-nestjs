import { axiosClient } from "../axiosClient/axiosClient";
import { Cat } from "../../types";

export const getAll = () => axiosClient.get<never, Cat[]>("/cats");
