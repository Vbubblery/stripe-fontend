import Strapi from "strapi-sdk-javascript";
import Cookies from "js-cookie";
import Router from 'next/router'

const apiUrl = "https://stripe-backend-bubble.herokuapp.com";
const strapi = new Strapi(apiUrl);

export const addUser = async(username, email, password) => {
  if (!process.browser) {
    return undefined;
  }
  await strapi.register(username, email, password)
  return Promise.resolve();
};
export const login = async(email,password) =>{
  strapi.login(email, password).then(res => {
    Cookies.set("username", res.user.username);
    Cookies.set("email", res.user.email);

    if (Cookies.get("username")) Router.push("/profile");
  });
}
export const logout = async() =>{
  Cookies.remove("email");
  Cookies.remove("username");

  Router.push("/");
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
