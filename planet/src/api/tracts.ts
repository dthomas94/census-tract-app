import axios from "axios";
import { Tract } from "../types/Tract";

export const getTracts = async () => {
  const res = await axios
    .get<{ tracts: Tract[] }>(`${process.env.REACT_APP_BASE_API_URL}/tracts`)
    .then((res) => res.data?.tracts ?? [])
    .catch((err) => {
      console.error(err.message);
      return [];
    });

  return res;
};

export const getTract = async (id: string) => {
  const res = await axios
    .get<Tract | undefined>(
      `${process.env.REACT_APP_BASE_API_URL}/tracts/${id}`
    )
    .then((res) => res)
    .catch((err) => {
      console.error(err.message);
      return;
    });

  return res;
};
