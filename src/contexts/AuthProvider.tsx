import React, { createContext, useContext, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

export type User = {
  attributes: {
    email: string;
    email_verified: boolean;
    sub: string;
    name: string;
  };
};

export interface IAuthContext {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const initialAuthContext: IAuthContext = {
  isAuthenticated: false,
  user: null,
  signIn: async () => {},
  signOut: async () => {},
};

const AuthContext = createContext<IAuthContext>(initialAuthContext);

export const AuthProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const checkAuthStatus = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
      setUser(user);
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuthStatus().then((r) => r);
    const listener = (data: any) => {
      switch (data.payload.event) {
        case "signIn":
          setIsAuthenticated(true);
          setUser(data.payload.data);
          break;
        case "signOut":
          setIsAuthenticated(false);
          setUser(null);
          break;
        default:
          break;
      }
    };
    const removeListener = Hub.listen("auth", listener);
    return () => {
      removeListener();
    };
  }, []);

  const signIn = async (username: string, password: string) => {
    try {
      const user = await Auth.signIn(username, password);
      setIsAuthenticated(true);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
