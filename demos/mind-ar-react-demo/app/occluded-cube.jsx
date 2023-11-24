import React from "react";

export function OccludedCube() {
    return (
        <>
            <pointLight position={[0, 20, 10]} intensity={1.5} />
            {/* Mesh A */}
            <mesh position={[0, 0, -2]} renderOrder={3}>
                <planeGeometry attach="geometry" args={[1, 1, 1, 1]} />
                <meshStandardMaterial attach="material" color={0xff0000} />
            </mesh>

            {/* Mesh B */}
            <mesh position={[0, 0, -1]} renderOrder={0}>
                <boxGeometry attach="geometry" args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial attach="material" color={0x606060} />
            </mesh>

            {/* Mesh C */}
            <mesh position={[0, 0, -1]} renderOrder={0}>
                <boxGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial attach="material" color={0x0000ff} colorWrite={false} />
            </mesh>
        </>
    );
}