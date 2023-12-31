/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function GlassesComponents(props) {
    const { nodes, materials } = useGLTF("/glasses.gltf");
    return (
        <group {...props} dispose={null} scale={[4.5, 4.5, 4.5]} position={[0, 0, -0.2]} renderOrder={3}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.glasses_base.geometry}
                material={materials["glasses_base.001"]}
                position={[0.004, 0.038, -0.006]}
                rotation={[1.565, -0.268, 0]}
                scale={[0.03, 0.002, 0.03]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.glasses_mirror.geometry}
                    material={materials["glasses_mirror.001"]}
                    position={[1.178, 5.298, -0.233]}
                    scale={1.061}
                />
            </mesh>
        </group>
    );
}

useGLTF.preload("/glasses.gltf");