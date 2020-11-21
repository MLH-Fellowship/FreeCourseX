import styled from "styled-components"
import tw from "twin.macro"

// className: "flex flex-col h-screen justify-center items-center bg-red-100",
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// background-color: #FFF4E0;
// height: 100vh;

const Landing = styled.section`
 
  ${tw`flex flex-col h-screen justify-center items-center bg-green-100`}

  img {
    ${tw`flex justify-start p-1 h-40`}
  }

`

export default Landing