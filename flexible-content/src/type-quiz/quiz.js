import React from '@wordpress/element';
import { render } from '@wordpress/element';

const preRenderedQuizBlocks = document.querySelectorAll('.edgepress-quiz-block');

preRenderedQuizBlocks.forEach((element) => {
  const data = JSON.parse(element.querySelector("pre").innerHTML)
  render(<Quiz {...data} />, element);
  element.classList.remove("edgepress-quiz-block");
})

function Quiz({ question, answers, correctAnswer }) {
  console.log(answers)
  return (
    <div className="px-6 py-2 border border-slate-300 rounded">
      Hello from React
    </div>
  );
}