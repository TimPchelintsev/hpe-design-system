import React from 'react';

import PropTypes from 'prop-types';
import { Box, Main, ResponsiveContext } from 'grommet';

import { FeedbackSection, NextContent, SideBar } from '..';
import { getNextContent, getParentPage } from '../../utils';

export const SidebarLayout = ({ title, children }) => {
  // Get parent topic details
  const parentTopic = getParentPage(title);
  const { name, color, pages } =
    typeof parentTopic !== 'undefined' ? parentTopic : {};
  const nextContent = getNextContent(title);

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <>
          <Box
            direction="row"
            // pad uses Nav pad from aries-core
            pad={{
              horizontal: size !== 'small' ? 'xlarge' : 'large',
              vertical: 'large',
            }}
            flex
          >
            <Main flex>
              {children}
              <FeedbackSection />
            </Main>
            {size !== 'small' && (
              <Box
                role="navigation"
                aria-label="Sidebar"
                fill="vertical"
                margin={{ top: 'xlarge' }}
                pad={{ top: 'large' }}
              >
                <SideBar items={pages} topic={name} />
              </Box>
            )}
          </Box>
          <NextContent color={color} nextContent={nextContent} />
        </>
      )}
    </ResponsiveContext.Consumer>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  title: PropTypes.string,
};
