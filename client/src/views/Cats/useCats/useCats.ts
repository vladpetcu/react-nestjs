import { useState } from "react";
import { api } from "../../../api";
import { Cat } from "../../../types";

export const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const loadCats = async () => {
    try {
      const newCats = await api.getCats();
      setCats(() => [...newCats]);
    } catch (error: any) {
      console.error(error);
    }
  };

  return { cats, loadCats };
};
