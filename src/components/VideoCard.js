import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const VideoCard = ({ video }) => {
  return (
    <Card>
      <Link to={`/video/${video._id}`}>
        <CardImg top width="100%" src={video.thumbnail} alt={video.title} />
      </Link>
      <CardBody>
        <CardTitle tag="h5">{video.title}</CardTitle>
        <CardSubtitle>{video.author}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
