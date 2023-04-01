import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import { useState, useContext } from 'react';
import { Datacontext } from "../../context/DataProvider"
import { authenticateSignup,authenticateLogin } from '../../services/api';

const Component = styled(Box)`
       height: 100%;
       width: 100vh;
       display:flex;
 `


const Image = styled(Box)`
background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width:28%;
padding: 25px 35px;
`


const Wrapper = styled(Box)`
    display: flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
       & > div , & > button, & > p {
        margin-top :20px
    }
  
`

const LoginButton = styled(Button)` 
text-transform : none;
background: #fb641b;
color: #fff;
border-radius: 2px;
font-weight : 500;
height: 48px;
width:100%
`

const RequestOTPButton = styled(Button)` 
text-transform : none;
background: #fff;
color: #2874f0;
border-radius: 2px;
font-weight : 500;
height: 48px;
width:100%;
margin:0;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
font-size: 12px;
align-content:center;
text-align:center;
color:#000000;
 `


 const ErrorMessage = styled(Typography)`
 font-size: 12px;
 align-content:center;
 color:#FF0000;
  `


const accountInitialValues = {
    login: {
        view: 'login',
        heading: `Login`,
        subheading: `Get access to your Orders, Wishlist and Recommnadation`
    },
    signup: {
        view: 'signup',
        heading: `Looks like you're new here!`,
        subheading: `sign up with your mobile number to get started`
    },
}

const signupInitialValues = {
    FirstName: '',
    LastName: '',
    UserName: '',
    Email: '',
    Password: '',
    Phone: ''
}


const loginInitialValues = {
    login: '',
    password: '',

}

const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setlogin] = useState(loginInitialValues);
    const [error,setError] = useState(false)
    const { setAccount } = useContext(Datacontext)

    const handleClosed = () => {
        setOpen(false)
        setError(false)
        toggleAccount(accountInitialValues.login)

    }

    const toggleSignUp = () => {
        toggleAccount(accountInitialValues.signup)
    }


    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })

    }


    const onValueChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value })

    }


    const signUpUser = async () => {
        console.log("signupsignup", signup)
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClosed();
        setAccount(signup.FirstName)
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log("responseee",response)
       if(response.status == 200){
        handleClosed();
        setAccount(response.data.data.FirstName)
       }
       else{
        setError(true)
       }
    
      
   
    }



    return (
        <Dialog open={open} onClose={handleClosed}>
            <Component>
                <Box style={{ height: '100%', display: 'flex' }}>
                    <Image>
                        <Typography style={{ color: 'white', marginBottom: 20 }} variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20, color: 'white' }} variant="h7">{account.subheading}</Typography>
                    </Image>
                    {account.view == 'login' ?
                        <Wrapper>
                            {error ? <ErrorMessage>Please enter valid username or password</ErrorMessage> : null} 
                            <TextField id="standard-basic" label="Enter Username" onChange={(e) => onValueChange(e)} name='login' variant="standard" />
                            <TextField id="standard-basic" label="Enter Password" onChange={(e) => onValueChange(e)} name='password' variant="standard" />
                            <Typography style={{ fontSize: '8px', color: '#878787' }}>By continuing, you agree to flipkart's Terms of Use and Privacy Policy.</Typography>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Text>OR</Text>
                            <RequestOTPButton>Request OTP</RequestOTPButton>
                            <Text onClick={() => toggleSignUp()} style={{ fontWeight: 600, color: '#2874f0' }}>New to Flipkart? Create an account</Text>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField label="Enter FirstName" onChange={(e) => onInputChange(e)} name='FirstName' variant="standard" />
                            <TextField label="Enter LastName" onChange={(e) => onInputChange(e)} name='LastName' variant="standard" />
                            <TextField label="Enter UserName" onChange={(e) => onInputChange(e)} name='UserName' variant="standard" />
                            <TextField label="Enter Email" onChange={(e) => onInputChange(e)} name='Email' variant="standard" />
                            <TextField label="Enter Password" onChange={(e) => onInputChange(e)} name='Password' variant="standard" />
                            <TextField label="Enter Phone" onChange={(e) => onInputChange(e)} name='Phone' variant="standard" />
                            <LoginButton onClick={() => { signUpUser() }}>Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>

    )
}

export default LoginDialog;