import React from 'react';
import { Header } from '../components/header';

export const CommunityPage = () => {
  const page = "Community";

  return (
    <>
      <Header />
      <div>
          <p>Hi there this is the: community {page} example</p>
      </div>
    </>
  )
}
