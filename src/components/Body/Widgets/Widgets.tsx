import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styled from 'styled-components';

function Widgets() {
  const newsArticle = (heading: string, subtitle: string) => (
    <WidgetsArticle>
      <WidgetsArticleLeft className="">
        <FiberManualRecordIcon />
      </WidgetsArticleLeft>

      <WidgetsArticleRight>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </WidgetsArticleRight>
    </WidgetsArticle>
  );
  return (
    <WidgetsContainer>
      <WidgetsHeader>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </WidgetsHeader>
      {newsArticle(
        'What is Lorem Ipsum?',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      )}
      {newsArticle(
        'Where does it come from?',
        'Contrary to popular belief, Lorem Ipsum is not simply random text'
      )}
    </WidgetsContainer>
  );
}

const WidgetsContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  top: 80px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgrey;
  height: fit-content;
  padding-bottom: 10px;
`;

const WidgetsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  &:hover {
    background-color: whitesmoke;
  }

  & > h2 {
    font-size: 16px;
    font-weight: 400;
  }
`;

const WidgetsArticle = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;
`;

const WidgetsArticleLeft = styled.div`
  color: #0177b7;
  margin-right: 5px;
  & > .MuiSvgIcon-root {
    font-size: 15px;
  }
`;

const WidgetsArticleRight = styled.div`
  flex: 1;
  & > h4 {
    font-size: 14px;
  }
  & > p {
    font-size: 12px;
    color: gray;
  }
`;
export default Widgets;
