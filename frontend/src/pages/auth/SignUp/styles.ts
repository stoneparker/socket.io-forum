import styled from 'styled-components';

export const Content = styled.form`
   display: grid;
   flex-direction: column;
   grid-template-areas: 
      'username username'
      'password confirm-password'
      'email email'
      'button button';
   grid-gap: 20px;

   
   #username-block { grid-area: username };
   #password-block { grid-area: password };
   #confirm-password-block { grid-area: confirm-password };
   #email-block { grid-area: email };
   #btn-submit { grid-area: button };

   section label {
      color: #333;
      font-size: 16px;
      margin-bottom: 20px;
   }

   section input {
      border: 1px solid #ddd;
      border-radius: 10px;
      height: 55px;
      padding: 0 15px;
      font-size: 16px;
      width: 100%;
   }

   button {
      text-decoration: none;
      background-color: #FC5B01;
      border: none;
      padding: 22px;
      border-radius: 10px;
      letter-spacing: 1px;
      cursor: pointer;

      color: #FFF;
      text-transform: uppercase;
      font-size: 17px;
      font-weight: bold;
   }
`;
