import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import '~/assets/css/login.scss'

const LoginPage = () => {
  return (
    <div className='page-wrapper'>
      <div className='login-container'>
        <div className='login-container-header'>LOGIN</div>
        <div className='login-container-input'>
          <label className='login-input-username' htmlFor='username'>
            Username
          </label>
          <div className='input-field input-username'>
            <FontAwesomeIcon icon={faUser} />
            <input type='text' placeholder='Username' name='username' />
          </div>
          <label className='login-input-password' htmlFor='password'>
            Password
          </label>
          <div className='input-field input-password'>
            <FontAwesomeIcon icon={faKey} />
            <input type='password' placeholder='Password' name='password' />
          </div>
          <button className='btn btn-submit'>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
