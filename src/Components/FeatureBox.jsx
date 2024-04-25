import React from 'react'
import PropTypes from 'prop-types'

const FeatureBox = ({ imageSrc, altText, textContent, imagePosition, heading }) => {
  const imageAlignment = imagePosition === 'left' ? 'justify-start mr-12' : 'justify-end ml-12'
  const textContainerStyle = imagePosition === 'left' ? 'text-left' : 'text-left ml-18'

  return (
    <div className="flex items-center justify-center p-4">
      <div className={`flex flex-col ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
        <div className="mx-12 my-6 text-green-700 text-3xl">{heading}</div> 
        <div className={`flex-1 mx-12 mb-28 text-green-500 text-lg ${textContainerStyle}`}>
          {textContent}
        </div>
      </div>
      <img 
        src={imageSrc} 
        alt={altText} 
        className={`rounded-tl-[50px] rounded-br-[50px] max-h-[280px] w-1/4 h-full object-contain ${imageAlignment} ${imagePosition === 'left' ? 'order-2' : 'order-1'}`} />
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
