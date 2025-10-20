import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

/* 
TODO: 

Делать по видео: https://youtu.be/bD0UXb7kD_k?list=PLu_vAIOaYQ6Q5yLM3gtHmrrtYE-MywJg2&t=878
*/

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
