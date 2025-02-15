import { Canvas } from "@react-three/fiber";
import { Text3D, Environment,Float,Text,Center } from "@react-three/drei";

const FloatingText = ({ text, position }) => {
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position}>
        <Text fontSize={0.5} material-toneMapped={false}> 
          {text}
        </Text>
      </mesh>
    </Float>
  );
};

const FloatingTextEffect = () => {
  return (
    <div className="absolute w-full h-full hidden lg:block">
      <Canvas camera={{ position: [0, 0, 5] }} className="pointer-events-none">
        <ambientLight intensity={0.5} /> 
        <directionalLight
          intensity={5}
          color="yellow"
          position={[0, 4, 20]}
          castShadow 
        />
        <Environment preset="night" />
      <Float position={[0,3,0]} floatIntensity={1} rotationIntensity={0.5} speed={2}>
        <Center>
        <Text3D font="fonts\Roboto Condensed Medium_Regular.json" size={.5} height={0.05}>
          
          <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.1}/>
        </Text3D>
        </Center>
      </Float>
      <FloatingText text="Creative" position={[-4, 1, 2]} />
      <FloatingText text="Innovative" position={[5, -0.6, 1]} />
      <FloatingText text="Dynamic" position={[3, -2, 1.6]} />
      <FloatingText text="Visionary" position={[-3, -1.4, 1]} />
      </Canvas>
    </div>
  );
};

export default FloatingTextEffect;
