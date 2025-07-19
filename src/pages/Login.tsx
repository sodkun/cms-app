import { Container } from '@chakra-ui/react'
import LoginForm from '../components/auth/LoginForm'

const Login = () => {
  return (
    <Container maxW="md" centerContent mt={20}>
      <LoginForm />
    </Container>
  )
}

export default Login
