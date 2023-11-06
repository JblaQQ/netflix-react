import axios from "axios"
import { useEffect, useState } from "react"
import requests from "../request"



const Text = () => {
  const [movies, setMovies] = useState([])
  
  const movie = movies[Math.floor(Math.random() * movies.length)]
    
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
            console.log(response.data)
        })
    },[])


console.log(movies)

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
<img src="" alt=""/>
      </div>

    </div>
  )
}

export default Text
