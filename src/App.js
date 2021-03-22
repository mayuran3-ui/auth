import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

function App() {
  const responseGoogle = (response) => {
    console.log(response);
    //response with google
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      {/* google login */}
      <GoogleLogin
        clientId="871493554431-r54b6v3qggnas4l4lgfuv7gpaeq65jf0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      {/* facebook login */}
      <FacebookLogin
        appId="1174001666366295"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}

export default App;
