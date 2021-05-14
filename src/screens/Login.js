import { isLoggedInVar } from "./apollo";

function Login() {
    return (
      <div>
          <h1>로그인</h1>
          <button onClick={() => isLoggedInVar(true)}>로그인</button>
      </div>
      );
  }
  export default Login;