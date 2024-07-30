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
                    pl: 3.5, // Padding left
                    pr: -19, // Padding right
                    pt: -20, // Padding top
                    }}>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Project Samaritan
                            </Typography>
                            <Typography variant="h5" component="div">
                                is it working
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                    </Grid>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Java Bank App
                            </Typography>
                            <Typography variant="h5" component="div">
                                is it working
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                    </Grid>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Sigma Quiz Backend
                            </Typography>
                            <Typography variant="h5" component="div">
                                is it working
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                    </Grid>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Connecting Flutter with Django 
                            </Typography>
                            <Typography variant="h5" component="div">
                                is it working
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                    </Grid>
                    <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Project Brethren
                            </Typography>
                            <Typography variant="h5" component="div">
                                is it working
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
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