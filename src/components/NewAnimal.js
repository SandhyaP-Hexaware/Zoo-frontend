import React,{useState} from 'react';
import Axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import ButtonAppBar from './Navbar';

function NewAnimal(){
    const url="https://patarla-zoo-app.herokuapp.com/animal"
    const [data,setData]=useState({
        name:"",
        breed:"",
        feedingHabit:"",
        originOfAnimal:"",
        imageUrl:""
    })
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };
    function submit(e){
        console.log("Submitting")
        e.preventDefault();
        Axios.post(url,{
            name:data.name,
            breed:data.breed,
            feedingHabit:data.feedingHabit,
            originOfAnimal:data.originOfAnimal,
            imageUrl:data.imageUrl
        })
        .then(res=>{
            console.log(res)
        })
        navigateHome()
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata) 
        console.log(newdata)
    }
    return ( 
        <div>
            <ButtonAppBar />
                    
        <Card align="center" >
                <CardContent>
                    
                <Typography sx={{ fontSize: 25 }} color="Blue" gutterBottom align="center">
                    Add New Animal            
                </Typography>
                    <br/>
                    <div>
                    <form onSubmit={(e)=>submit(e)}>
                    Name: <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type="text"></input>
                    <br/>
                    <br/>
                    Breed: <input onChange={(e)=>handle(e)} id="breed" value={data.breed} placeholder='breed' type="text"></input>
                    <br/>
                    <br/>
                    feeding Habit: <input onChange={(e)=>handle(e)} id="feedingHabit" value={data.feedingHabit} placeholder='feedingHabit' type="text"></input>
                    <br/>
                    <br/>
                    Description :<input onChange={(e)=>handle(e)} id="originOfAnimal" value={data.originOfAnimal} placeholder='originOfAnimal' type="text"></input>
                    <br/>
                    <br/>
                    Image Url: <input onChange={(e)=>handle(e)} id="imageUrl" value={data.imageUrl} placeholder='http://...' type="text"></input>
                    <br/>
                    <br/>
                    <Button variant="contained" onClick={(e)=>submit(e)}>Submit</Button>
                    </form>
                    </div>
            </CardContent>
            </Card>
            </div>
      );

}

export default NewAnimal;