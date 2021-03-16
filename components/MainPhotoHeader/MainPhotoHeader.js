import React from 'react';
import PropTypes from 'prop-types';

import { Box, Heading } from 'ui-kit';
import { StyledImage } from './MainPhotoHeader.styles';

function MainPhotoHeader({ src, title, subtitle, summary, overlay } = {}) {
  return (
    <Box position="relative">
      <StyledImage as="img" src={src} name="main-photo-header" />
      {overlay && (
        <Box
          width="100%"
          height="100%"
          top="0"
          left="0"
          position="absolute"
          background={overlay}
        />
      )}
      <Box position="absolute" left="97px" bottom="73px" maxWidth="440px">
        {subtitle && (
          <Heading
            color="neutrals.100"
            variant="h2"
            opacity="50%"
            fontWeight="800"
          >
            {subtitle}
          </Heading>
        )}
        {title && (
          <Heading
            color="neutrals.100"
            variant="h1"
            fontWeight="800"
            textTransform="uppercase"
          >
            {title}
          </Heading>
        )}
        {summary && (
          <Heading
            color="neutrals.100"
            variant="h3"
            fontWeight="700"
            maxWidth="360px"
          >
            {summary}
          </Heading>
        )}
      </Box>
    </Box>
  );
}

MainPhotoHeader.propTypes = {
  src: PropTypes.string.isRequired,
  overlay: PropTypes.string,
  content: PropTypes.node,
};

export default MainPhotoHeader;
