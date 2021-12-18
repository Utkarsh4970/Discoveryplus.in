import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
const CssTextField = styled(TextField)({
  
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
        color:'white'
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      fontSize: 16,
      color:'white',
      width: 'auto',
    //   padding: '10px 12px',
      
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        
      ]
    },
  });
  export default CssTextField