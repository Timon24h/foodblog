import {getFirstThreeBlogPosts} from "../../data"
import {Row, Col, Image, Container} from "react-bootstrap"

const blogPosts = getFirstThreeBlogPosts()

function BlogPreview() {
  return (
    <Container className="blog-preview">
        <h2>Posts</h2>
        <Row>
        {blogPosts.map((post, index) => {
            return(
                <Col sm="12" lg="4" className="position-relative mb-2 mb-mg-0" key={post.id}>
                         
                  <h3>{post.title}</h3>
                
                  <Image width="100%" src={post.titleImg} />

                </Col>
            )
        })}
        </Row>
    </Container>
  )
}

export default BlogPreview