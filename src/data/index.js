import data from "./data.json";

export const getHomeData = () => {
  return data[0].home;
};

export const getAboutData = () => {
  return data[0].about;
};

export const getResume = () => {
  return data[0].resume;
};

export const getSkills = () => {
  return data[0].skills;
};

export const getProjects = () => {
  return data[0].projects;
};

export const getContact = () => {
  return data[0].contact;
};
