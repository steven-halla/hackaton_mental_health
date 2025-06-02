import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/header';



export const BioPage = () => {
  const page = "Bio";

  return (
      <>
          <Header />
          <div>
              <p>Hi there this is the: community {page} example</p>
          </div>
      </>
  )
}

