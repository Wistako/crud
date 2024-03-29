import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import AddPostForm from "./components/pages/AddPostForm/AddPostForm";
import PostEdit from "./components/pages/PostEdit/PostEdit";
import Categories from "./components/pages/Categories/Categories";
import Category from "./components/pages/Category/Category";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post/add" element={<AddPostForm />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
