import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import MainLayout from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { Badges } from "./pages/Badges";
import { TrendingTopics } from "./pages/TrendingTopics";
import { Settings } from "./pages/Settings";
import { Login } from "./components/Auth/Login";
import { AuthContextProvider } from "./store/AuthContext";
import { SignUp } from "./components/Auth/Signup";
import { SinglePost } from "./components/Feed/SinglePost";
import MyProfile from "./pages/MyProfile";
import { EditPost } from "./components/EditPost";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          {/* Wrap all pages inside MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="messages" element={<Messages />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="badges" element={<Badges />} />
            <Route path="topics" element={<TrendingTopics />} />
            <Route path="singlepost" element={<SinglePost />} />
            <Route path="mypost/:id" element={<EditPost />} />
            <Route path="settings" element={<Settings />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
