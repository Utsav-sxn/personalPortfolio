import React, { memo, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, Float, Environment } from "@react-three/drei";

// Memoized FloatingText Component
const FloatingText = memo(({ text, position }) => (
  <Float speed={1} rotationIntensity={1} floatIntensity={1}>
    <mesh position={position}>
      <Text fontSize={0.5} material-toneMapped={false}>
        {text}
      </Text>
    </mesh>
  </Float>
));

const FloatingTextEffect = () => {
  // Memoize text positions to avoid re-rendering
  const floatingTexts = useMemo(
    () => [
      { text: "Creative", position: [-4, 1, 2] },
      { text: "Innovative", position: [5, -0.6, 1] },
      { text: "Dynamic", position: [3, -2, 1.6] },
      { text: "Visionary", position: [-3, -1.4, 1] },
    ],
    []
  );

  return (
    <div
      className="absolute w-full h-full hidden sm:block z-10"
      style={{ overflow: "hidden" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5] }}
        className="pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight intensity={3} color="yellow" position={[0, 4, 10]} />
        <Environment preset="night" />

        {floatingTexts.map(({ text, position }, index) => (
          <FloatingText key={index} text={text} position={position} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingTextEffect;