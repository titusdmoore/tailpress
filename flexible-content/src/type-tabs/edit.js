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

  const handleNewTabAdd = (newTab) => {
    setAttributes({
      tabs: [...tabs, newTab]
    })
  }

  const renderNewBlockView = () => {
    const [ newTab, setNewTab ] = useState({
      title: '',
      content: {}
    });

    return (
      <div className="w-full tab-block">
        <ul className="p-0 flex flex-row">
          <li className="list-none px-6 py-2 rounded-t-md bg-slate-200 w-fit tab">
            <TextControl
              value={newTab.value}
              onChange={(value) => {
                console.log(newTab)
                setNewTab({
                  title: value,
                  content: newTab.content
                })
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && newTab.title !== '') {
                  handleNewTabAdd(newTab);
                }
              }}
              placeholder="New Tab"
              className="[&>input]:border-none [&>input]:bg-transparent"
            />
          </li>
          <li className="list-none rounded-t-md bg-slate-200 w-fit ml-1">
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
    );
  }

  return (
    <div {...blockProps}>
      {attributes.tabs ?
        attributes.tabs.map((tab) => {
          return (
            <div>This is a tab</div>
          );
        })
        :
        renderNewBlockView()
      }
    </div>

  );
}
