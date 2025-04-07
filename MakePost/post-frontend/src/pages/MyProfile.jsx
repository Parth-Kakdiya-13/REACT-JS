import { useNavigate } from "react-router-dom";
import { MyPosts } from "../components/MyPosts";
import { Profile } from "../components/Profile";
import { useEffect } from "react";



const MyProfile = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")


    useEffect(() => {
        if (!token) {
            return navigate('/login')
        }
    }, [token])

    return <div className='relative'>
        <Profile />
        <div className="w-full">
            <MyPosts />
        </div>
    </div>
};

export default MyProfile;
