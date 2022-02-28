/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Iron Minecart2 (https://sketchfab.com/iron_minecart2)
license: CC-BY-ND-4.0 (http://creativecommons.org/licenses/by-nd/4.0/)
source: https://sketchfab.com/3d-models/ferrari-348-tb-low-poly-54bb2829f76d4320b87bbcd667a28bd3
title: Ferrari 348 TB Low Poly
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Headlights_Material001_0: THREE.Mesh
    Headlights_Material003_0: THREE.Mesh
    Body_Material001_0: THREE.Mesh
    Body_Material006_0: THREE.Mesh
    Body_Material002_0: THREE.Mesh
    Body_Material003_0: THREE.Mesh
    Body_Material007_0: THREE.Mesh
    Body_Material008_0: THREE.Mesh
    Body_Material005_0: THREE.Mesh
    Rearights_Material003_0: THREE.Mesh
    Rearights_Material004_0: THREE.Mesh
    WheelR_Material002_0: THREE.Mesh
    WheelR_Material005_0: THREE.Mesh
    Body3_Material005_0: THREE.Mesh
    Body3_Material002_0: THREE.Mesh
    Body5_Material006_0: THREE.Mesh
    Steering_Material006_0: THREE.Mesh
    Body4_Material005_0: THREE.Mesh
    Body4_Material006_0: THREE.Mesh
    Carseat_Material007_0: THREE.Mesh
    Body2_Material009_0: THREE.Mesh
    WheelFL_Material002_0: THREE.Mesh
    WheelFL_Material005_0: THREE.Mesh
    WheelFR_Material002_0: THREE.Mesh
    WheelFR_Material005_0: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[];
}

type ActionName = 'Headlights'

export default function Ferrari({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/ferrari.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)

  const handleClick = () => {
    actions.Headlights?.stop()
    actions.Headlights?.play()
  }

  useEffect(() => {
    actions.Headlights?.setLoop(1, 1)
    actions.Headlights?.play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>       
          <group name="Headlights" onClick={handleClick} position={[-113.89, 41.32, 0]} rotation={[-Math.PI / 2, -0.49, 0]} scale={100}>
            <mesh
              geometry={nodes.Headlights_Material001_0.geometry}
              material={nodes.Headlights_Material001_0.material}
            />
            <mesh
              geometry={nodes.Headlights_Material003_0.geometry}
              material={nodes.Headlights_Material003_0.material}
            />
          </group>
          <group position={[-0.67, 590.39, -100.55]} rotation={[1.89, 0.88, -2.05]} scale={[100, 100, 100]}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[735.89, 495.83, 692.58]} rotation={[-Math.PI, 0.76, 2.68]} scale={[100, 100, 100]} />
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Body_Material001_0.geometry} material={nodes.Body_Material001_0.material} />
            <mesh geometry={nodes.Body_Material006_0.geometry} material={nodes.Body_Material006_0.material} />
            <mesh geometry={nodes.Body_Material002_0.geometry} material={nodes.Body_Material002_0.material} />
            <mesh geometry={nodes.Body_Material003_0.geometry} material={nodes.Body_Material003_0.material} />
            <mesh geometry={nodes.Body_Material007_0.geometry} material={nodes.Body_Material007_0.material} />
            <mesh geometry={nodes.Body_Material008_0.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Body_Material005_0.geometry} material={nodes.Body_Material005_0.material} />
          </group>
          <group position={[-0.96, 0, 0]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={22.59}>
            <mesh geometry={nodes.Rearights_Material003_0.geometry} material={nodes.Rearights_Material003_0.material} />
            <mesh geometry={nodes.Rearights_Material004_0.geometry} material={materials['Material.004']} />
          </group>
          <group position={[-321.86, 19.97, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.WheelR_Material002_0.geometry} material={nodes.WheelR_Material002_0.material} />
            <mesh geometry={nodes.WheelR_Material005_0.geometry} material={nodes.WheelR_Material005_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={100}>
            <mesh geometry={nodes.Body3_Material005_0.geometry} material={nodes.Body3_Material005_0.material} />
            <mesh geometry={nodes.Body3_Material002_0.geometry} material={nodes.Body3_Material002_0.material} />
          </group>
          <group position={[0, 0, 5.75]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Body5_Material006_0.geometry} material={nodes.Body5_Material006_0.material} />
          </group>
          <group position={[-279.38, 44.23, 26.29]} rotation={[-Math.PI / 2, 0, 0]} scale={7.93}>
            <mesh geometry={nodes.Steering_Material006_0.geometry} material={nodes.Steering_Material006_0.material} />
          </group>
          <group position={[-273.27, 25.47, 3.5]} rotation={[-1.31, 0, 0]} scale={0.84}>
            <mesh geometry={nodes.Body4_Material005_0.geometry} material={nodes.Body4_Material005_0.material} />
            <mesh geometry={nodes.Body4_Material006_0.geometry} material={nodes.Body4_Material006_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={30.11}>
            <mesh geometry={nodes.Carseat_Material007_0.geometry} material={nodes.Carseat_Material007_0.material} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Body2_Material009_0.geometry} material={materials['Material.009']} />
          </group>
          <group position={[-321.86, 19.97, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.WheelFL_Material002_0.geometry} material={nodes.WheelFL_Material002_0.material} />
            <mesh geometry={nodes.WheelFL_Material005_0.geometry} material={nodes.WheelFL_Material005_0.material} />
          </group>
          <group position={[-321.86, 19.97, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.WheelFR_Material002_0.geometry} material={nodes.WheelFR_Material002_0.material} />
            <mesh geometry={nodes.WheelFR_Material005_0.geometry} material={nodes.WheelFR_Material005_0.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ferrari.glb')