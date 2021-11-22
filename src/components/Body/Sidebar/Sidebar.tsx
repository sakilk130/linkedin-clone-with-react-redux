import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import styled from 'styled-components';

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic: string) => (
    <SidebarRecentItem>
      <span>#</span>
      <p>{topic}</p>
    </SidebarRecentItem>
  );

  return (
    <SidebarContainer>
      <SidebarTop>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5116AQErzDa0roV1pw/profile-displaybackgroundimage-shrink_200_800/0/1516999213444?e=1642636800&v=beta&t=kXA8KoptMklv02phKzwzVcioyQVmVaN1DJTtUgvnSQw"
          alt=""
        />
        <Avatar src={user?.profileUrl} className="sidebar__avatar">
          {user?.email[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </SidebarTop>

      <SidebarStats>
        <SidebarStat>
          <p>Who viewed you</p>
          <span>200</span>
        </SidebarStat>
        <SidebarStat>
          <p>Connections</p>
          <span>200</span>
        </SidebarStat>
      </SidebarStats>
      <SidebarBottom>
        <p>Recent</p>
        {recentItems('reactjs')}
        {recentItems('javascript')}
        {recentItems('typescript')}
        {recentItems('nextjs')}
        {recentItems('nodejs')}
        {recentItems('expressjs')}
        {recentItems('graphql')}
      </SidebarBottom>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  top: 80px;
  position: sticky;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgrey;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;
  & > img {
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }
  & > Avatar {
    margin-bottom: 10px;
  }
  & > h2 {
    font-size: 18px;
  }
  & > h4 {
    color: gray;
    font-size: 12px;
  }
`;

const SidebarStats = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgrey;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const SidebarStat = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  & > p {
    color: gray;
    font-size: 13px;
    font-weight: 600;
  }
  & > span {
    font-size: 13px;

    font-weight: bold;
    color: #0a66c2 !important;
  }
`;

const SidebarBottom = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  & > p {
    font-size: 13px;
    padding-bottom: 10px;
  }
`;

const SidebarRecentItem = styled.div`
  display: flex;
  font: 13px;
  color: gray;
  font-weight: bolder;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
  &:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
  }
  & > span {
    margin-right: 10px;
    margin-left: 5px;
  }
`;
export default Sidebar;
