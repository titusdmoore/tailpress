/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
// import { TextControl } from '@wordpress/components';
// import { __experimentalInputControl as InputControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Import hooks from element
 *
 */
import { useState } from '@wordpress/element';

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
		className: 'border border-sky-500',
	} );

	const { tabs } = attributes;

	const [ newListItem, setNewListItem ] = useState( '' );
	const [ newTabActive, setNewTabActive ] = useState( false );
	const [ activeTab, setActiveTab ] = useState( 1 );

	return (
		<div { ...blockProps } id={ clientId }>
			<ul className="flex flex-row pl-0">
				{ tabs
					? tabs.map( ( tab, index ) => {
							return (
								<li
									className="list-none px-12 py-2 bg-slate-400 mr-0.5 rounded-t-md"
									key={ `${ tab.title }-${ index }` }
								>
									{ tab.title }
								</li>
							);
					  } )
					: null }
				{ newTabActive ? (
					<li className="list-none px-12 py-2 bg-slate-400 mr-0.5 rounded-t-md">
						<input
							type="text"
							value={ newListItem }
							placeholder="New Tab"
							className="bg-transparent"
							onChange={ ( e ) => {
								setNewListItem( e.target.value );
							} }
						/>
						<button
							onClick={ () => {
								const newTabs = tabs
									? tabs.concat( {
											title: newListItem,
											content: null,
									  } )
									: [ { title: newListItem, content: null } ];
								setNewListItem( '' );
								setNewTabActive( false );
								setActiveTab();

								setAttributes( {
									tabs: newTabs,
								} );
							} }
						>
							Add Tab
						</button>
					</li>
				) : null }
				<li
					className="list-none bg-slate-400 mr-0.5 rounded-t-md"
					key="add-tab"
				>
					<button
						className="w-full h-full border-none bg-transparent px-6 py-2 rounded-t-md"
						onClick={ () => {
							setNewTabActive( true );
						} }
					>
						+
					</button>
				</li>
			</ul>
			<div className="content-section">
				{ tabs
					? tabs.map( ( tab, index ) => {
							return (
								<div
									key={ `content-${ tab.title }-index` }
									id={ `content-${ tab.title }-index` }
									className={
										activeTab === index ? '' : 'hidden'
									}
								>
									<InnerBlocks />
								</div>
							);
					  } )
					: null }
			</div>
		</div>
	);
}
