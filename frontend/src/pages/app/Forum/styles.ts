import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;

   width: 100%;

   main {
      display: flex;
      justify-content: center;
      flex-direction: column;
      
      width: 50%;
      padding: 60px 0;
   }

   main section {
      display: flex;
      justify-content: space-between;

      width: 100%;
      margin-bottom: 40px;
   }

   main section input {
      border: 1px solid #ddd;
      border-radius: 10px;
      height: 55px;
      padding: 0 15px;
      font-size: 16px;
      width: 85%;
   }

   main section button {
      width: 15%;
      text-decoration: none;
      background-color: #FC5B01;
      border: none;
      padding: 0 22px;
      border-radius: 10px;
      letter-spacing: 1px;
      cursor: pointer;

      color: #FFF;
      text-transform: uppercase;
      font-size: 17px;
      font-weight: bold;
   }

   main ul li {
      background-color: #FFF;
      margin-bottom: 15px;
      width: 100%;   
      padding: 30px;
      text-decoration: none;
      border-radius: 10px;
   }
`;
