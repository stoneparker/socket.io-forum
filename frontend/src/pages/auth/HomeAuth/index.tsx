import React from 'react';
import { Link } from 'react-router-dom';

import AuthLayout from '../../../components/AuthLayout';

import { Content } from './styles';

const HomeAuth: React.FC = () => {
   return (
      <AuthLayout title="Que bom te ver por aqui!">
         <Content>
            <Link to="/signUp" className="button">
               cadastro
            </Link>
            <Link to="/signIn" className="button">
               login
            </Link>
         </Content>
      </AuthLayout>
   );
}

export default HomeAuth;