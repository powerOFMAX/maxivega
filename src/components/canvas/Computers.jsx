import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./scene.gltf")
  // const computer = useGLTF("./escenarioPagina1.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        // scale={isMobile ? 0.7 : 0.75}
        scale={isMobile ? 0.6 : 1.3}
        position={isMobile ? [1.5, -2, 0.5] : [1.5, -2, -1]}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
        rotation={[0.05, 0.49, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)")

    // set the initial value of isMobile
    setIsMobile(mediaQuery.matches)

    //define Callback function to handle mediaquery
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* maxPolarAngle and minPolarAngle are liming the movement around a specific angle*/}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          //to 45 degrees
          minAzimuthAngle={-Math.PI / 4 + Math.PI / 2.6} // Adjust the minimum allowed angle
          maxAzimuthAngle={Math.PI / 4 + Math.PI / 3}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
