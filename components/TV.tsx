import { Environment, Text, useAspect, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Box, Flex } from "@react-three/flex";
import React, { useEffect, useRef, useState } from "react";
import { Color, TextureLoader, Vector3 } from "three";
import BadTVEffect from "./BadTVEffect";

const TV = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2], zoom: 1 }}>
      <React.Suspense fallback={null}>
        <Scene />
      </React.Suspense>
      <BadTVEffect staticAmount={0.5} />
    </Canvas>
  );
};

export default TV;

const Scene = () => {
  const texture = useTexture("SMPTE_Color_Bars.png");
  const color = new Color("black");
  const three = useThree();
  three.scene.background = texture;
  const [width, height] = useAspect(three.size.width, three.size.height);
  const [channel, setChannel] = useState(0);
  useEffect(() => {
    three.scene.background = color;
    const timeout = setTimeout(() => (three.scene.background = texture), 1000);
    return () => clearTimeout(timeout);
  }, [channel]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        setChannel((channel) => (channel + 1) % 80);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <Flex
      width={width}
      height={height}
      justifyContent="flex-start"
      alignItems="flex-end"
      flexDirection="row"
      centerAnchor
    >
      <Box width="60" height="40" centerAnchor>
        <Text
          color="#00FF00"
          fontSize={0.3}
          font="/Steps-Mono.otf"
          outlineWidth={0.02}
          outlineColor="black"
          anchorY="top-baseline"
        >
          CH
        </Text>
      </Box>
      <Box width="50" height="40" centerAnchor>
        <Text
          color="#00FF00"
          fontSize={0.35}
          font="/Steps-Mono.otf"
          outlineWidth={0.02}
          outlineColor="black"
          anchorY="top-baseline"
        >
          {channel + 3 < 10 ? "0" : ""}
          {channel + 3}
        </Text>
      </Box>
    </Flex>
  );
};
