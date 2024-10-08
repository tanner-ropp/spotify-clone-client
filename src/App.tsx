import { useEffect, useState } from "react";
import "./App.css";
import { initRedirect, getToken } from "./services/authorization";
import styled from "styled-components";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");

  useEffect(() => {
    if (!isAuth) {
      if (code) {
        getToken(code).then(() => setIsAuth(true));
      }
    }
  }, [isAuth]);

  return <AuthButton onClick={initRedirect}>Authorize</AuthButton>;
}

const AuthButton = styled.button`
  background-color: ${({ theme }) => theme.green};
  height: 3rem;
  border-radius: 1.5rem;
`;

export default App;
