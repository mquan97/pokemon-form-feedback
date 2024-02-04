import logo from "./logo.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="body">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="form"
        >
          <input
            className="textInput"
            {...register("firstName")}
            placeholder="First Name"
          />
          <input
            className="textInput"
            {...register("lasttName")}
            placeholder="Last Name"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
