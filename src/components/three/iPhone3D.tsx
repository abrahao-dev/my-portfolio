"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { useRef, Suspense, useMemo } from 'react'
import * as THREE from 'three'

function IPhoneModel() {
  const { scene } = useGLTF('/apple-iphone-17-pro-max/source/iphone17promax.glb')
  const modelRef = useRef<THREE.Group>(null)

  // Clone the scene once using useMemo to avoid recreating on every render
  const clonedScene = useMemo(() => scene.clone(), [scene])

  useFrame(() => {
    if (modelRef.current) {
      // Subtle idle animation
      modelRef.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={modelRef}>
      <primitive object={clonedScene} scale={1400} position={[0, 0, 0]} />
    </group>
  )
}

// Preload the model
useGLTF.preload('/apple-iphone-17-pro-max/source/iphone17promax.glb')

export default function IPhone3D() {
  return (
    <div
      className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
      style={{ touchAction: 'pan-y' }}
    >
      <Canvas
        camera={{ position: [0, 0, 500], fov: 45, near: 1, far: 2000 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        style={{ touchAction: 'none' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting setup */}
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <pointLight position={[0, 100, 100]} intensity={1} color="#ffffff" />

          {/* OrbitControls for full 360° rotation on both desktop and mobile */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            enableDamping={true}
            dampingFactor={0.1}
            rotateSpeed={0.8}
            touches={{
              ONE: THREE.TOUCH.ROTATE,
              TWO: THREE.TOUCH.ROTATE
            }}
          />

          <IPhoneModel />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
