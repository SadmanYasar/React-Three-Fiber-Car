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
import { folder, useControls } from 'leva'
import { Vector3 } from 'three'

const DEG45 = Math.PI / 4;

const Camera = () => {
  const {posX ,posY, posZ} = useControls({
    position: folder({
      posX: { value: 0, min: 0, max: 300, step: 1 },
      posY: { value: 1, min: 0, max: 300, step: 1 },
      posZ: { value: 5, min: 0, max: 300, step: 1 },
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

const App = () => {
  const cameraControls = useRef<CameraControls | null>(null);
  
  return (
    <>
      <Canvas dpr={[1, 2]} shadows={true} >
        <CameraControls ref={cameraControls} />
        <Camera />
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
        <button
					type="button"
					onClick={async () => {
            //await cameraControls.current?.setPosition(0.25,0.7,0, true)
            await cameraControls.current?.rotate(Math.PI, 0, true)
          }}
				>
					Rotate 180
				</button>
        <button
					type="button"
					onClick={async () => {
            //await cameraControls.current?.setLookAt(0.3, 0.6, -0.3, 0.3, 0.6, -0.3, true)
            //await cameraControls.current?.setLookAt(0.3, 0.6, -0.3, 0.3, 0.6, -0.3, true)
            await cameraControls.current?.setTarget(0.3, 0.6, -0.3, true)
            await cameraControls.current?.setPosition(0.3, 0.6, -0.3, true)
            await cameraControls.current?.rotateAzimuthTo(Math.PI, true)
            //cameraControls.current?.setOrbitPoint(0, 0, 0)
          }}
				>
					Move
				</button>
        <button
					type="button"
					onClick={() => {
            console.log(cameraControls.current?.getPosition(new Vector3()))
          }}
				>
					Get pos
				</button>
        <button
					type="button"
					onClick={async () => {
            await cameraControls.current?.setTarget(0.3, 0.6, 0, true)
            await cameraControls.current?.setPosition(1, 0.6, -0.1, true)
            await cameraControls.current?.setPosition(0.3, 0.6, -0.1, true)
            //await cameraControls.current?.setTarget(0.3, 0.6, 0, true)
          }}
				>
					set
				</button>
			</div>
    </>
  )
}

export default App

