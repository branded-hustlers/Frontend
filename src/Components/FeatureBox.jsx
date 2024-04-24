import React from 'react'
import PropTypes from 'prop-types'

const FeatureBox = ({ imageSrc, altText, textContent, imagePosition, heading }) => {
  const imageAlignment = imagePosition === 'left' ? 'justify-start' : 'justify-end'; // Adjusted alignment logic
  const textContainerStyle = imagePosition === 'left' ? 'text-left' : 'text-left ml-18';

  return (
    <div className="flex items-center justify-center p-4">
      <div className={`flex flex-col ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
        <div className="mx-14 mb-2 text-green-700 text-3xl">{heading}</div> 
        <div className={`flex-1 mx-12 text-green-500 ${textContainerStyle}`}>
          {textContent}
        </div>
      </div>
      <img 
        src={imageSrc} 
        alt={altText} 
        className={`rounded-tl-md rounded-br-md max-w-[250px] max-h-[250px] w-full h-full object-contain ${imageAlignment} ${imagePosition === 'left' ? 'order-2' : 'order-1'}`} />
    </div>
  );
};


FeatureBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  textContent: PropTypes.node.isRequired,
  imagePosition: PropTypes.oneOf(['left', 'right']).isRequired,
}

export default FeatureBox;
