import React, { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader";
import { FilmShader } from "three/examples/jsm/shaders/FilmShader";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader";

import BadTV from "../shaders/badTV";
import BadTVStatic from "../shaders/badTVStatic";

extend({
  EffectComposer,
  RenderPass,
  ShaderPass,
});

const BadTVEffect = ({ staticAmount = 0.1 }: { staticAmount?: number }) => {
  const { gl, scene, camera } = useThree();
  const composer = useRef<EffectComposer>();
  const shaderRef = useRef<ShaderPass>();
  const staticRef = useRef<ShaderPass>();
  const scanlineRef = useRef<ShaderPass>();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (shaderRef.current) {
      shaderRef.current.uniforms.time.value = a + (Math.random() < 0.1 ? 5 : 0);
      shaderRef.current.uniforms.rollSpeed.value = Math.random() < 0.05 ? 1 : 0;
    }
    if (staticRef.current) {
      staticRef.current.uniforms.time.value = a;
    }
    if (scanlineRef.current) {
      scanlineRef.current.uniforms.time.value = a;
    }
    composer.current?.render();
  }, 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <shaderPass
        uniforms-nIntensity-value={0.4}
        uniforms-sIntensity-value={0.9}
        uniforms-sCount-value={800}
        uniforms-grayscale-value={false}
        ref={scanlineRef}
        attachArray="passes"
        args={[FilmShader]}
      />
      <shaderPass
        uniforms-distortion-value={1.0}
        uniforms-distortion2-value={1.0}
        uniforms-speed-value={0.3}
        uniforms-rollSpeed-value={0.01}
        ref={shaderRef}
        attachArray="passes"
        args={[BadTV]}
      />
      <shaderPass
        uniforms-amount-value={0.005}
        uniforms-angle-value={0.0}
        attachArray="passes"
        args={[RGBShiftShader]}
      />
      <shaderPass
        uniforms-size-value={2}
        uniforms-amount-value={staticAmount}
        ref={staticRef}
        attachArray="passes"
        args={[BadTVStatic]}
      />
      <shaderPass attachArray="passes" args={[CopyShader]} />
    </effectComposer>
  );
};

export default BadTVEffect;
