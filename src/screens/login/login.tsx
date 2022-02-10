import React from 'react';
import {LoginHeader} from '../../svg/loginHeader';
import {LoginInput} from './loginInput';

import {Container, Form, HeaderContainer} from './styles';

const LoginScreen: React.FC = () => {
  return (
    <Container source={require('../../assets/loginImage.png')}>
      <Form>
        <HeaderContainer>
          <LoginHeader width={198} height={40} />
        </HeaderContainer>
        <LoginInput inputLabel="Email" />
        <LoginInput inputLabel="Senha" buttonTitle="Entrar" />
      </Form>
    </Container>
  );
};

export default LoginScreen;
