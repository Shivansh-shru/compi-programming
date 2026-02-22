
import './App.css'
import { SignInButton } from '@clerk/clerk-react'

function App() { 

  return (
    <>
      <h1>Welcome to Codesk</h1>

      <SignInButton mode="modal" >
        <button className="sign-in-button">Get Started</button>
      </SignInButton>
    </>
  )
}

export default App
