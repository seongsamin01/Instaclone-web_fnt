function Login({ setIsLoggedIn }) {
  return (
    <div>
        <h1>로그인</h1>
        <button onClick={() => setIsLoggedIn(true)}>로그인</button>
    </div>
    );
}
export default Login;