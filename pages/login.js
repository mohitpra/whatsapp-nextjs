import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import Image from 'next/image'
function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <ImageContainer>
        <Image src={"https://cdn.freebiesupply.com/images/large/2x/whatsapp-logo-transparent.png"} layout="fill" />
        </ImageContainer>
        <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color:whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:white;
  padding: 100px;
  border-radius:5px;
  box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;

const ImageContainer = styled.div`
  position: relative;
  height:200px;
  width:200px;
  margin-bottom: 25px;
`;
