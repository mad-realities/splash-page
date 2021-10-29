import frag from './frag.glsl';
import vert from './vert.glsl';

const badTVStatic = {
  uniforms: {
    tDiffuse: { type: 't', value: null },
    time: { type: 'f', value: 10 },
    amount: { type: 'f', value: 10 },
    size: { type: 'f', value: 4.0 },
  },
  vertexShader: vert,
  fragmentShader: frag,
};

export default badTVStatic;
