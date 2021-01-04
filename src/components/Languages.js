import React from 'react';
import { connect } from 'react-redux';
import { selectLanguage } from '../actions';

const Languages = (props) => {
  const renderLanguages = () => {
    return props.languages.map((language) => {
      return (
        <div className="item" key={language.title}>
          <div className="right floated content">
            <button
              onClick={() => props.selectLanguage(language)}
              className="ui red button"
            >
              Select
            </button>
          </div>
          <div className="content">{language.title}</div>
        </div>
      );
    });
  };
  return <div className="ui divided list">{renderLanguages()}</div>;
};

const mapStateToProps = (state) => {
  return { languages: state.languages };
};

export default connect(mapStateToProps, {
  selectLanguage: selectLanguage,
})(Languages);
