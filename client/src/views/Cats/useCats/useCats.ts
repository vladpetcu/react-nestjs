import { useState } from "react";
import { CatsApi } from "../../../api/api";
import { Cat } from "@react-nestjs/common";

export const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadCats = async () => {
    try {
      setLoading(true);
      const newCats = await CatsApi.getAll();
      setCats(() => [...newCats]);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { cats, loading, loadCats };
};
