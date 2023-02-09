import { FC } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { AuthProvider } from "contexts/AuthProvider";

const App: FC = () => {
  return (
    <AuthProvider>
      <Authenticator.Provider>
        <Authenticator variation="modal">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Authenticator>
      </Authenticator.Provider>
    </AuthProvider>
  );
};

export default App;
