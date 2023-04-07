import styled from '@emotion/styled';
import React from 'react'
import { Canvas } from "react-three-fiber";
import Box from './Box';  
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
export default function Home() {

  return (
    <>
    <Wrapper className='Home'>
    <Canvas className="canvas" >
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-2,5,2]} intensity={1}/>
      <Suspense fallback={null}>
      <Box/>
      </Suspense>
    </Canvas>
    </Wrapper>
    </>
  );

}
const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height:500px;
    background:white
  }
`;
