import React from 'react';
import { Container } from 'react-bootstrap';
import HomeClosingBanner from '../components/HomeClosingBanner';
import DebrisMap from '../components/DebrisMap';

const LandingOrganization = () => (
  <Container id="landing-organization-page" className="p-1 d-grid">
    <DebrisMap />
    <HomeClosingBanner />
  </Container>
);

export default LandingOrganization;
