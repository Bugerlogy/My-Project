import React,{useState} from 'react';
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
// import getAllUsers from '../service';
const axios = require('axios');



const RoutePage =  () => {
    const [list , setList] = useState(null);
    const {state} = useLocation();

    const baseUrl = 'https://api.themoviedb.org/3/movie/upcoming/?api_key=77aebd8b8675caba3e83c102fa70f228'

    useEffect(() => {
        axios.get(baseUrl)
            .then(res=>  setList(res?.data));

        },[])
    console.log('list-> ',list);
    
    return (
    <>
    <h1>{state?.name}</h1>
    <div>manish</div>
    </>
    )
}
export default RoutePage;