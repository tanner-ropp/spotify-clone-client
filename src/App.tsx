
import { useEffect } from 'react'
import './App.css'
import { initRedirect } from './services/authorization'

function App() {

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    console.log(code)
  }, [])
  
  return (
    <button onClick={initRedirect}>Authorize</button>
  )
}

export default App
