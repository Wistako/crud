import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import PostForm from "./components/pages/PostForm/PostForm";
import PostEdit from "./components/pages/PostEdit/PostEdit";
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
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<PostForm />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
