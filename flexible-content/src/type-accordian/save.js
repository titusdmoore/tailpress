/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  return <div {...blockProps}>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingOne">
          <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
            aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div className="accordion-body py-4 px-5">
            <strong>This is the first item's accordion body.</strong> It is shown by default,
            until the collapse plugin adds the appropriate classNamees that we use to style each
            element. These classNamees control the overall appearance, as well as the showing and
            hiding via CSS transitions. You can modify any of this with custom CSS or overriding
            our default variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingTwo">
          <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
            aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div className="accordion-body py-4 px-5">
            <strong>This is the second item's accordion body.</strong> It is hidden by default,
            until the collapse plugin adds the appropriate classNamees that we use to style each
            element. These classNamees control the overall appearance, as well as the showing and
            hiding via CSS transitions. You can modify any of this with custom CSS or overriding
            our default variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
            aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div className="accordion-body py-4 px-5">
            <strong>This is the third item's accordion body.</strong> It is hidden by default,
            until the collapse plugin adds the appropriate classNamees that we use to style each
            element. These classNamees control the overall appearance, as well as the showing and
            hiding via CSS transitions. You can modify any of this with custom CSS or overriding
            our default variables. It's also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>;
}
