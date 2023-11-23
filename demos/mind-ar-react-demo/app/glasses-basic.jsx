// import of the gltf loader
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function GlassesBasic() {
    const gltf = useLoader(GLTFLoader, '/glasses.gltf')
    return <primitive object={gltf.scene} scale={[6, 6, 6]} />
}