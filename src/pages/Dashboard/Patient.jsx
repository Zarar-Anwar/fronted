import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Patient=()=>{
    const navigate=useNavigate()
  const handleClick=()=>{
    localStorage.removeItem("UserInfo")
    navigate('/login')
    window.location.reload()
    
  }
  return(
    <>
    <h1>pat dash</h1>
    <Button color='warning' onClick={handleClick} variant='contained'>LogOut</Button>
    </>
  )
}

export default Patient 