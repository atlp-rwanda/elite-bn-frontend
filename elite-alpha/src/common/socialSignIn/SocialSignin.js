import React from 'react';
import googleIcon from '../../../assets/images/icons8-google.svg';
import fbIcon from '../../../assets/images/icons8-facebook.svg';
import Button from '../button/Button';

const googleHandler = () => {
  window.open(
    'https://elite-staging.herokuapp.com/api/v1/users/oauth/google',
    '_self',
  )
}
const facebookHandler = () => {
  window.open(
    'https://elite-staging.herokuapp.com/api/v1/users/oauth/facebook',
    '_self',
  )
}
const socialSignin = () => (
  <div>
    <Button clicked={() => googleHandler()} btnType="GoogleSignup">
      <img className="h-5 w-5 mr-3" src={googleIcon} alt="google" />
      <p> Continue with google</p>
    </Button>
​
    <Button clicked={() => facebookHandler()} btnType="fbSignup">
      <img className="h-5 w-5 mr-3" src={fbIcon} alt="facebook" />
      <p> Continue with facebook </p>
    </Button>
  </div>
)

export default socialSignin