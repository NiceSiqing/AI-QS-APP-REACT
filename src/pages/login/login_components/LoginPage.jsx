import LoginHeader from './LoginHeader'
import LoginFooter from './LoginFooter'
import LoginForm from './LoginForm'


export default function LoginPage({onLogin}) {
    return(
        <>
            <LoginHeader />          
            <LoginForm onLogin={onLogin}/>
            <LoginFooter />
        </>
    )
}