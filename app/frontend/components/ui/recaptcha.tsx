import React from 'react';

interface ReCAPTCHAProps {
  className?: string;
}

const ReCAPTCHA: React.FC<ReCAPTCHAProps> = ({
  className = ''
}) => {
  // This component doesn't render anything visible since we're using v3
  // The verification happens programmatically through the useGoogleReCaptcha hook
  return (
    <div className={className} style={{ display: 'none' }}>
      {/* Invisible reCAPTCHA v3 - no UI element needed */}
    </div>
  );
};

export default ReCAPTCHA;
