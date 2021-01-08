import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';
import AuthLayout from '../../../components/AuthLayout';

import { Content } from './styles';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas são diferentes.');
      return false;
    }

    if (username && password && email) {
      const formData = {
        username,
        password,
        confirmPassword,
        email
      }

      try {
        const response = await api.post('user', formData);
        console.log(response.data);

        history.push('/forum');

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <AuthLayout title="Cadastro">
      <Content onSubmit={handleSubmit}>
          <section id="username-block">
            <label htmlFor="username">Nome de usuário</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Harry Potter" 
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </section>

          <section id="password-block">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Gm@Fç2cSA" 
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </section>
          
          <section id="confirm-password-block">
            <label htmlFor="confirm-password">Repita a Senha</label>
            <input 
              type="password" 
              id="confirm-password"
              placeholder="Gm@Fç2cSA" 
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)}
            />
          </section>

          <section id="email-block">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              placeholder="meuemail@domain.com" 
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </section>

          <button type="submit" id="btn-submit">Tudo certo!</button>
      </Content>
    </AuthLayout>
  );
}

export default SignUp;