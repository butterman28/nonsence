import '../css/styles.css';
import { Typography,Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Header(){
    //
    return(
    <div className="header"> 
        <Typography variant='h5' gutterBottom>What's Goodie, Call me  </Typography>
        <Typography variant='h2'gutterBottom>Alegbeleye Itharmar</Typography>
        <Stack spacing={2} direction="column"><Typography variant='h5'>and I</Typography><Typography variant='h2'>Big Bang</Typography><Typography variant='h5'>Web Solutions into Existance......</Typography></Stack>
    </div>
    )
}
export default Header