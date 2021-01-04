import React from 'react';
import { connect } from 'react-redux';

const LanguageDetail = ({ selectedLanguage }) => {
  if (!selectedLanguage) {
    return <div>Select a Language</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title:{selectedLanguage.title}
        <br />
        Speakers:{selectedLanguage.users}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedLanguage: state.selectedLanguage };
};

export default connect(mapStateToProps)(LanguageDetail);
