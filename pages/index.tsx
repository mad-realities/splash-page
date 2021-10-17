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
  Bloom,
} from "@react-three/postprocessing";
import { GlitchMode, BlendFunction, Resizer, KernelSize } from "postprocessing";

const Home: NextPage = () => {
  return (
    <div style={{ background: "black", width: "100vw", height: "100vh" }}>
      <div
        style={{
          background: "url(glitter.gif)",
          backgroundSize: "cover",
          opacity: 1,
          filter: "blur(10px)",
          mixBlendMode: "screen",
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div
        style={{
          backgroundColor: "#0d1218",
          top: "50%",
          left: "50%",
          width: "50vh",
          height: "70vh",
          marginTop: "-35vh",
          marginLeft: "-25vh",
          position: "absolute",
          borderRadius: "30vh 30vh 10px 10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "url(glitter.gif)",
            mixBlendMode: "screen",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <Canvas dpr={2} style={{ position: "absolute" }}>
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enablePan={false}
              enableZoom={false}
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
              <Bloom
                intensity={0.5} // The bloom intensity.
                blurPass={undefined} // A blur pass.
                width={Resizer.AUTO_SIZE} // render width
                height={Resizer.AUTO_SIZE} // render height
                kernelSize={KernelSize.LARGE} // blur kernel size
                luminanceThreshold={0.5} // luminance threshold. Raise this value to mask out darker elements in the scene.
                luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              boxShadow: "inset 0 0 0 1px #fff2bd",
              margin: "2vh",
              flex: 1,
              borderRadius: "30vh 30vh 8px 8px",
              overflow: "hidden",
            }}
          ></div>
          <div
            style={{
              color: "#fff2bd",
              fontFamily: "Pilowlava",
              fontSize: "5vh",
              textTransform: "uppercase",
              padding: "0 2vh 2vh 2vh",
              position: "relative",
            }}
          >
            Mad Realities
            <div
              style={{
                fontFamily: "system-ui",
                fontSize: "1vh",
                position: "absolute",
                right: "2vh",
                textAlign: "right",
                bottom: "2vh",
                fontWeight: 600,
              }}
            >
              SEASON 0 PASS
              <br />
              LIMITED AVAILABILITY
            </div>
          </div>
          <div
            style={{
              fontFamily: "system-ui",
              padding: "2vh",
              backgroundColor: "#d39bff",
              color: "#490081",
              fontWeight: 600,
              fontSize: "3vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ borderTop: "1px solid", paddingTop: "0.5vh" }}>
              UNIQUE ¹⁄₁
            </span>
            <div
              style={{
                fontSize: "0.5vh",
                position: "absolute",
                width: "14vh",
                overflow: "hidden",
                right: "2vh",
                textAlign: "justify",
                bottom: "2vh",
                fontWeight: 400,
                letterSpacing: -0.1,
              }}
            >
              Put some random text in here, not sure if it needs to say anything
              or if it is just cool to have little tiny text everywhere. It
              kinda seems like the latter~
            </div>
          </div>
        </div>
      </div>
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
    ref.current!.rotation.y = (Math.sin(a) - 0.5) / 4;
  });
  return (
    <group ref={ref}>
      <mesh
        geometry={geometry}
        material-envMap={envMap}
        material-reflectivity={1}
        scale={13}
        position={[0, 0, -3.5]}
        rotation={[0.2, 0, 0]}
      />
    </group>
  );
}
