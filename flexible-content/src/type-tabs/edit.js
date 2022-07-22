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

  const [ localTabs, setLocalTabs ] = useState(attributes.tabs);

  const updateTab = (updatedTab, position) => {
    let updatedStateTabs = localTabs;
    updatedStateTabs[position] = updatedTab;

    setLocalTabs(updatedStateTabs);
  }

  useEffect(() => {
    setAttributes({
      tabs: localTabs
    })
  }, [localTabs])

  return (
    <div {...blockProps}>
      <div className="w-full tab-block border-2 border-sky-500">
        <ul className="p-0 flex flex-row tabs">
          {localTabs.map((tab, position) => {
            let [ localTab, setLocalTab ] = useState(tab);

            return (
              <li className="list-none px-6 py-2 rounded-t-md bg-slate-200 w-fit tab" key={"unique-key"}>
                <TextControl
                  value={localTab.title}
                  onChange={(value) => {
                    setLocalTab({
                      title: value,
                      content: localTab.content
                    })
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && localTab.title !== '') {
                      updateTab(localTab, position);
                    }
                  }}
                  placeholder="New Tab"
                  className="[&>input]:border-none [&>input]:bg-transparent"
                />
              </li>
            );
          })}

          <li className="list-none rounded-t-md bg-slate-200 w-fit ml-1" key={"key-2"}>
            <button
              onClick={() => {
                console.log("This is clicked")
              }}
              className="w-full h-full px-6 py-1 bg-transparent border-none rounded-t-md"
            >
              +
            </button>
          </li>
        </ul>
        <InnerBlocks className="w-full content" />
      </div>
    </div>

  );
}
