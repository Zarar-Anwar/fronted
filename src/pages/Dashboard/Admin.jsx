import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

  function Admin() {
  const navigate=useNavigate()
  const handleClick=()=>{
    localStorage.removeItem("UserInfo")
    navigate('/login')
    window.location.reload()
    
  }
  return (
    <>
      <h1>AdminDash</h1>
      <Button color='warning' onClick={handleClick} variant='contained'>LogOut</Button>
    </>
  )
}

export default Admin
