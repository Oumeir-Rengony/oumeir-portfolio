import data from "./data.json";

export const getHomeData = () => {
  return data[0].home;
};

export const getAboutData = () => {
  return data[0].about;
};
