import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Doctor() {
  const navigate=useNavigate()
  const handleClick=()=>{
    localStorage.removeItem("UserInfo")
    navigate('/login')
    window.location.reload()
    
  }
  return (
    <div>
    <h1>dahsboard doc</h1>  
    <Button color='warning' onClick={handleClick} variant='contained'>LogOut</Button>
    </div>
  )
}

export default Doctor
