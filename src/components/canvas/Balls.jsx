import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Points, Preload, PointMaterial, Sphere } from '@react-three/drei' // helps for draw on Canvas. 
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'; // Import THREE from three package

import { Physics } from '@react-three/cannon';


// const Balls = (props) => {
//     const ref = useRef();
//     const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
//     useFrame((state, delta) => {
//         ref.current.rotation.x -= delta / 10;
//         ref.current.rotation.y -= delta / 15;
//     });

//     const texture = new THREE.TextureLoader().load("/ballIcon.png"); // Check the path to your image file

//     return (
//         <group rotation={[0, 0, Math.PI / 4]}>

//             {/* <Sphere ref={ref} args={[1, 64, 64]} frustumCulled {...props}>
//                 <meshBasicMaterial attach="material" map={texture} transparent />
//             </Sphere> */}
//             <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props} >
//                 <PointMaterial
//                     transparent
//                     color="#f272c8"
//                     size={0.002}
//                     sizeAttenuation={true}
//                     depthWrite={false}
//                 />
//             </Points>

//         </group>
//     );
// };

const BallsCanvas = () => {

    // return (
    //     <div className='w-full h-auto absolute inset-0 z-[-1]'>
    //         <Canvas camera={{ position: [0, 0, 1] }}>
    //             <Suspense fallback={null}>
    //                 <Balls />
    //             </Suspense>
    //             <Preload all />
    //         </Canvas>
    //     </div>
    // )
    const numberOfBalls = 100; // Number of falling balls

    return (
        <Canvas
            style={{ background: 'black' }} // Set the background color
            camera={{ position: [0, 0, 5] }} // Set the initial camera position
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Physics>
                    {[...Array(numberOfBalls)].map((_, index) => (
                        <Sphere
                            key={index}
                            position={[
                                Math.random() * 10 - 5, // Random X position within canvas width
                                Math.random() * 10 + 5, // Initial Y position above canvas
                                Math.random() * 10 - 5, // Random Z position within canvas height
                            ]}
                            args={[0.1, 32, 32]} // Sphere arguments (radius and segments)
                            mass={1} // Mass of the sphere
                            velocity={[0, Math.random() * -10, 0]} // Initial downward velocity
                        >
                            <meshStandardMaterial
                                attach="material"
                                color={new THREE.Color('green')} // Set color to green
                            />
                        </Sphere>
                    ))}
                </Physics>
            </Suspense>
        </Canvas>
    );
}

export default BallsCanvas;