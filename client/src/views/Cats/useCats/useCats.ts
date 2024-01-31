import { useState } from "react";
import { CatsApi } from "../../../api/api";
import { Cat } from "@react-nestjs/common";

export const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const loadCats = async () => {
    try {
      const newCats = await CatsApi.getAll();
      setCats(() => [...newCats]);
    } catch (error: any) {
      console.error(error);
    }
  };

  return { cats, loadCats };
};
