import React from "react";

export function Cube() {
    return (
        <>
            <pointLight position={[0, 20, 10]} intensity={1.5} />
            <mesh rotation={[0, 0, 0]} position={[0, 0, -1]}>
                <boxGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" color={"#6be092"} />
            </mesh>
        </>
    );
}