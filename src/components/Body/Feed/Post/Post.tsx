import React, { forwardRef } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import InputOption from '../InputOption/InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import styled from 'styled-components';
import moment from 'moment';
const Post: any = forwardRef(
  (
    {
      name,
      description,
      message,
      photoUrl,
      timestamp,
    }: InferProps<typeof Post.propTypes>,
    ref: any
  ) => {
    return (
      <PostContainer ref={ref}>
        <PostHeader>
          <Avatar src={photoUrl ? photoUrl : ''}>{name[0]}</Avatar>
          <PostInfo>
            <h2>{name}</h2>
            <p>
              {moment(new Date(timestamp?.toDate()).toUTCString()).fromNow()}
            </p>
          </PostInfo>
        </PostHeader>
        <PostBody>
          <p>{message}</p>
        </PostBody>
        <PostBottom>
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color="gray"
          />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </PostBottom>
      </PostContainer>
    );
  }
);

Post.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  message: PropTypes.string,
  photoUrl: PropTypes.string,
  timestamp: PropTypes.any,
};

const PostContainer = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const PostHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  margin-left: 10px;
  & > h2 {
    font-size: 15px;
  }

  & > p {
    font-size: 12px;
    color: gray;
  }
`;

const PostBody = styled.div`
  overflow-wrap: anywhere;
`;

const PostBottom = styled.div`
  display: flex;
`;

export default Post;
