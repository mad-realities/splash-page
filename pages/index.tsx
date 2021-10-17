import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useCubeTexture, useFBX } from "@react-three/drei";

const Home: NextPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <pointLight intensity={1} position={[0, 6, 0]} />
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;

function Scene() {
  const {
    children: [{ geometry }],
  } = useFBX("rose.fbx");
  const envMap = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "/" }
  );
  return (
    <mesh
      geometry={geometry}
      material-envMap={envMap}
      material-reflectivity={1}
      scale={8}
    />
  );
}
