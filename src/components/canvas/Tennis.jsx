import { OrbitControls, Preload, useGLTF } from '@react-three/drei' // helps for draw on Canvas. 
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber' //Canvas used for creating and managing a 3D canvas or scene in a React 



const Tennis = ({ isMobile }) => {
    const computer = useGLTF('./planet/scene.gltf'); // 3D model that preperd before.
    return (
        <mesh>
            <hemisphereLight intensity={1} groundColor="black" />
            <pointLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />

            <primitive
                object={computer.scene}
                scale={0.5}
                position-y={0}
                rotation-y={0}
            />
        </mesh>
    );
}


const TennisCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500)'); // returns whther the view port is lees then 500px or not (returns an object)
        //set the initial value of "isMobile" var. 
        setIsMobile(mediaQuery.matches); // (.matches-> returns true/false  if media query is match the current view port state (if its mobile)

        // now change "isMobile"  value every time something changes
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }
        // Add the func as a listener
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }

    }, [])// Empty dependency array to run the effect once, and every time the app open

    return (
        // camera: is the way we looking the 3D photo
        // fov: how wide our field of view is going to be
        // gl: preserveDra.. must to be there to properly render our model great
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
        >
            {/* Suspense allows us to have the loader while our model is loading */}
            <Suspense >
                {/* OrbitControls allow us to move the model left and right */}
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    // Not moving up and down
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Tennis isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default TennisCanvas;