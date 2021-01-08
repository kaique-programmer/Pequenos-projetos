import React from 'react';

import { ModelWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName="Model One"
              overlayNode={
                <DefaultOverlayContent
                  label="Model One"
                  description="Order Online for delivery"
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelWrapper>
    </Container>
  );
};

export default Page;
