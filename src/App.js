import './App.css';
import StyledForm from "./styles/index.js"

function App() {
  return (
    <StyledForm>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </StyledForm>
  );
}

export default App;
