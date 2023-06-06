import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import PostList from "./components/PostListPage";
import AddPostPage from "./components/AddPostPage";
import SinglePostPage from "./components/SinglePostPage";
import EditPostForm from "./components/EditPostForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<PostList />} />
        <Route path="post">
          <Route index element={<AddPostPage />} />
          <Route path=":postId" element={<SinglePostPage />} /> 
          <Route path="edit/:postId" element={<EditPostForm />} /> 
          
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
