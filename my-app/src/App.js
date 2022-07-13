import React, { createElement } from 'react';
import './App.css';

function App() {

  const [questions, setQuestions] = React.useState([]);

  React.useEffect( () => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => setQuestions(data.results))
      console.log(questions)
      return function() {
            
      }
} , [])

function decodeHtmlEntities(inputStr) {
  // https://www.delftstack.com/howto/javascript/javascript-decode-html-entities/
  let textarea = document.createElement('textarea');
  textarea.innerHTML =  inputStr;
  return textarea.value;

}

  console.log(questions)

  const questionElements = questions.map( (q) => {
      return <p>{decodeHtmlEntities(q.question)}</p>
  })

  

  return (
      <>
        <h1>Hello World</h1>
        {questionElements}
        
      </>
      
  );
}

export default App;
