import "./App.css";
import { useEffect, useState } from "react";

import ChatInput from "./Input";
import { socket } from "./socket";



function App(){
     const [socketInstance] = useState(socket());

     useEffect(() => {
      socketInstance.on("message", (mensagem) =>{
          console.log("Mensagem recebida", mensagem);
      });
        return () =>{
          socketInstance.off("message");
        }
     }, []);

     const handleSendMessage = (data) => {


      socketInstance.emit("message", data)

     }

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
              <ChatInput onSend={handleSendMessage} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
