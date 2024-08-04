import React,{useState} from 'react'
import axios from "axios";
const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  let registerUser = async(e) => {
    // e.preventDefault();
    // console.log("Form is Submitted Successfully");
    // console.log(` ${name}, ${email},  ${password}`);
    try{
      await axios.post("http://localhost:5000/register",{
        name,password,email
      });
      console.log("Form Submitted SuccessFully");

    }
    catch(e){
      console.log(`Error Occured:${e}`);
    }
}
return(
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <label>
          Enter Your Name:
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            value={name}
          />
        </label>
        <br />
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
        <input type="submit" value="Register" />
      </form>
    </div>
)
}

export default Register;
