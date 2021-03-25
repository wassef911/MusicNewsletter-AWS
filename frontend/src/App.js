import { useForm } from "react-hook-form";
const axios = require('axios');

function App() {
  const { register, errors, handleSubmit } = useForm();
  const endPoint = "https://cfhm2v2dwl.execute-api.us-east-1.amazonaws.com/addMail/"
  const onSubmit = ({ email }) => {
    axios.post(endPoint, {
      email
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        {(errors.email && <h5 className="error">You E-Mail is invalid!</h5>)}
        <input className="input" name="email" ref={register({ pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
        <input type="submit" className="btn" />
      </form>

      <video autoPlay muted loop>
        <source src="./assets/video.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;
