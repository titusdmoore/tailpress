/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl } from '@wordpress/components';
// import { __experimentalInputControl as InputControl } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';

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
import { useState } from '@wordpress/element';
import { useEffect } from 'react';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: 'border border-sky-500'
  });

  const { tabs } = attributes;

  const [ newListItem, setNewListItem ] = useState("");

  return (
    <div {...blockProps}>
      <ul className='flex flex-row pl-0'>
        {tabs ? tabs.map((tab) => {
          return (
            <li className='list-none px-4 bg-slate-400 mr-2'>{tab}</li>
          )
        }) : null}
      </ul>
      <input type="text" value={newListItem} onChange={(e) => {
        setNewListItem(e.target.value)
      }} />
      <button onClick={() => {
        let newTabs = tabs ? tabs.concat(newListItem) : [ newListItem ];
        setNewListItem("");

        setAttributes({
          tabs: newTabs
        })
      }}>Add Element</button>
    </div>
  );
}
