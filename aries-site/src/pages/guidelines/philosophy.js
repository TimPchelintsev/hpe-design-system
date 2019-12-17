import React from 'react';
import { ContentSection, PageLayout, Subsection } from '../../layouts';
import { SubsectionText } from '../../components';

const title = 'Philosophy';

const Philosophy = () => (
  <PageLayout title={title}>
    <ContentSection>
      <Subsection level={1} name={title} topic="Guidelines">
        <SubsectionText>
          The HPE Design System is an ethos of generosity and community. It
          enables experiences to be crafted with uncompromising integrity.
        </SubsectionText>
        <SubsectionText size="medium">
          The HPE Design System contians an open-source library of elements
          consisting of working code, best practices, design resources,
          human-centered guidelines, and a vibrant community of contributors.
        </SubsectionText>
      </Subsection>
    </ContentSection>
    <ContentSection>
      <Subsection name="Ethos">
        <SubsectionText>
          The HPE Design System’s ethos is rooted and thrives in an environment
          of generosity and community. It seeks to share and invite
          conversations that are inclusive, as well as to boldly express the
          cultural DNA of Hewlett Packard Enterprise. Embracing the courage and
          commitment to learn, share and serve with uncompromising integrity,
          the HPE Design System will advance the way people live and work.
        </SubsectionText>
      </Subsection>
      <Subsection name="Generosity">
        <SubsectionText>
          Living generously requires understanding the needs of others. The HPE
          Design System is crafted upon user research and listening to customers
          first. We can then bring to bear the experiences that generously
          provide for the needs of people and their work. It requires a humility
          and position that is ready to serve others and continues to relentless
          pursue excellence in its craft for the sake of others.
        </SubsectionText>
      </Subsection>
      <Subsection name="Integrated but Composable">
        <SubsectionText>
          Partnering in community allows the HPE Design System to be built upon
          the energy and empowerment of collaboration. The community provides
          accountability, conversation and relationships that are the crucible
          for generating innovation. Community is the fuel for the fires of
          creativity and allows the Design System to expand and thrive. Best of
          all, it’s a great place to find support and celebrate success!
        </SubsectionText>
      </Subsection>
    </ContentSection>
  </PageLayout>
);

export default Philosophy;
