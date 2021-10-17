import type { NextPage } from "next";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useCubeTexture, useFBX } from "@react-three/drei";
import { useRef } from "react";
import { Glitch, EffectComposer, Bloom } from "@react-three/postprocessing";
// @ts-ignore
import { GlitchMode, Resizer, KernelSize } from "postprocessing";
import "vanilla-tilt";

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
          width: "50vh",
          height: "70vh",
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-35vh",
          marginLeft: "-25vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#0d1218",
            width: "50vh",
            height: "70vh",
            borderRadius: "30vh 30vh 10px 10px",
            overflow: "hidden",
            position: "relative",
          }}
          data-tilt
          data-tilt-glare-prerender
          data-tilt-glare
          data-tilt-reverse
          data-tilt-max-glare="0.5"
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
                <Glitch />
                <Bloom intensity={0.5} luminanceThreshold={0.5} />
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
                Put some random text in here, not sure if it needs to say
                anything or if it is just cool to have little tiny text
                everywhere. It kinda seems like the latter~
              </div>
            </div>
          </div>
          <div
            className="js-tilt-glare"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <div
              className="js-tilt-glare-inner"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                pointerEvents: "none",
                backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
                transform: "rotate(180deg) translate(-50%, -50%)",
                transformOrigin: "0% 0%",
                width: "100vh",
                height: "140vh",
                opacity: "0",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

function Scene() {
  const {
    // @ts-ignore
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
