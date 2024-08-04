import React,{useState} from 'react'
import axios from "axios";
const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  let LoginUser = async(e) => {
    e.preventDefault();
    // console.log("Form is Submitted Successfully");
    // console.log(` ${name}, ${email},  ${password}`);
    try{
      const data = await axios.post("http://localhost:5000/login",{
        email,password,
      });
      console.log("Form Submitted SuccessFully");
      setEmail("");
      setPassword("");
      windows.
    }
    catch(e){
      console.log(`Error Occured:${e}`);
    }
}
return(
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={LoginUser}>
        <label>
          Enter Your Email:
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
          />
        </label>
        <br />
        <label>
          Enter Your Password:
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
)
}

export default Login;
