import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// 3D Sun Model Component
const Sun = () => {
  const sunRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/sun.glb');

  useFrame(({ clock }) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={sunRef} position={[0, 0, 0]}>
      <primitive object={scene} scale={[0.5, 0.5, 0.5]} />
    </group>
  );
};

// Star Field Component
const StarField = () => {
  const starsRef = useRef<THREE.Points>(null);
  
  const starsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    
    for (let i = 0; i < starCount; i++) {
      // Random positions in a large sphere
      const radius = 200 + Math.random() * 300;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random star colors (white, blue, yellow, red)
      const colorChoices = [
        [1, 1, 1],    // White
        [0.8, 0.9, 1], // Blue-white
        [1, 0.9, 0.8], // Yellow-white
        [1, 0.8, 0.8], // Red-white
        [0.9, 0.9, 1], // Light blue
      ];
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
      
      // Random sizes
      sizes[i] = Math.random() * 2 + 0.5;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    return geometry;
  }, []);
  
  const starMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
  }, []);
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      // Very slow rotation for stars
      starsRef.current.rotation.y += 0.0001;
    }
  });
  
  return (
    <points ref={starsRef} geometry={starsGeometry} material={starMaterial} />
  );
};

// Orbital Path Component
const OrbitalPath = ({ radius, color = "#ffffff", opacity = 0.1 }: { radius: number; color?: string; opacity?: number }) => {
  return (
    <mesh rotation-x={Math.PI / 2}>
      <ringGeometry args={[radius - 0.1, radius + 0.1, 64]} />
      <meshBasicMaterial 
        color={color}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Stylized Planet Component
const Planet = ({ 
  position, 
  size, 
  color, 
  orbitRadius, 
  speed, 
  name,
  isMobile,
  startAngle = 0
}: {
  position: [number, number, number];
  size: number;
  color: string;
  orbitRadius: number;
  speed: number;
  name: string;
  isMobile: boolean;
  startAngle?: number;
}) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      const time = clock.getElapsedTime();
      const angle = startAngle + time * speed;
      orbitRef.current.position.x = Math.cos(angle) * orbitRadius;
      orbitRef.current.position.z = Math.sin(angle) * orbitRadius;
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef} position={position}>
      {/* Planet */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, isMobile ? 16 : 24, isMobile ? 16 : 24]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
};

// 3D Earth Model Component
const Earth = ({ position, isMobile }: { position: [number, number, number]; isMobile: boolean }) => {
  const earthRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/realistic_earth_8k.glb');

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      const time = clock.getElapsedTime();
      const angle = Math.PI / 2 + time * 0.005; // Start at different position and orbit
      orbitRef.current.position.x = Math.cos(angle) * 16;
      orbitRef.current.position.z = Math.sin(angle) * 16;
    }
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef} position={position}>
      <group ref={earthRef}>
        <primitive object={scene} scale={[0.002, 0.002, 0.002]} />
      </group>
    </group>
  );
};

// 3D Saturn Model Component
const Saturn = ({ position, isMobile }: { position: [number, number, number]; isMobile: boolean }) => {
  const saturnRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/saturn_planet.glb');

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      const time = clock.getElapsedTime();
      const angle = Math.PI / 3 + time * 0.002; // Start at different position and orbit
      orbitRef.current.position.x = Math.cos(angle) * 36;
      orbitRef.current.position.z = Math.sin(angle) * 36;
    }
    if (saturnRef.current) {
      saturnRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef} position={position}>
      <group ref={saturnRef}>
        <primitive object={scene} scale={[1.2, 1.2, 1.2]} />
      </group>
    </group>
  );
};

// 3D Mars Model Component
const Mars = ({ position, isMobile }: { position: [number, number, number]; isMobile: boolean }) => {
  const marsRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/mars.glb');

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      const time = clock.getElapsedTime();
      const angle = Math.PI + time * 0.004; // Start at different position and orbit
      orbitRef.current.position.x = Math.cos(angle) * 20;
      orbitRef.current.position.z = Math.sin(angle) * 20;
    }
    if (marsRef.current) {
      marsRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef} position={position}>
      <group ref={marsRef} position={[0, 0, 0]}>
        <primitive object={scene} scale={[1.5, 1.5, 1.5]} />
      </group>
    </group>
  );
};

// 3D Jupiter Model Component
const Jupiter = ({ position, isMobile }: { position: [number, number, number]; isMobile: boolean }) => {
  const jupiterRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/jupiter_with_hd_texture_map.glb');

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      const time = clock.getElapsedTime();
      const angle = Math.PI * 1.5 + time * 0.003; // Start at different position and orbit
      orbitRef.current.position.x = Math.cos(angle) * 28;
      orbitRef.current.position.z = Math.sin(angle) * 28;
    }
    if (jupiterRef.current) {
      jupiterRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef} position={position}>
      <group ref={jupiterRef}>
        <primitive object={scene} scale={[2.8, 2.8, 2.8]} />
      </group>
    </group>
  );
};

// 3D Venus Model Component
const Venus = ({ position, isMobile }: { position: [number, number, number]; isMobile: boolean }) => {
  const venusRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/venus (1).glb');

  // Console logging for debugging
  useEffect(() => {
    if (scene) {
      console.log('🌍 Venus Scene Object:', scene);
      console.log('🌍 Venus Scene Children:', scene.children);
      console.log('🌍 Venus Scene Position:', scene.position);
      console.log('🌍 Venus Scene Scale:', scene.scale);
      console.log('🌍 Venus Scene Rotation:', scene.rotation);
      
      // Log all meshes in the scene
      scene.traverse((child) => {
        if (child.type === 'Mesh') {
          const mesh = child as THREE.Mesh;
          console.log('🌍 Venus Mesh Found:', mesh);
          console.log('🌍 Mesh Geometry:', mesh.geometry);
          console.log('🌍 Mesh Material:', mesh.material);
          console.log('🌍 Mesh Position:', mesh.position);
          console.log('🌍 Mesh Scale:', mesh.scale);
        }
      });
    }
  }, [scene]);

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      const time = clock.getElapsedTime();
      const angle = Math.PI / 4 + time * 0.006; // Start at different position and orbit
      orbitRef.current.position.x = Math.cos(angle) * 12;
      orbitRef.current.position.z = Math.sin(angle) * 12;
    }
    if (venusRef.current) {
      venusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef} position={position}>
      <group ref={venusRef}>
        <primitive object={scene} scale={[0.2, 0.2, 0.2]} />
      </group>
    </group>
  );
};

// 3D Mercury Model Component
const Mercury = ({ position, isMobile }: { position: [number, number, number]; isMobile: boolean }) => {
  const mercuryRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/mercury.glb');

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      const time = clock.getElapsedTime();
      const angle = time * 0.008; // Start at different position and orbit
      orbitRef.current.position.x = Math.cos(angle) * 8;
      orbitRef.current.position.z = Math.sin(angle) * 8;
    }
    if (mercuryRef.current) {
      mercuryRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef} position={position}>
      <group ref={mercuryRef}>
        <primitive object={scene} scale={[0.8, 0.8, 0.8]} />
      </group>
    </group>
  );
};

// 3D Uranus Model Component
const Uranus = ({ position, isMobile }: { position: [number, number, number]; isMobile: boolean }) => {
  const uranusRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/uranus.glb');

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      const time = clock.getElapsedTime();
      const angle = Math.PI / 6 + time * 0.0015; // Start at different position and orbit
      orbitRef.current.position.x = Math.cos(angle) * 44;
      orbitRef.current.position.z = Math.sin(angle) * 44;
    }
    if (uranusRef.current) {
      uranusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef} position={position}>
      <group ref={uranusRef}>
        <primitive object={scene} scale={[5.0, 5.0, 5.0]} />
      </group>
    </group>
  );
};

// 3D Neptune Model Component
const Neptune = ({ position, isMobile }: { position: [number, number, number]; isMobile: boolean }) => {
  const neptuneRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      const time = clock.getElapsedTime();
      const angle = Math.PI * 2.5 + time * 0.001; // Start at different position and orbit
      orbitRef.current.position.x = Math.cos(angle) * 52;
      orbitRef.current.position.z = Math.sin(angle) * 52;
    }
    if (neptuneRef.current) {
      neptuneRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef} position={position}>
      {/* Neptune - Manually built with blue color */}
      <mesh ref={neptuneRef}>
        <sphereGeometry args={[1.0, isMobile ? 16 : 24, isMobile ? 16 : 24]} />
        <meshBasicMaterial color="#1E90FF" />
      </mesh>
    </group>
  );
};

// Main Solar System Component
const SolarSystem = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <group>
      {/* Star Field Background */}
      <StarField />
      
      {/* Sun */}
      <Sun />
      
      {/* Orbital Paths */}
      <OrbitalPath radius={8} /> {/* Mercury's orbit */}
      <OrbitalPath radius={12} /> {/* Venus's orbit */}
      <OrbitalPath radius={16} /> {/* Earth's orbit */}
      <OrbitalPath radius={20} /> {/* Mars's orbit */}
      <OrbitalPath radius={28} /> {/* Jupiter's orbit */}
      <OrbitalPath radius={36} /> {/* Saturn's orbit */}
      <OrbitalPath radius={44} /> {/* Uranus's orbit */}
      <OrbitalPath radius={52} /> {/* Neptune's orbit */}
      
      {/* Mercury (3D Model) */}
      <Mercury position={[0, 0, 0]} isMobile={isMobile} />
      
      {/* Venus (3D Model) */}
      <Venus position={[0, 0, 0]} isMobile={isMobile} />
      
      {/* Earth (3D Model) */}
      <Earth position={[0, 0, 0]} isMobile={isMobile} />
      
      {/* Jupiter (3D Model) */}
      <Jupiter position={[0, 0, 0]} isMobile={isMobile} />
      
      {/* Saturn (3D Model) */}
      <Saturn position={[0, 0, 0]} isMobile={isMobile} />
      
      {/* Mars (3D Model) */}
      <Mars position={[0, 0, 0]} isMobile={isMobile} />
      
      {/* Uranus (3D Model) */}
      <Uranus position={[0, 0, 0]} isMobile={isMobile} />
      
      {/* Neptune (3D Model) */}
      <Neptune position={[0, 0, 0]} isMobile={isMobile} />
    </group>
  );
};

// Main Component
const ThreeSolarSystem = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 15, 40], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        style={{ background: '#000000' }}
        gl={{ 
          antialias: !isMobile,
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: true
        }}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#FFD700" distance={150} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
        
        <SolarSystem isMobile={isMobile} />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={isMobile ? 0.3 : 0.6}
          panSpeed={isMobile ? 0.3 : 0.5}
          rotateSpeed={isMobile ? 0.3 : 0.5}
          maxDistance={100}
          minDistance={15}
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeSolarSystem; 