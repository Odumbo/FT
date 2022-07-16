import AuthForm from '../components/AuthForm'

const Register = ({setToken}) => {
  return (
    <main>
      <h2>Register</h2>
      <AuthForm setToken={setToken}/>
    </main>
  )
}

export default Register;