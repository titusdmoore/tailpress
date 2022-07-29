/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

import { subscribe, select, dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Function to control page wide logic
 */
( function () {
    let locked = false;

    // TODO import all used here into module before this function

    subscribe(
        () => {
            const results = select('core/block-editor')
            .getBlocks()
            .filter(
                ( block ) => {
                    return (
                    block.name === 'edgepress/quiz' &&
                    block.attributes.correctAnswer === null
                );
                } 
            );
        if (results.length && locked === false ) {
            locked = true;
            dispatch('core/editor').lockPostSaving('noanswer');
        }
        if (! results.length && locked ) {
            locked = false;
            dispatch('core/editor').unlockPostSaving('noanswer');
        }
        } 
    );
} )();

document.addEventListener(
    'DOMContentLoaded', () => {
        /**
                                                             * Every block starts by registering a new block type definition.
                                                             *
                                                             * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
                                                             */
            registerBlockType(
                metadata.name, {
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
                     * Return null to use PHP file
                     */
                    save: () => {
                        return null;
                    },
                } 
            );
    } 
);
