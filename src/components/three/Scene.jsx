// src/components/three/Scene.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame }    from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

function RotatingBox() {
  const mesh = useRef();

  // ↳ This hook now lives in a child of <Canvas>
  useFrame((_, delta) => {
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta * 0.5;
  });

  return (
    <Box ref={mesh} position={[0, 0, 0]}>
      <meshStandardMaterial attach="material" color="orange"/>
    </Box>
  );
}

export default function Scene() {
  return (
    <Canvas
      style={{ display: 'block', width: '100%', height: '100%' }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} />

      {/* RotatingBox is now a proper child of Canvas */}
      <RotatingBox />

      <OrbitControls />
    </Canvas>
  );
}
