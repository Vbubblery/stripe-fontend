import Strapi from "strapi-sdk-javascript";
const apiUrl = "https://stripe-backend-bubble.herokuapp.com";
const strapi = new Strapi(apiUrl);

export const addUser = (username, email, password) => {
  if (!process.browser) {
    return undefined;
  }
  strapi.register(username, email, password);
  return Promise.resolve();
};

export const getUsers = async() =>{
  await strapi.login('root', 'dx13658444998');
  const result = await strapi.getEntries('users');
  return result;
}

export const getUserById = async(id) =>{
  await strapi.login('root', 'dx13658444998');
  const result = await strapi.getEntry('users',id);
  return result;
}
