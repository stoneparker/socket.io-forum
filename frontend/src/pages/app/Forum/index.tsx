import React from 'react';

import { Container } from './styles';

const Forum: React.FC = () => {
   return (
      <Container>
         <main>
            <section>
               <input type="text" placeholder="No que você está pensando?" />
               <button type="submit">Enviar</button>
            </section>
            <ul>
               <li>
                  <p>aaaaaaaaaa</p>
               </li>
            </ul>
         </main>
      </Container>
   ); 
}

export default Forum;