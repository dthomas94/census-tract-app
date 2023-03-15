import axios from "axios";

export const getTracts = async () => {
  const res = await axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/tracts`)
    .then((res) => res)
    .catch((err) => {
      console.error(err.message);
      return [];
    });

  return res;
};

export const getTract = async (id: string) => {
  const res = await axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/tracts/${id}`)
    .then((res) => res)
    .catch((err) => {
      console.error(err.message);
      return;
    });

  return res;
};
