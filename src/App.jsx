import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

/* 
TODO: 

Делать по видео: https://youtu.be/3iE8BbL0038?list=PLu_vAIOaYQ6Q5yLM3gtHmrrtYE-MywJg2&t=109
Подождать окончание лимита API

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
