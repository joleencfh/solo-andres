import React from 'react';
import {
  defaultMainContext,
  defaultAuthContext,
  MainContextType,
  AuthContextType,
} from '../Types';

export const MainContext =
  React.createContext<MainContextType>(defaultMainContext);

export const AuthContext =
  React.createContext<AuthContextType>(defaultAuthContext);
