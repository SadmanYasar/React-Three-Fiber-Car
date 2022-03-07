import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  MeshReflectorMaterial, 
  Environment, 
  Stage, 
  PerspectiveCamera, 
} from '@react-three/drei'
import Ferrari from './components/Ferrari'
import React from 'react'
import { CameraControls } from './components/camera-controls';
//import { Vector3 } from 'three'

const Camera = () => {
  
  return(
    <PerspectiveCamera 
        makeDefault
        fov={45}
        near={0.1}
        far={100}
        position={[0, 1, 10]}
    />
  )
}

const App = () => {
  const cameraControls = useRef<CameraControls | null>(null);
  
  return (
    <>
      <Canvas dpr={[1, 2]} shadows={true} >
        <Camera />
        <CameraControls ref={cameraControls} />
        <color attach="background" args={['#101010']} />
        <fog attach="fog" args={['#101010', 10, 20]} />
        <Suspense fallback={null}>
          <Environment path="/assets/Textures" />
          <Stage 
            adjustCamera={false} 
            environment={null} 
            intensity={1} 
            contactShadow={false} 
            shadowBias={-0.0015}>
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
      </Canvas>
      <div style={{ position: 'absolute', top: '0' }}>
				<button
					type="button"
					onClick={async () => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            cameraControls!.current!.enabled = false
            await cameraControls.current?.setPosition(1, 0.6, -0.1, true)
            await cameraControls.current?.setPosition(0, 1, 5, true)
            await cameraControls.current?.setTarget(0, 0, 0, true)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            cameraControls!.current!.enabled = true
					}}
				>
					exit car
				</button>
        {/* <button
					type="button"
					onClick={() => {
            console.log(cameraControls.current?.getPosition(new Vector3()))
            console.log(cameraControls.current?.getTarget(new Vector3()))
          }}
				>
					Get pos
				</button> */}
        <button
					type="button"
					onClick={async () => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            cameraControls!.current!.enabled = false
            await cameraControls.current?.setTarget(0.3, 0.6, 0, true)
            await cameraControls.current?.setPosition(1, 0.6, -0.1, true)
            await cameraControls.current?.setPosition(0.3, 0.6, -0.2, true)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            cameraControls!.current!.enabled = true
          }}
				>
					Go inside
				</button>
			</div>
    </>
  )
}

export default App

