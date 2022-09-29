
import{Container,TextContainer,Children,ManageProfile} from './styles';
import {useNavigate } from 'react-router-dom';  


const HomePage = () => {
    const navigate = useNavigate();
    const data = [
        { id: 1, name: "John Doe",url:"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png" },
        { id: 2, name: "Victor Wayne",url:"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png" },
        { id: 3, name: "Jane Doe" ,url:"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png"},
      ];

    const handleClick =(user)=>{
        navigate(`/browser/${user?.id}`,{state:user});
    }
 
    return(
    <Container>
            <img style={{width: '120px',height: '80px'}} src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' />

            <div style={{height: "420px",marginTop:"150px"}}>

            <TextContainer> Who's watching ?</TextContainer>

            <div style={{display:"flex",justifyContent:"center"}}>

            {data.map((user) => ( 
                   
                    <Children onClick={()=>handleClick(user)}>
                        <img className='children-img' style={{width: '170px',height: '170px',borderRadius:"4px"}} src={user?.url}/>
                        <div className='children-text' style={{marginTop:"10px"}}> {user?.name} </div> 
                    </Children> 
                  
            ))}


            <Children>
          <img className='children-img' style={{width: '170px',height: '170px',borderRadius:"4px"}} src='https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVKRigKyd51z_GFfICMK6t7lTZ7CNS2pfccve109FGK7IhzxDd5jAaxtLOgFKHYK-FRWjcWgvI8dDEUV4M8IgxYRyEbOsj0BVViH.png' />
           <div className='children-text' style={{marginTop:"10px"}}> Kids </div> 
            </Children>

            </div>

            </div>

            <div style={{display:"flex",justifyContent:"center",margin:"100px 0px 143.5px 0px"}}>
            <ManageProfile> Manage Profiles </ManageProfile>
            </div>

           

        
        </Container>
    )
}
export default HomePage