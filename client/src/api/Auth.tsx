import React from 'react'
import API from './api_endpoint';
import { UserRegister } from '@/types/user';
import { UserLogin } from '@/types/user';

export const RegisterUser = async (userData : UserRegister) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

export const LoginUser = async (credentials : UserLogin) => {
  const response = await API.post("/auth/login", credentials);
  return response.data;
};