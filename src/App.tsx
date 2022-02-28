import { Suspense, /* useEffect */useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  MeshReflectorMaterial, 
  Environment, 
  Stage, 
  /* OrbitControls, */
  PerspectiveCamera, 
} from '@react-three/drei'
import Ferrari from './components/Ferrari'
import { folder, useControls } from 'leva'
import React from 'react'
import { CameraControls } from './components/camera-controls';

const DEG45 = Math.PI / 4;

const Camera = () => {
  const {posX ,posY, posZ} = useControls({
    position: folder({
      posX: { value: 0, min: 0, max: 300, step: 1 },
      posY: { value: 1, min: 0, max: 300, step: 1 },
      posZ: { value: 15, min: 0, max: 300, step: 1 },
    }),
  })

  return(
    <PerspectiveCamera 
        makeDefault
        fov={45}
        near={0.1}
        far={100}
        position={[posX, posY, posZ]}
    />
  )
}

/* const MoveToCar = (controlRef: CameraControls | null) => {
  useEffect(() => {
    controlRef?.moveTo
  }, [])

  return null
} */

const App = () => {
  const cameraControls = useRef<CameraControls | null>(null);
  return (
    <>
      <Canvas dpr={[1, 2]} shadows={true} mode="concurrent">
        <CameraControls ref={cameraControls} />
        <Camera />
        <color attach="background" args={['#101010']} />
        <fog attach="fog" args={['#101010', 10, 20]} />
        <Suspense fallback={null}>
          <Environment path="/assets/Textures" />
          <Stage  adjustCamera={false} environment={null} intensity={1} contactShadow={false} shadowBias={-0.0015}>
            <Ferrari />
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5} />
          </mesh>
        </Suspense>
        {/* <OrbitControls
          makeDefault
          enableDamping
          enablePan={false}
          maxPolarAngle={17 * Math.PI / 36}
          /> */}
      </Canvas>
      <div style={{ position: 'absolute', top: '0' }}>
				<button
					type="button"
					onClick={() => {
						cameraControls.current?.rotate(DEG45, 0, true);
					}}
				>
					rotate theta 45deg
				</button>
				<button
					type="button"
					onClick={() => {
						cameraControls.current?.reset(true);
					}}
				>
					reset
				</button>
			</div>
    </>
  )
}

export default App

