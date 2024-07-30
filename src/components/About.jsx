import '../css/styles.css';
import { Typography,Stack,Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
function About() {
    return (
        <Box 
        id="about"
        sx={{ 
          padding: 2, 
          backgroundColor:"transparent",
          color: 'text.primary',
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }}>
                <Stack spacing={2} direction='row' alignItems='center' sx={{color:"#CCD6F6"}}>
                    <Typography variant='h4'>01.</Typography>
                    <Typography variant='h3'>About Me</Typography>
                </Stack>
            <Typography variant='body' align="center" gutterBottom sx={{ fontSize: '100.25rem,', fontWeight:"200", color:"#CCD6F6", lineHeight: 2.0, }}>
            I’m a Full Stack Developer specializing in building exceptional Web Solutions and Models using Django, React, Flutter and sometimes Htmx to give
                your customers and clients that wonderland experiance, all you have to do is give them a white rabbit to chase and watch them exchange whatever matrix
                they live in for yours.
                My focus lies in the art of crafting accessible, human-centered products that resonate with your audience, because in this captivating digital landscape, the customer isn't just right – they are the heroes of their own story. Together, let's weave a narrative where your brand becomes the guiding star, and every click, a magical step towards an unparalleled user experience.
                </Typography>
            </Box>    

    )
}
export default About