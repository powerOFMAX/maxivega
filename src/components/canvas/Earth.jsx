import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

const Earth = () => {
  const earthRef = useRef(null)
  const earth = useGLTF(`${import.meta.env.BASE_URL}planet/earth.glb`)

  useFrame((_, delta) => {
    if (!earthRef.current) return
    earthRef.current.rotation.y += delta * 0.35
  })

  return (
    <group ref={earthRef}>
      <primitive object={earth.scene} scale={1.25} position={[0, -0.03, 0]} />
    </group>
  )
}
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      camera={{
        fov: 38,
        near: 0.1,
        far: 200,
        position: [0, 0.15, 7],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={5.8}
          maxDistance={8.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(Math.PI * 2) / 3}
        />
        <Earth />
        <ambientLight intensity={2} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas
