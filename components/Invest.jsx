import React, { useEffect, useState } from 'react';

const Invest = () => {
  const [opacity, setOpacity] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const startFade = 1060;
      const fadeInEnd = startFade + 200;
      const fadeOutStart = 3860;
      const fadeOutEnd = fadeOutStart + 200;

      let newOpacity = 0;

      if (scrollTop >= startFade && scrollTop <= fadeInEnd) {
        newOpacity = (scrollTop - startFade) / 200;
      } else if (scrollTop > fadeInEnd && scrollTop < fadeOutStart) {
        newOpacity = 1;
      } else if (scrollTop >= fadeOutStart && scrollTop <= fadeOutEnd) {
        newOpacity = 1 - (scrollTop - fadeOutStart) / 200;
      }

      setOpacity(newOpacity);

      // Show button when within the Invest component
      if (scrollTop >= startFade && scrollTop <= fadeOutEnd) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="invest-bg bg-black relative">
      <div className="invest-wrapper" style={{ opacity }}>
        <p className="text-white text-xl md:text-3xl text-justify w-[800px] leading-[1.6] md:leading-[1.8] font-extrabold px-4">
          Tiamonds is an innovative RWA Web3 marketplace transforming how real-world diamonds are owned, traded, and valued.
          Backed by secure storage in Liechtenstein and verified by LCX and GIA, ensuring authenticity and insurance by Lloyd&apos;s London.
        </p>
      </div>
      {showButton && (
        <div className="invest-btn">
          <span>
            <p className="invest-text text-sm md:text-base p-2">Invest in Tiamonds</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default Invest;
