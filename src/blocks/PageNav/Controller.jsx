import React from "react";
import PageNav from "./PageNav";
import PropTypes from "prop-types";

const Controller = ({ isPageComplete, saveAndContinue, back, page }) => {
  return (
    <PageNav>
      <PageNav.ButtonRow>
        {page !== 1 && (
          <PageNav.Button onClick={back && back}>Back</PageNav.Button>
        )}
        {page !== 3 && (
          <PageNav.Button
            last={page === 1}
            disabled={isPageComplete && !isPageComplete()}
            onClick={saveAndContinue}
          >
            Save and Continue
          </PageNav.Button>
        )}
      </PageNav.ButtonRow>
      <PageNav.DotRow>
        <PageNav.Dot highlight={page === 1} />
        <PageNav.Dot highlight={page === 2} />
        <PageNav.Dot highlight={page === 3} />
      </PageNav.DotRow>
    </PageNav>
  );
};

Controller.propTypes = {
  isPageComplete: PropTypes.func,
  saveAndContinue: PropTypes.func.isRequired,
  back: PropTypes.func,
  page: PropTypes.number.isRequired
};

export default Controller;
