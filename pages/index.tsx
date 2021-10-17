import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useCubeTexture, useFBX } from "@react-three/drei";
import { useRef } from "react";
import { useEffect } from "react";
import {
  Glitch,
  HueSaturation,
  EffectComposer,
  Scanline,
  Sepia,
} from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";

const Home: NextPage = () => {
  return (
    <div style={{ background: "black", width: "100vw", height: "100vh" }}>
      <div
        style={{
          background: "#111",
          top: "50%",
          left: "50%",
          width: "50vh",
          height: "70vh",
          marginTop: "-35vh",
          marginLeft: "-25vh",
          position: "absolute",
          borderRadius: "30vh 30vh 20px 20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            boxShadow: "inset 0 0 0 1px #666",
            margin: "3vh",
            flex: 1,
            borderRadius: "30vh 30vh 8px 8px",
          }}
        ></div>
        <div style={{ backgroundColor: "yellow" }}>MAD REALITIES SEASON 0</div>
      </div>
      <Canvas dpr={2}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
          />
          <EffectComposer>
            <Glitch
              delay={[3, 10]} // min and max glitch delay
              duration={[0.6, 1.0]} // min and max glitch duration
              strength={[0.3, 1.0]} // min and max glitch strength
              mode={GlitchMode.SPORADIC} // glitch mode
              active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
              ratio={0} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
            />
          </EffectComposer>
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
  const ref = useRef<THREE.Group>();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    ref.current!.rotation.y = a / 10;
  });
  return (
    <group ref={ref}>
      <mesh
        geometry={geometry}
        material-envMap={envMap}
        material-reflectivity={1}
        scale={8}
        position={[0, 0, -2]}
      />
    </group>
  );
}
