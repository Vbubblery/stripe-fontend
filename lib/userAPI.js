import Cookies from "js-cookie";
import Router from 'next/router';

import {GET_USERS,LOGIN} from "./apolloAPI"

export const addUser = async(username, email, password) => {
  if (!process.browser) {
    return undefined;
  }
  await strapi.register(username, email, password)
  return Promise.resolve();
};
export const login = async(email,password) =>{

  // strapi.login(email, password).then(res => {
  //   Cookies.set("username", res.user.username);
  //   Cookies.set("email", res.user.email);
  //   Cookies.set("id",res.user._id)
  //   if (Cookies.get("username")) Router.push("/profile");
  // });
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
  const result = await strapi.getEntry('users',id);
  return result;
}

export const getIdInCookies = () =>{
  const id = Cookies.get("id")
  if(!id) Router.push("/");
  return id
}
