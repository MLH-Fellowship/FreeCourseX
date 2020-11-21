import styled from "styled-components"
import tw from "twin.macro"

const StyledForm = styled.main.attrs({
    className: "flex flex-col h-screen justify-center items-center bg-red-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-red-700 rounded`}
    }
  }
`

export default StyledForm