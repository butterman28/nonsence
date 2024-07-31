import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography,Stack,IconButton,ButtonGroup, Box} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
    const whatsappNumber = '+234 902 918 1560'; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
    return(
        <Box
        id = "contact"
        sx={{
            width: '100%',
            height: {
              xs: '10vh', // 50% of viewport height on extra-small screens
              sm: '30vh', // 60% of viewport height on small screens
              md: '30vh', // 70% of viewport height on medium screens
              lg: '30vh', // 80% of viewport height on large screens
              xl: '30vh', // 90% of viewport height on extra-large screens
            },
            backgroundColor: "transparent", // Example background color
          }}>
            <Box textAlign="center" >
            <Typography variant='h4'sx={{color:"#CCD6F6"}} >Contact</Typography>
        <Stack textAlign="center" spacing={1}>
        <Button size="large" sx={{color:"#CCD6F6"}} startIcon={<GitHubIcon/>} component="a" href="https://github.com/butterman28/"></Button>
        <Button size="large" sx={{color:"#CCD6F6"}} startIcon={<LinkedInIcon/>} component="a" href="https://www.linkedin.com/in/itharmar-alegbeleye-205965209/"></Button>
        <Button size="large" sx={{color:"#CCD6F6" ,textTransform: "none" }} startIcon={<EmailIcon />}  component="a"href="mailto:Itharmarv@gmail.com"></Button>
        <Button size="large" sx={{color:"#CCD6F6" ,textTransform: "none" }} startIcon={<WhatsAppIcon />}  component="a"href="https://wa.me/09029181560"></Button>
        <Typography variant='h6'  gutterBottom></Typography>
      </Stack>
      </Box>
      </Box>    

    )
}
export default Contact