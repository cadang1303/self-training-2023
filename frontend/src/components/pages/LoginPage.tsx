import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import '@/assets/css/login.scss'

const LoginPage = () => {
  const onSubmit = (e: any) => {
    e.preventDefault()

    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }

    console.log(data)
  }

  return (
    <div className='page-wrapper'>
      <div className='login-container'>
        <div className='login-container-header'>LOGIN</div>
        <form className='login-container-input' onSubmit={onSubmit}>
          <label className='login-input-username' htmlFor='username'>
            Username
          </label>
          <div className='input-field input-username'>
            <FontAwesomeIcon icon={faUser} />
            <input type='text' placeholder='Username' name='username' id='username' />
          </div>
          <label className='login-input-password' htmlFor='password'>
            Password
          </label>
          <div className='input-field input-password'>
            <FontAwesomeIcon icon={faKey} />
            <input type='password' placeholder='Password' name='password' id='password' />
          </div>
          <div className='remember-me'>
            <input type='checkbox' name='remember-me' id='remember-me' />
            <label className='remember-me-label' htmlFor='remember-me'>
              Remember me
            </label>
          </div>
          <button className='btn btn-submit'>LOGIN</button>
        </form>
        <div className='login-container-footer'>
          <div className='forgot-password'></div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
