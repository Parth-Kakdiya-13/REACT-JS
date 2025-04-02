import { useNavigate } from "react-router-dom";
import { Feeds } from "../components/Feed/Feed"
import { Button } from "../components/UI/Button";


export const Home = () => {

    const navigate = useNavigate();

    function newPost() {
        console.log("click")
        if (localStorage.getItem("token")) {
            navigate('/singlepost');
        } else {
            alert("login")
            navigate("/login")
        }
    }



    return (
        <div className="w-fit mx-auto">
            <Button classes="flex bg-gradient-to-br from-blue-500  to-blue-950 justify-center w-fit mx-auto mt-5" type="button" onClick={newPost}>
                New Post
            </Button>
            <Feeds />
        </div>
    )
}
