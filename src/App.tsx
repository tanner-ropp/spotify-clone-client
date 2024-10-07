
import { useEffect, useState } from 'react'
import './App.css'
import { initRedirect, getToken } from './services/authorization'
import ErrorPage from "./error-page";
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('code');

  useEffect(() => {
    if (!isAuth) {
      if (code) {
        getToken(code).then(() => setIsAuth(true))
      }
    }
  }, [isAuth])



  
  
  return (
    <button onClick={initRedirect}>Authorize</button>
  )
}

export default App
