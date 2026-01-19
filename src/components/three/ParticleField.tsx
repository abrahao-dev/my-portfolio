"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5

      velocities[i * 3] = (Math.random() - 0.5) * 0.01
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01
    }

    return { positions, velocities }
  }, [count])

  useFrame(() => {
    if (!mesh.current) return

    const positions = mesh.current.geometry.attributes.position.array as Float32Array

    // Gentle floating animation
    for (let i = 0; i < count; i++) {
      positions[i * 3] += particles.velocities[i * 3]
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1]
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2]

      // Bounce back when going too far
      if (Math.abs(positions[i * 3]) > 5) particles.velocities[i * 3] *= -1
      if (Math.abs(positions[i * 3 + 1]) > 5) particles.velocities[i * 3 + 1] *= -1
      if (Math.abs(positions[i * 3 + 2]) > 2.5) particles.velocities[i * 3 + 2] *= -1
    }

    mesh.current.geometry.attributes.position.needsUpdate = true

    // Subtle rotation
    mesh.current.rotation.y += 0.0002
    mesh.current.rotation.x += 0.0001
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={"#0090ff"}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Particles count={150} />
          <ambientLight intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
