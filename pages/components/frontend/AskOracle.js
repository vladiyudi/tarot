import React, {useState} from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import { IconButton } from '@mui/material';
import axios from 'axios';

const inputContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '70vw',
  margin: '0 auto',
  zIndex: 100,
  position: 'absolute',
  left: '20%',
  top: '10%',
};

const inputStyles = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  flexGrow: '1',
  marginRight: '10px',
  width: '40vw',
};

const buttonStyles = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const shades = [
  '#FFA500', // Orange
  '#FF8C00', // Dark Orange
  '#FFD700', // Gold
  '#FF6347', // Tomato
  '#FF4500', // Orange Red
];

const InputWithButton = ({prediction, setPrediction}) => {

  const [magnify, setMagnify] = useState('orange');
  const [prompt, setPrompt] = useState('');

  const getRandomColor = () => {
    const interval =  setInterval(() => {
      const randomIndex = Math.floor(Math.random() * shades.length);
      setMagnify(shades[randomIndex]);
    }, 100);
  }

  const getPrediction = async () => {
    getRandomColor();
    const response = await axios.post('/api/predictions', {data: prompt});
    setPrediction(response.data);
  }

  return (
    <div style={inputContainerStyles}>
      <input
        type="text"
        placeholder="Behold, what future shall I unfold?"
        style={inputStyles}
        value={prompt} onChange={(e)=>setPrompt(e.target.value)}
      />
      {/* <IconButton style={{color:'orange'}} onClick={e=>{
        e.stopPropagation();
      }}> */}
        <AutoAwesomeIcon style={{color:magnify, cursor:'pointer', fontSize:60}}
      onClick={e=>{
       getPrediction();
      }}
        />
      {/* </IconButton> */}
    </div>
  );
};

export default InputWithButton;

