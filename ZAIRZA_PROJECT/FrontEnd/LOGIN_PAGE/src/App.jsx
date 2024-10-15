import './App.css'
import LoginForm from './Components/LoginForm/LoginForm'
import SignUp from './Components/SignUpForm/SignUp'
import BackGround from './Components/BackGround/BackGround'
import { useState } from 'react'

function App() {
  const [isSignPage, SetIsSignPage] = useState(false);

  function handlePageChangeToLogIn() {
    if(isSignPage) SetIsSignPage(!isSignPage);
  }
  function handlePageChangeToSignIn() {
    if(!isSignPage) SetIsSignPage(!isSignPage);
  }


  let buttonActiveStyles = {
    backgroundColor: '#0099ff',
    color: '#fff',
    borderRadius: '30px',
    fontSize: '16px',
    padding: '10px 13px',
    fontWeight: '600',
  }
  let buttonInactiveStyles = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 13px',
    borderRadius: '30px',
    fontSize: '13px',
  }

  return (
    <>
      <div style={{backgroundColor: '#000', borderRadius: '30px', width: 'max-content', position: 'absolute', right: '10%', top: '10px'}}>
        <button style={!isSignPage ? buttonActiveStyles : buttonInactiveStyles} onClick={handlePageChangeToLogIn}>LogIn</button>
        <button style={isSignPage ? buttonActiveStyles : buttonInactiveStyles}  onClick={handlePageChangeToSignIn}>SignUp</button>
      </div>
      <BackGround />
      {isSignPage ? <SignUp /> : <LoginForm />}

    </>
  )
}

export default App
