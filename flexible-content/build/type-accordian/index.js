(()=>{"use strict";const e=window.wp.blocks,t=window.wp.element,s=window.wp.components,n=window.wp.blockEditor,o=JSON.parse('{"u2":"edgepress/accordian"}');(0,e.registerBlockType)(o.u2,{example:{attributes:{message:"Edgepress Accordian"}},edit:function(e){let{attributes:o,setAttributes:r}=e;const a=(0,n.useBlockProps)();return(0,t.createElement)("div",a,(0,t.createElement)(s.TextControl,{value:o.message,onChange:e=>r({message:e})}))},save:function(e){let{attributes:s}=e;const o=n.useBlockProps.save();return(0,t.createElement)("div",o,s.message)}})})();