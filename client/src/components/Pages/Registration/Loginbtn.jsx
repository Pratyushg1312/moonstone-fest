import React from 'react'
import './loginbtn.css'
export default function Loginbtn() {
  return (
<div class="center">
      <a href="/auth/google" class="google-btn">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          height={"50px"}
          width={"50px"}
          alt="Google logo"
        />
        <span>Login with Google</span>
      </a>
    </div>
  )
}
