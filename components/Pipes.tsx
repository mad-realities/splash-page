import { Canvas, useThree } from "@react-three/fiber";
import { Bloom } from "@react-three/postprocessing";
import React, { useEffect } from "react";
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
  useEffect(() => {
    pipes(renderer);
  }, []);
  return null;
};
