import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

/* 
TODO: 

Делать по видео: https://youtu.be/FeDSumhe0kQ?list=PLu_vAIOaYQ6Q5yLM3gtHmrrtYE-MywJg2&t=90
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
