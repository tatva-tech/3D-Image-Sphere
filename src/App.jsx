import { Canvas } from '@react-three/fiber';
import './App.css'
import './style.css';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './scene';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

function App() {

  return (
    <Canvas camera={{ fov: 30 }}>
      <OrbitControls />
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom 
          mipmapBlur
          intensity={2}
          luminanceThreshold={0.3}
          luminanceSmoothing={0}
        />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
  )
}

export default App;