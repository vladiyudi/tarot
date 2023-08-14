import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function ShowPrediction({prediction, setPrediction}) {
  return (
    <div style={{
        position: 'absolute',
        top: '70%',
        left: '7%',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}
    onClick={() => window.location.reload()}
    >
        <div>
        {prediction}
        </div>
        <HighlightOffIcon styel={{marginTop:5}}/>
    </div>
  )
}
