import logo from './logo.svg';
import './App.css';
import {useCallback, useEffect, useState} from "react";
import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import {Route,Routes,Link,BrowserRouter as Router,NavLink,useNavigate,Navigate,} from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useFormik } from "formik";
import * as yup from "yup";


const Initial_Movie_List = [
  
  {
    name:"Kolaiyuthir Kaalam",
    poster:"https://m.media-amazon.com/images/M/MV5BZGQ5MTY5M2EtN2YwOC00ZWEyLWE5NmQtNDk2MzhiZTg1ZWMwXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
    rating:8,
    summary:"Shruthi, a girl who grew up in an orphanage in Chennai, is declared the legal heir to a millionaire's British estate. After reaching Britain, she finds herself pursued in her new mansion by a masked murderer."

  },
  {
    name : "leo",
    poster :"https://i.pinimg.com/originals/39/f3/9d/39f39dc13ef218c04e57942bf8db54a6.jpg",
    rating: 8,
    summary:"The film follows Parthi, a café owner and animal rescuer in Theog,who is pursued by gangsters Antony and Harold Das who suspect him to be Antony's estranged son, Leo."
  },
  {
    name:"Harry Potter",
    poster:"https://images.moviesanywhere.com/51d05e3bd56acb23ba41a4db49633d98/743b4280-5ea4-4468-8d63-d565d480bee2.jpg",
    rating:9,
    summary:" A mysterious elf tells Harry to expect trouble during his second year at Hogwarts, but nothing can prepare him for trees that fight back, flying cars, spiders that talk and deadly warnings written in blood on the walls of the school.",
    },
  {
    name : "the squid game",
    poster:"https://m.media-amazon.com/images/I/51gsIdyCIqL._AC_UF894,1000_QL80_.jpg",
    rating:7,
    summary:"A story of people who fail at life for various reasons, but suddenly receive a mysterious invitation to participate in a survival game to win more than 38 million US dollars. The game takes place on an isolated island and the participants are locked up until there is a final winner."

  },
  {
    name:"chittha",
    poster:"https://media-cache.cinematerial.com/p/500x/ddwxcuph/chithha-french-movie-poster.jpg?v=1695368143",
    rating:8,
    summary:"A man is raising his niece like his own daughter, and everything appears normal in their life until the little girl goes missing."

  },
  {
    name:"the wednesday",
    poster:"https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating:7,
    summary:"Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents"

  },
  {
    name:"Ratatouille",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbtGa1wQA0XQjBV1OMV3UhJeueYa0rOPdOfm1xvoGrQ&s",
    rating:9,
    summary:"Remy dreams of becoming a great chef, despite being a rat in a definitely rodent-phobic profession. He moves to Paris to follow his dream, and with the help of hapless garbage boy Linguini he puts his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences."
  },
  {
    name:" avengers infinity war ",
    poster:"https://rukminim1.flixcart.com/image/850/1000/ky90scw0/sticker/a/a/x/medium-avengers-infinity-war-decorative-for-poster-18-ps-32-original-imagagzvhmsudcfg.jpeg?q=90",
    rating:8,
    summary:"Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. "

    },
    {
      name:"connect",
      poster:"https://timesofindia.indiatimes.com/photo/87803468.cms",
      rating :8,
      summary:"In a country where the government has imposed a national curfew, single mother Nayanthara notices eerie changes in her daughter's behavior. She seeks virtual help from a pastor, who proposes an online exorcism."

    },
    


];


function App() {
  return (
    <div className="App">
        {/* <div className="movielist">
    {movieList.map((mov)=>( 
    <Movie movie={mov} />
    ))
}
      </div>  */}
      {/* <Addmovie /> */}
     {/* <ColorBox /> */}
     <Length />
     

     <AppBar position="static">
     <Toolbar>
     <Button 
     variant="text" color="error" onClick={()=>Navigate("/movie")}>
        movies
      </Button>
      <Button variant="text" color="error"onClick={()=>Navigate("/colorbox")}>
        colorbox
      </Button>
    
       </Toolbar>
        </AppBar>

     <Routes>
      <Route path="/movie" element={<Addmovie />} />
      {/* <Route path="/colorbox" element={<ColorBox />} /> */}
      <Route path="*"element={<Notfound />} />
      <Route path="/posts" element={<Posts />} />
      <Route path= "/forms" element={<Form />} />
      <Route path="/length" element={<Length />} />
      <Route path="/parent" element={<ParentComponent />} />
      <Route path="/child" element={<ChildComponent />} />    
        {/* rerouting */}
      {/* <Route path="colorgame" element={<Navigate replace to="/colorbox"/>} /> */}
      
     </Routes>
    
 </div>
  );
}

function Addmovie() {
  const [name,setName] = useState("");
  const[summary,setSummary]= useState("");
  const[rating,setRating]=useState("");
  const[poster,setPoster] = useState("");
  const [movieList,setMovieList] = useState(Initial_Movie_List);

  
  return(
    <div>
      <TextField id="filled-basic" label="enter movie name" variant="filled" onChange={(event)=>setName(event.target.value)} />
      {/* <input placeholder= " enter movie name " onChange={(event)=>setName(event.target.value)} /> */}
      <TextField id="filled-basic" label="enter movie summary" variant="filled" onChange={(event)=>setSummary(event.target.value)} />
      {/* <input placeholder="enter movie summary" onChange={(event)=>setSummary(event.target.value)} /> */}
      <TextField id="filled-basic" label="enter movie rating" variant="filled" onChange={(event)=>setRating(event.target.summary)} />
      {/* <input placeholder=" enter movie rating" onChange={(event)=>setRating(event.target.summary)} /> */}
      <TextField id="filled-basic" label="enter movie poster" variant="filled" onchange ={(event)=>setPoster(event.target.value)}/>
      {/* <input placeholder=" enter movie poster" onchange ={(event)=>setPoster(event.target.value)} /> */}


      <Button variant="contained" color="success" 
       onClick={()=> {
        const newMovie={
          name:name,
          poster:poster,
          summary:summary,
          rating:rating,
        };
        setMovieList([...movieList,newMovie]);
        }}
        >
  Addmovie
</Button>
          <div className="movielist">
            {movieList.map((mov)=>(
              <Movie movie={mov} />
            ))}
          </div>

    
      {/* <button onClick={()=>
      const newMovie={
        name:name,
        poster:poster,
        summary:summary,
        rating:rating,
      };
      setMovieList([...movieList,newMovie]);
      }}
      >
      Addmovie</button> */}

 </div>
    
  );

}
function Movie({movie}) {
  const[show,setShow]=useState(true);
  const summarystyles ={
    display : show? "block":"none",
  };
  return(
    <div className="movie-container">
      <img src={movie.poster} className="movie-poster"></img>
      <div className="movie-specs">
        <h2>{movie.name}</h2>
        <p className="movie-rating">{movie.rating} ⭐</p>
      </div>
       <IconButton aria-label="delete" onClick={()=>setShow(!show)}>
        {show ? <ExpandLessIcon /> :<ExpandMoreIcon />}

</IconButton> 

      <p className="movie-summary" style={summarystyles}>{movie.summary}</p>
      <Counter />

    </div>
  );

  function Counter() {
    const [like,setLike] = useState(0);
    const[dislike,setDisLike]=useState(0);
   
    return(
      <div>
        <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>setLike(like+1)}>
        👍<Badge badgeContent={like} color="success">
  
</Badge>
        </IconButton>

        <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>setDisLike(dislike+1)}>
        👎 <Badge badgeContent={dislike} color="error">
  
</Badge>
  
</IconButton>
      
   </div>
    )
  }
}

// import { AddColor } from './App';
//  function ColorBox() {

//   const [color, setColor] = useState("");
//   const [colorList, setColorList] = useState(["green", "black"]);
//   let styles = {
//     background: color,
//     width: "250px",
//     height: "150px",
//   };

//   return (
//     <div>

//       <input style={styles} onChange={(event) => setColor(event.target.value)} placeholder="enter a color"></input>
//       <button onClick={() => setColorList([...colorList, color])}>addcolor</button>
//       {colorList.map((item) => <AddColor clr={item} />)}

//     </div>
//   );
// }

//   function AddColor({clr}){
//  const styles={
//     background:clr,
//    width:"100px",
//    height:"50px",
//  };
//   return(
//     <div style={styles}></div>
//       )
//  }

  function Notfound() {
  return(
   <div>
     <img src="https://blog.fluidui.com/assets/images/posts/imageedit_1_9273372713.png" width="100%"></img>
    </div>
 )
 }
 function Posts(){
  const [posts,setPosts] = useState([]);
  useEffect(()=> {
    const fetchpost = async () =>{
      const response =await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    }
    fetchpost();
  },[])
  // console.log(posts);
  return(
    <div>
      posts
      {posts.map((post,id)=>(
        <li key={id}>{post.title}</li>
      ))}
      
    </div>
  )
 }
 

  export function Form() {
   const formValidationSchema = yup.object({
     email: yup
       .string()
       .min(5, "need a longer email")
       .max(20, "too much email")
       .required(),
 
     password: yup
       .string()
       .min(5, "need a longer password")
       .max(10, "too much password")
       .required(),
   });
 
 
   const formik = useFormik({
     initialValues: { email: "", password: "" },
     validationSchema: formValidationSchema,
     onSubmit: (values) => {
       console.log("onsubmit", values);
     },
   });
 
 
   return (
    
     <form onSubmit={formik.handleSubmit}>
       <input
         type="email"
         name="email"
         value={formik.values.email}
         onChange={formik.handleChange}
         placeholder="enter your email"
       ></input>
       {formik.errors.email}
       <br />
       <input
         type="password"
         name="password"
         value={formik.values.password}
         onChange={formik.handleChange}
         placeholder="enter your password"
       ></input>
       <br />
       {formik.errors.password}
       <br />
       <button type="sumbit">submit</button>
 
     </form>
   );
 }

 //useMemo hook

 function Length() {
  const [inputValue,setInputValue]=useState("");
  const memoizedLength= useMemo(()=>{
    return inputValue.length;

  },[inputValue]);

  return(
    <div>
      <input type="text" value={inputValue} 
      onChange={(event)=>setInputValue(event.target.value)} />
      input length is{memoizedLength};
      <br />

    </div>
  )
 }

 //usecallback hook

  function ParentComponent() {
    const [count,setCount]=useState(0);
    const handleClick = useCallback(()=>{
      setCount(count+1);
    },[count]);

    return(
      <div>
        <p> ParentComponent count : {count} </p>
        {/* <button onClick={handleClick} > click me </button> */}
        <ChildComponent handleClick={handleClick} />
      </div>
    );
  }
    function ChildComponent({handleClick}) {
      return(
        <div>
          <p>click me to handle click</p>
          <button onClick={handleClick}>click me</button>
          </div>
      )
    }





export default App;
