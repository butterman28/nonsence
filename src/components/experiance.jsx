import '../css/styles.css';
import { 
    Stack, 
    Typography, 
    Box, 
    Container, 
    Grid ,
    Card,
    CardContent,
    CardActions,} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import Button from '@mui/material/Button';
function Experiance() {
    return (
        <Box 
        id = "experiance"
        sx={{ 
          padding: 2, 
          backgroundColor:"transparent",
          color: 'text.primary',
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }}>
                <Box  sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>

             <Stack spacing={2} direction='row' alignItems='center' sx={{color:"#CCD6F6"}}>
                    <Typography variant='h4'>02.</Typography>
                    <Typography variant='h3'>Experience</Typography>
                    
                </Stack>
                </Box>
                <br/>
                <Grid rowSpacing={2} columnSpacing={4} container my={4} sx={{ 
                    pl: 0.5, // Padding left
                    // // Padding right
                    pt: -20, // Padding top
                    }}>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14,fontWeight:"600" }} color="text.secondary" gutterBottom>
                                Project Samaritan
                            </Typography>
                            <Typography variant="body2">
                            This project seeks to bridge the gap 
                            <br />
                            between disabled individuals and access to quality education. 
                            <br />
                            We have lecturers who volunteer to create 
                            <br />
                            courses and teachers who volunteer to teach. 
                            <br />
                            It is a project with a promising future,
                            <br />
                            but further development will be contingent on 
                            <br />
                            the availability of resources to bring it to fruition.
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small" component="a" href="https://github.com/butterman28/Project_Samaritan">Learn More</Button>
                    </CardActions>
                </Card>
                    </Grid>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14,fontWeight:"600"  }} color="text.secondary" gutterBottom>
                                Java Bank App
                            </Typography>
                            <Typography variant="body2">
                            This was a project I was hired to complete, 
                            <br />
                            and it gave me a better understanding of JavaFX and Java. 
                            <br />
                            The application can perform basic transactions,
                            <br /> 
                            such as sending money. Additionally, 
                            <br />
                            it taught me a few things about Object-Oriented Programming (OOP). 
                            <br />
                            The app allows bankers or account managers to manage user accounts, 
                            <br />
                            including retrieving and sorting them.
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small" component="a" href="https://github.com/butterman28/javafx-bankapp">Learn More</Button>
                    </CardActions>
                </Card>
                    </Grid>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14,fontWeight:"600"  }} color="text.secondary" gutterBottom>
                                Sigma Quiz Backend
                            </Typography>
                            <Typography variant="body2">
                            I was an intern at Skills Forge,
                            <br /> 
                            and this project was used to teach us 
                            <br />
                            how to use GitHub for collaboration as a team.
                            <br />
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small" component="a" href="https://github.com/SkillsForge-Community">Learn More</Button>
                    </CardActions>
                </Card>
                    </Grid>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14,fontWeight:"600" }} color="text.secondary" gutterBottom>
                                Connecting Flutter with Django 
                            </Typography>
                            <Typography variant="body2">
                            This was a personal endeavor. 
                            <br />
                            I chose Flutter for its cross-platform capabilities,
                            <br /> 
                            allowing the development of applications 
                            <br />
                            for both Android and iOS with a single codebase. 
                            <br />
                            Django, on the other hand, was selected for its
                            <br />
                             robust and scalable backend framework in Python.
                            <br />
                            </Typography>
                        </CardContent>
                    <CardActions>
                    <Button size="small" component="a" href="https://github.com/butterman28/scicomm">Learn More</Button>
                    </CardActions>
                </Card>
                    </Grid>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14,fontWeight:"600" }} color="text.secondary" gutterBottom>
                                Project Brethren
                            </Typography>
                            <Typography variant="body2">
                                I chose to keep this in a private repo,
                                <br />
                                but once online, the link below will be
                                <br />
                                this first to know, here is a teaser though
                                <br />
                                the project seeks to combine social networking
                                <br />
                                with E-Commerce
                                <br />
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                    </Grid>

                </Grid>

        </Box>

    )
}
export default Experiance