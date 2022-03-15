import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
  Link
} from "react-router-dom";

import AboutPage from './pages/about/About';
import ContactPage from './pages/contact/Contact';
import BlogPage from './pages/blog/BlogPage';
import Post from './pages/post/Post';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav ,Carousel} from 'react-bootstrap';
import posts from './post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<BlogPage />}></Route>
            <Route path=":postId" element={<Post />}>

            </Route>

          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

const Layout = () => {
  return (
    <Container>
      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about">About</Link>

        </Nav.Item>
        <Nav.Item>
          <Link to="/contact">Contact</Link>

        </Nav.Item>
        <Nav.Item>
          <Link to="/blog">Blog</Link>


        </Nav.Item>
      </Nav>
      

      <Outlet />
    </Container>
  );
}


const BlogLayout = () => {
  return <div>
    <div> Blog</div>
    <Outlet />
  </div>
}

// cách dùng button and onclick
const HomePage = () => {
  const navigate = useNavigate();

  localStorage.setItem("posts" , JSON.stringify(posts));
  console.log(JSON.stringify(posts))

  return <div>
    <Outlet />
    <h1>Home content</h1>
    <div>
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673213598401263_iphone-13-pro-max-dd-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/8/637613342139496099_oppo-reno6z-dd.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673213598401263_iphone-13-pro-max-dd-1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

    <button onClick={() => navigate("/about")}>About</button>

  </div>

}



export default App
