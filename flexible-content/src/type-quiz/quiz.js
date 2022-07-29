import { render, useState } from '@wordpress/element';

const preRenderedQuizBlocks = document.querySelectorAll(
	'.edgepress-quiz-block'
);
 
preRenderedQuizBlocks.forEach( ( element ) => {
	const data = JSON.parse( element.querySelector( 'pre' ).innerHTML );
	render( <Quiz { ...data } />, element );
	element.classList.remove( 'edgepress-quiz-block' );
} );

function Quiz( { question, answers, correctAnswer } ) {
	const [ userAnswer, setUserAnswer ] = useState( null );
	return (
		<div className="p-6 border border-slate-600 rounded bg-slate-200 mb-4">
			<p className="text-4xl">{ question }</p>
			<ul className="flex flex-row list-none justify-between">
				{ answers.map( ( answer, index ) => {
					let bgClasses = '';

					if ( userAnswer !== null ) {
						bgClasses =
							userAnswer === correctAnswer && userAnswer === index
								? 'bg-green-400'
								: 'bg-red-600';
					} else {
						bgClasses = 'bg-white hover:bg-slate-100';
					}

					return (
						<li
							className={ `flex-1 ${
								index < answers.length - 1 ? 'mr-4' : ''
							}` }
							key={ `${ correctAnswer }-${ answer }-${ index }` }
						>
							<button
								className={ `w-full h-full py-2 rounded-md flex items-center justify-center ${ bgClasses }` }
								onClick={ () => {
									setUserAnswer( index );
								} }
							>
								{ answer }
							</button>
						</li>
					);
				} ) }
			</ul>
		</div>
	);
}
