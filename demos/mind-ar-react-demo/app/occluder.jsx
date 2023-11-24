// import of the gltf loader
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Head() {
    const gltf = useLoader(GLTFLoader, '/head_occluder/head.gltf')
    return <primitive object={gltf.scene} scale={[0.055, 0.055, 0.055]} position={[0, 0, -0.1]} />
}