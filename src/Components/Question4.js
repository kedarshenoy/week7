import { useState } from "react";
import Nav from './navigate';


const Question4 =()=>{
    const [paras,setparas]=useState("")
    function generateRandomWord(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let word = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          word += characters[randomIndex];
        }
        return word;
      }
      
      function generateParagraph(wordLength) {
        const words = [];
        const numberofwords=50;
        for (let i = 0; i < numberofwords; i++) {
          words.push(generateRandomWord(wordLength));
        }
        let smallp = words.join(' ');
        setparas(smallp);
        // return words.join(' ');
      }
      

return <div>
  <Nav></Nav>
  <h5>Enter the number of letters in the words</h5>
    <input type="number" placeholder="number" onChange={(e)=>{generateParagraph(e.target.value)}}></input>
    <p>{paras}</p>
</div>
}
export default Question4;