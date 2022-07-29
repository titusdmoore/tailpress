/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

document.addEventListener( 'DOMContentLoaded', () => {
	/**
	 * Every block starts by registering a new block type definition.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
	 */
	registerBlockType( metadata.name, {
		/**
		 * Used to construct a preview for the block to be shown in the block inserter.
		 */
		example: {
			attributes: {},
		},
		title: metadata.title,
		/**
		 * @see ./edit.js
		 */
		edit: Edit,
		/**
		 * @see ./save.js
		 */
		save: () => {
			return null;
		},
	} );
} );
