import { request, gql } from "graphql-request";

const graphqlAPI = process.env.REACT_APP_GRAPHCMS_ENDPOINT;

export const getMenu = async () => {
  const query = gql`
    query Menu {
      menusConnection {
        edges {
          node {
            links {
              title
              url
              iconClass
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.menusConnection.edges;
};

export const getHomeSection = async () => {
  const query = gql`
    query GetHomeSection {
      home(where: { id: "ckxemp2rc1pjm0f42ezzn779i" }) {
        title
        firstname
        lastname
        publishedAt
        designation
        quote
        publicProfile {
          url
        }
        hiddenProfile {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.home;
};

export const getAboutSection = async () => {
  const query = gql`
    query GetAboutSection {
      about(where: { id: "ckxezkuqw1tpc0a371nz0n8wa" }) {
        title
        introText
        introHeader
        bios {
          attribute
          value
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  
  return result.about;
};

export const getResumeSection = async () => {
  const query = gql`
    query GetResumeSection {
      resume(where: { id: "ckxft62qo226j0a37wsrbxkeu" }) {
        title
        resumeItems {
          title
          iconClass
          timelines {
            name
            year
            position
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.resume;
};

export const getSkillSection = async () => {
  const query = gql`
    query GetSkillSection {
      skill(where: { id: "ckxfz6ejs24dd0f42bmsum9jf" }) {
        title
        skillItems {
          title
          image {
            url
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.skill;
};

export const getProjectSection = async () => {
  const query = gql`
    query GetProjectSection {
      project(where: { id: "ckxg1d0so25hx0a37bk653em3" }) {
        title
        projectItems {
          title
          website
          description
          image {
            url
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.project;
};

export const getContactSection = async () => {
  const query = gql`
    query GetContactSection {
      contact(where: { id: "ckxg1r8dc25nt0a37mj4703uj" }) {
        title
        header
        message
        inputArea
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.contact;
};