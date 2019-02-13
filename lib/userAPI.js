import Strapi from "strapi-sdk-javascript";
import Cookies from "js-cookie";


const apiUrl = "https://stripe-backend-bubble.herokuapp.com";
const strapi = new Strapi(apiUrl);

export const addUser = async(username, email, password) => {
  if (!process.browser) {
    return undefined;
  }
  await strapi.register(username, email, password)
  return Promise.resolve();
};
export const login = async(token) =>{
  Cookies.set("username", token.user.username);
  Cookies.set("email", token.user.email);

  if (Cookies.get("username")) {
    Router.push("/users");
  }
}
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
