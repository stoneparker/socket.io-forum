import React from 'react';

import { Container } from './styles';

interface AuthLayoutInterface {
   title: string,
}

const AuthLayout: React.FC<AuthLayoutInterface> = ({ title, children }) => {
  return (
     <Container>
        <aside>
            <img 
               src="https://blush.design/api/download?shareUri=ezTzXq4ay&s=0%7EFF8310&w=800&h=800&fm=png" 
               alt="ilustração-chat"
            />

        </aside>
        <main>
           <h1>{ title }</h1>
           { children }
        </main>
     </Container>
  );
}

export default AuthLayout;