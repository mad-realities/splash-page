import { Canvas, useThree } from "@react-three/fiber";
import React from "react";
import pipes from "../utils/pipes";

const Pipes = () => {
  return (
    <Canvas>
      <React.Suspense fallback={null}>
        <Scene />
      </React.Suspense>
    </Canvas>
  );
};

export default Pipes;

const Scene = () => {
  const renderer = useThree();
  pipes(renderer);
  return null;
};
