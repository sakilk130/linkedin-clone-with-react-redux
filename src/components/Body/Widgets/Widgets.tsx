import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading: string, subtitle: string) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        'What is Lorem Ipsum?',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      )}
      {newsArticle(
        'Where does it come from?',
        'Contrary to popular belief, Lorem Ipsum is not simply random text'
      )}
    </div>
  );
}

export default Widgets;
