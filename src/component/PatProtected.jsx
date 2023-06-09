import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Store } from "./Store"


const PatProtected=({children})=>{
    const {state}=useContext(Store)
    const {UserInfo}=state
    console.log(UserInfo)
    return   UserInfo && UserInfo.isPatient ?  children : <Navigate to='/login'/> 
}

export default PatProtected