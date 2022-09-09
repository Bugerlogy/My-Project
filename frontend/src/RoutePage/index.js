import React,{Component} from 'react';
import {useLocation} from 'react-router-dom';
// import axios from "axios";

const RoutePage =()=>{
    const {state} = useLocation();
    

        // const options = {
        // method: 'GET',
        // url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
        // params: {term: 'bojack', country: 'uk'},
        // headers: {
        //     'X-RapidAPI-Key': '9fc90d96bamsh7df1299fc0cd1e4p1aed63jsn139da0ca13b8',
        //     'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        // }
        // };

        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });


    return(<h1>{state?.name}</h1>)
}
export default RoutePage