import { Link, Outlet } from "react-router-dom";

import { Card, Button, Row ,Col,Pagination} from 'react-bootstrap';

const BlogPage = () => {
  const posts = JSON.parse( localStorage.getItem("posts"));

  //localStorage.setItem(key , JSON.stringify(posts));

  
  return <div>

    <h2>Blog content</h2>
    <Row>
    {posts.map((item) => {
      return <Col md={3} key={item.id}>
          <Card >
            <Link to={`/blog/${item.id}`}>
              <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Button variant="primary">Go somewhere</Button>


              </Card.Body>
            </Link>
          </Card>

      </Col>
    })}
    <div>
    <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
    </div>
    </Row>

  </div>

}
export default BlogPage