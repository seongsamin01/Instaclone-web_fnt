import { isLoggedInVar } from "./apollo";

function Home() {
    return (
      <div>
          <h1>홈</h1>
          <button onClick={() => isLoggedInVar(false)}>로그아웃</button>
      </div>
      );
  }
  export default Home;