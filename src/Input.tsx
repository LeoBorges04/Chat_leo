import React, { useState } from "react";    
function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [mensagem, setMensagem] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && mensagem.trim() !== "") {
      onSend(mensagem); // <- aqui está o erro se a prop não for passada
      setMensagem("");
    }
  };

  return (
    <input
      type="text"
      value={mensagem}
      onChange={(e) => setMensagem(e.target.value)}
      onKeyDown={handleKeyPress}
      className="inputMensagem"
      placeholder="Digite sua mensagem"
    />
  );
}

export default ChatInput;