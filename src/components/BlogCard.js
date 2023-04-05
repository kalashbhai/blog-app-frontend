import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Badge } from 'reactstrap';

const BlogCard = ({ blog }) => {
  return (
    <Card>
      <Link to={`/blog/${blog._id}`}>
        <CardImg top width="100%" src={blog.featuredImage} alt={blog.title} />
      </Link>
      <CardBody>
        <CardTitle tag="h5">{blog.title}</CardTitle>
        <CardText>{blog.description}</CardText>
        <div className="d-flex justify-content-between">
          <Link to={`/blog/${blog._id}`}>
            <Badge color="primary" pill>Read More</Badge>
          </Link>
          <span className="text-muted">{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
