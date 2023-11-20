import React, { useState, useEffect } from "react";
import "./MainChat.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const MainChat = () => {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  
  const [text, setText] = useState("");

  const startListening = () => {
    SpeechRecognition.startListening({ language: 'en-IN' });
  };



  const handleToSpeak = () => {
    const messageContent = document.querySelector(".message-content-robo p");

    if (messageContent) {
      const textToSpeak = messageContent.innerText;

      let message = new SpeechSynthesisUtterance();
      message.text = textToSpeak;
      message.volume = 1;
      message.rate = .9;
      message.pitch = .5;
      message.voice = window.speechSynthesis.getVoices()[0];

      window.speechSynthesis.speak(message);
    }
  }



  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  return (
    <div className="main-chat">
      <div className="chat-area">
        <div className="message">
          <div className="message-info">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png"
              alt=""
            />
          </div>
          <div className="message-content">
            <p>
               Hii ! I am Robin
            </p>
          </div>
        </div>
        <div className="message">
          <div className="message-info">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png"
              alt=""
            />
          </div>
          <div className="message-content">
            <p>

            </p>
          </div>
        </div>
        <div className="robo-chat">
          <div className="message-info-robo">
            <img
              src="./Image/logo.png"
              alt=""
            />
          </div>
          <div className="message-content-robo">
            <p value={text || transcript}>
              Hello Robin, I am Pragati.
            </p>
          </div>
        </div>

      </div>
      <input
        className="input-bar"
        type="text"
        placeholder="Enter your prompt here..."
        value={text || transcript}
        onChange={handleOnChange}
      />
      <div className="send-button">
        <a href="">
          <div className="send-swg" >
            <SendOutlinedIcon />
          </div>
        </a>
      </div>
      <div className="mic-button">
        <div style={{cursor:"pointer"}}  onClick={handleToSpeak} >
          <div className="mic-swg" style={{width:"40px",height:"40px"}} >
             <img src="https://cdn-icons-png.flaticon.com/128/5214/5214994.png?ga=GA1.1.1617898601.1682394367&track=ais" alt="" />
          </div>
        </div>
      </div>
      <div className="speak">
      <div style={{ cursor: "pointer" }} onClick={startListening}>
          <div className="mic-swg">
            <img src="https://cdn-icons-png.flaticon.com/128/9439/9439619.png?ga=GA1.1.1617898601.1682394367&track=ais" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChat;
