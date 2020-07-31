import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import image1 from '../assets/images/andrew-johnson-ULKR-8CtHmM-unsplash.jpg';
import image2 from '../assets/images/providence-doucet-FjwtL3YSZ9U-unsplash.jpg';
import ChoiceCard from '../components/ChoiceCard';

import useChoiceBoardModel from './useChoiceBoardModel';

const H3 = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #fff;
`;

function ChoiceBoard() {
  const { t } = useTranslation();
  const { selectedItems, appendSelection } = useChoiceBoardModel();

  const commonOnClick = (_, card: never) => {
    appendSelection(card);
  };

  return (
    <Suspense fallback="loading">
      <section className="container">
        <div className="row vh-100">
          <div className="col-12 my-auto">
            <div className="row text-center">
              <div className="col-lg-12 m-4">
                <H3>{t('Which one would you like to choose?')} </H3>
   h
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-6 mb-4">
                <ChoiceCard
                  id="card1"
                  title={t('Choice 1')}
                  paragraph={t("That's a good choice!")}
                  imageURL={image1}
                  onClick={commonOnClick}
                  ariaLabel="light pink rose"
                />
              </div>
              <div className="col-lg-6 mb-4">
                <ChoiceCard
                  id="card2"
                  title={t('Choice 2')}
                  paragraph={t("Nope, that's a good choice!")}
                  imageURL={image2}
                  onClick={commonOnClick}
                  ariaLabel="pink rose in full bloom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default ChoiceBoard;
