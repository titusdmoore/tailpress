/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import {
	TextControl,
	Flex,
	FlexBlock,
	FlexItem,
	Button,
	Icon,
} from '@wordpress/components';
// import { __experimentalInputControl as InputControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Import hooks from element
 *
 */
// import { useState } from '@wordpress/element';
// import { useEffect } from 'react';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {string}   props.clientId
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {
	const blockProps = useBlockProps( {
		className:
			'border border-solid border-slate-600 p-4 bg-slate-200 rounded mb-6',
	} );

	const { question, answers, correctAnswer } = attributes;

	const deleteAnswer = ( indexToDelete ) => {
		const newAnswers = answers.filter( ( value, index ) => {
			return index !== indexToDelete;
		} );

		if ( indexToDelete === correctAnswer ) {
			setAttributes( { correctAnswer: undefined } );
		}

		setAttributes( { answers: newAnswers } );
	};

	const markCorrect = ( indexToMark ) => {
		setAttributes( { correctAnswer: indexToMark } );
	};

	return (
		<div { ...blockProps }>
			<TextControl
				placeholder="Type your question here..."
				value={ question }
				onChange={ ( value ) => {
					setAttributes( {
						question: value,
					} );
				} }
				label={ 'Question' }
			/>
			<p>Answers:</p>
			{ answers.map( ( answer, index ) => {
				return (
					<Flex key={ `${ clientId }-answer-${ index }` }>
						<FlexBlock>
							<TextControl
								value={ answer === undefined ? '' : answer }
								onChange={ ( value ) => {
									const newArr = answers.concat( [] );
									newArr[ index ] = value;

									setAttributes( {
										answers: newArr,
									} );
								} }
								placeholder={ `Answer ${ index + 1 }` }
								autoFocus={ answer === undefined }
							/>
						</FlexBlock>
						<FlexItem className="mb-2">
							<Button
								className="child:hover:text-amber-600"
								onClick={ () => markCorrect( index ) }
							>
								<Icon
									className="text-amber-400"
									icon={
										correctAnswer === index
											? 'star-filled'
											: 'star-empty'
									}
								/>
							</Button>
						</FlexItem>
						<FlexItem className="mb-2">
							<Button
								isLink
								className="text-red-500 hover:text-red-700"
								onClick={ () => deleteAnswer( index ) }
							>
								Delete
							</Button>
						</FlexItem>
					</Flex>
				);
			} ) }
			<Button
				isPrimary
				className="mt-6"
				onClick={ () => {
					setAttributes( {
						answers: answers.concat( [ undefined ] ),
					} );
				} }
			>
				Add Another Answer
			</Button>
		</div>
	);
}
