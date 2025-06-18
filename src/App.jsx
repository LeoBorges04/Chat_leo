import "./App.css";
function App() {
  
  return (
    <>
      <div>
        <div className="container">
          <div className="sidebar">
            <div className="busca"></div>
            <div className="conversas"></div>
          </div>

          <div className="chat">
            <div className="header"></div>
            <div className="mensagens"></div>

            <div className="footer">
              <input
                type="text"
                placeholder="Digite uma mensagem"
                className="inputMensagem"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
