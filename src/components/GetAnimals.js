import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ButtonAppBar from './Navbar';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';

class AllAnimals extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }
    // navigate = useNavigate();

    // navigateHome = () => {
    //     this.navigate('/');
    // };

refreshPage() {
    window.location.reload(false);
  }

    animalDelete(id,e){
        e.preventDefault();
        console.log(id)
        Axios.delete(`https://patarla-zoo-app.herokuapp.com/animal/${id}`)
        .then(res=>console.log("deleting",res)).catch(err=>console.log(err))
        this.refreshPage()
        
    }

    componentDidMount() {
        
        fetch('http://patarla-zoo-app.herokuapp.com/animals')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    Item = styled('div')(({ theme }) => ({
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
        padding: theme.spacing(1),
        borderRadius: '4px',
      }));

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div>
                <ButtonAppBar />
                <Card style={{ padding: 30 }}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    
                    {items.map(item => (
                        
                        <Card sx={{ maxWidth: 345 , borderSpacing: 10}} key={item._id} variant="outlined" spacing={5}>
                         <CardHeader
                         action={
                         <IconButton aria-label="settings" onClick={(e)=>this.animalDelete(item._id,e)}>
                         <DeleteIcon />
                         </IconButton>
                            }
                            title={item.name}
                        />
                        <CardContent>                       
                        <CardMedia 
                        component="img"
                        height="194"
                        width="194"
                        image={item.imageUrl}
                        alt="Zoo image"/>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                             Name:{item.name}
                             <br/>
                             Breed:{item.breed}
                             <br/>
                             {item.feedingHabit}
                             <br />
                             Description:{item.originOfAnimal}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    
                      
                    ))}
                    <br />
                    
                    </Grid>
                    </Box>
                    </Card>
            </div>
        );

    }

}

export default AllAnimals;