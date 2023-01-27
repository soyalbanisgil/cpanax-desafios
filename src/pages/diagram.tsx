import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import Flow from '../components/Flow/Flow';
import Nav from '../components/Nav/Nav';

const Diagram = () => {
  return (
    <>
      <Nav />
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </>
  );
};

export default Diagram;
