function Home({ setIsLoggedIn }) {
    return (
      <div>
          <h1>홈</h1>
          <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
      </div>
      );
  }
  export default Home;