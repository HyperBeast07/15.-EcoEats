import { useContext } from "react"
import { AuthContext } from "./context/Auth"
import { Navigate, useLocation } from "react-router-dom"
import LoadingSpinner from "./components/utilities/LoadingSpinner"

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    // this "useLocation" hook us used to access the current location(URL) of the user within the app
    const location = useLocation()

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    else {
        if (user) {
            return children;
        }
        else {
            console.log("Permission denied")

            return <Navigate to='/login' state={{from:location}}></Navigate>
        }
    }
}

export default PrivateRoutes;