import style from './ChatGPT.module.css'
import openai from 'openai'
import { Configuration, OpenAIApi}  from "openai";
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function ChatGPT(){

    const { contain } = style
    const [ plata, setPlata ] = useState(false)

// async function call(){
// const configuration = new Configuration({
//     apiKey: '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',
//   });
//   const openai = new OpenAIApi(configuration);
  
//   const completion = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "Hello world",
//     header: "hola"
//   });
//   console.log(completion.data.choices[0].text);
// }
// if(plata){
  useEffect(() => {
    async function call() {
      try {
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
          prompt: "Hello world",
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36'
          }
        });
    
        console.log(response.data);
        setPlata(true)
      } catch (error) {
        setPlata(false)
        console.error(error);
      }
    }
  call()
  
  }, [])


    return(
        <div className={contain} >
            {
              plata ? <h1  >chati</h1> : <h1>Por el momento chatgpt no esta disponible</h1>
            }
            
        </div>
    )
}



// Ejemplo de uso en un componente de React
// import React, { useState } from 'react';

// function ChatComponent() {
//   const [messages, setMessages] = useState([]);

//   async function handleSendMessage(message) {
//     const reply = await sendMessage(message);
//     setMessages([...messages, { role: 'user', content: message }, { role: 'assistant', content: reply }]);
//   }

//   return (
//     <div>
//       {messages.map((message, index) => (
//         <div key={index}>
//           {message.role === 'user' ? 'User: ' : 'Assistant: '}
//           {message.content}
//         </div>
//       ))}
//       <button onClick={() => handleSendMessage('Hello')}>Send Message</button>
//     </div>
//   );
// }

// export default ChatComponent;
