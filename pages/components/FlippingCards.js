import oracle from '../../image/oracle.png';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive'
import AskOracle from './AskOracle';
import ShowPrediction from './ShowPrediction';

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [prediction, setPrediction] = useState({});

  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
}) 


  useEffect(() => {
    if (Object.keys(prediction).length) {
      console.log("PREDICTION", prediction.images[0])
      setIsFlipped(true);
    }
    else {
      setIsFlipped(false);
    }
  }, [prediction]);

  const imageSrc = oracle; 

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        perspective: '1000px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: '90vw',
          height: '96vh',
          transition: 'transform 0.5s',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${isFlipped ? '180' : '0'}deg)`,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
            position: 'absolute',
          }}
        >
          <Image
            src={imageSrc}
            alt="Front"
            layout="fill"
            objectFit="cover"
          />
          <AskOracle prediction={prediction} setPrediction={setPrediction}/>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
          }}
        >
          <Image
            src={Object.keys(prediction).length ? prediction.images[0] : ''}
            alt="Back"
            layout="fill"
            objectFit="cover"
          />
          <ShowPrediction prediction={prediction.prediction} setPrediction={setPrediction}/>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
