import { useEffect } from "react";
import Nav from './navigate';


const Question3=()=>{
    const reactElement = {
        type: 'a',
        props: {
          href: 'https://google.com',
          target: '_blank',
          children: 'Click me!',
        },
      };

      function generateHtml(reactElement) {
        const { type, props } = reactElement;
        // const children = Array.isArray(props.children) ? props.children.join('') : props.children;
        return `<${type} href=${props.href} target=${props.target}> Click Me to Visit Google! </${type}>`;
      }
      function customRender(reactElement, targetElementId) {
 
        const htmlCode = generateHtml(reactElement);
        const targetElement = document.getElementById(targetElementId);
        targetElement.innerHTML = htmlCode;
      }
      

      useEffect(()=>{
        customRender(reactElement,'root')
      },[])
      
}

export default Question3;