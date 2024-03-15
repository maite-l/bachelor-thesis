/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("3d/2.gltf");
    const { selectedBadges } = props;
    return (
        <group {...props} dispose={null} renderOrder={3}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve457.geometry}
                material={materials.white}
                position={[-0.01, 0.018, -0.002]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 2.189, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve458.geometry}
                material={materials.purple}
                position={[-0.033, 0.002, -0.002]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 2.189, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve459.geometry}
                material={materials["glasses_mirror.001"]}
                position={[-0.114, 0.026, 0.073]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve460.geometry}
                material={materials.purple}
                position={[-0.114, 0.026, 0.073]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve461.geometry}
                material={materials.purple}
                position={[-0.037, -0.028, 0.06]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 0.597, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve462.geometry}
                material={materials["Glasses light"]}
                position={[-0.159, 0.026, 0.073]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve463.geometry}
                material={materials.white}
                position={[-0.15, 0.026, 0.073]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 0.676, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve464.geometry}
                material={materials["SVGMat.006"]}
                position={[-0.114, 0.026, 0.07]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve465.geometry}
                material={materials.purple}
                position={[-0.067, -0.026, 0.059]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 0.597, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve466.geometry}
                material={materials.purple}
                position={[-0.052, -0.031, 0.059]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 0.597, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve467.geometry}
                material={materials.purple}
                position={[-0.034, -0.034, 0.059]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 0.597, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve468.geometry}
                material={materials.purple}
                position={[0, -0.026, 0.059]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 0.597, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve469.geometry}
                material={materials.purple}
                position={[-0.016, -0.031, 0.059]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 0.597, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve470.geometry}
                material={materials["glasses_mirror.001"]}
                position={[0.047, 0.026, 0.073]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={-1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve471.geometry}
                material={materials.purple}
                position={[0.047, 0.026, 0.073]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={-1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve472.geometry}
                material={materials["Glasses light"]}
                position={[0.093, 0.026, 0.073]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={-1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve473.geometry}
                material={materials.white}
                position={[0.083, 0.026, 0.073]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -0.676, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve474.geometry}
                material={materials["SVGMat.006"]}
                position={[0.047, 0.026, 0.07]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={-1.519}
            />




            <Bk6Badge selectedBadges={selectedBadges} nodes={nodes} materials={materials} />
            <BudalysBadge selectedBadges={selectedBadges} nodes={nodes} materials={materials} />
            <BudascoopBadge selectedBadges={selectedBadges} nodes={nodes} materials={materials} />
            <BudafabriekBadge selectedBadges={selectedBadges} nodes={nodes} materials={materials} />
        </group>
    );
}

useGLTF.preload("/3d/2.gltf");


function Bk6Badge({ selectedBadges, nodes, materials }) {
    return (
        <>
            {selectedBadges.includes("bk6") && (
                <group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve764.geometry}
                        material={materials.purple}
                        position={[-0.08, 0.179, 0.041]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve765.geometry}
                        material={materials.white}
                        position={[-0.077, 0.183, 0.042]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve767.geometry}
                        material={materials.turquoise}
                        position={[-0.082, 0.192, 0.041]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve770.geometry}
                        material={materials.turquoise}
                        position={[-0.06, 0.175, 0.044]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve771.geometry}
                        material={materials.turquoise}
                        position={[-0.061, 0.19, 0.043]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve773.geometry}
                        material={materials.turquoise}
                        position={[-0.093, 0.188, 0.04]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve776.geometry}
                        material={materials.turquoise}
                        position={[-0.072, 0.206, 0.042]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve777.geometry}
                        material={materials.white}
                        position={[-0.086, 0.169, 0.041]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve779.geometry}
                        material={materials.coral}
                        position={[-0.086, 0.163, 0.041]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve780.geometry}
                        material={materials.purple}
                        position={[-0.072, 0.191, 0.0427]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve782.geometry}
                        material={materials["SVGMat.001"]}
                        position={[-0.077, 0.183, 0.042]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve743.geometry}
                        material={materials.white}
                        position={[-0.104, 0.094, 0.036]}
                        rotation={[1.575, 0, 0.114]}
                        scale={0.491}
                    />

                </group>
            )}

        </>
    )
}
function BudalysBadge({ selectedBadges, nodes, materials }) {
    return (
        <>
            {selectedBadges.includes("budalys") && (
                <group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve963.geometry}
                        material={materials.purple}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve964.geometry}
                        material={materials.white}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve965.geometry}
                        material={materials.purple}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve966.geometry}
                        material={materials.white}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve967.geometry}
                        material={materials.purple}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve968.geometry}
                        material={materials.white}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve969.geometry}
                        material={materials.coral}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve970.geometry}
                        material={materials.white}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve972.geometry}
                        material={materials.white}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve974.geometry}
                        material={materials.white}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve976.geometry}
                        material={materials.white}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve977.geometry}
                        material={materials.turquoise}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve978.geometry}
                        material={materials.white}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve979.geometry}
                        material={materials.white}
                        position={[0.045, 0.154, 0.036]}
                        rotation={[-1.574, -0.003, 0.139]}
                        scale={-0.493}
                    />
                </group>
            )}

        </>
    )
}
function BudascoopBadge({ selectedBadges, nodes, materials }) {
    return (
        <>
            {selectedBadges.includes("budascoop") && (
                <group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve783.geometry}
                        material={materials.purple}
                        position={[-0.149, 0.137, 0.016]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve784.geometry}
                        material={materials.white}
                        position={[-0.146, 0.137, 0.017]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve786.geometry}
                        material={materials["SVGMat.003"]}
                        position={[-0.147, 0.138, 0.017]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve787.geometry}
                        material={materials.turquoise}
                        position={[-0.141, 0.154, 0.02]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve788.geometry}
                        material={materials.turquoise}
                        position={[-0.158, 0.149, 0.011]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve789.geometry}
                        material={materials.white}
                        position={[-0.154, 0.136, 0.013]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve790.geometry}
                        material={materials.white}
                        position={[-0.146, 0.137, 0.017]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve791.geometry}
                        material={materials.white}
                        position={[-0.138, 0.138, 0.021]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve792.geometry}
                        material={materials.white}
                        position={[-0.139, 0.131, 0.02]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve793.geometry}
                        material={materials.white}
                        position={[-0.147, 0.131, 0.016]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve794.geometry}
                        material={materials.white}
                        position={[-0.155, 0.131, 0.013]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve796.geometry}
                        material={materials.white}
                        position={[-0.15, 0.131, 0.015]}
                        rotation={[1.574, 0.002, 0.443]}
                        scale={0.491}
                    />
                </group>
            )}

        </>
    )
}
function BudafabriekBadge({ selectedBadges, nodes, materials }) {
    return (
        <>
            {selectedBadges.includes("budafabriek") && (
                <group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve746.geometry}
                        material={materials.purple}
                        position={[0.078, 0.137, 0.019]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve747.geometry}
                        material={materials.white}
                        position={[0.08, 0.137, 0.018]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve748.geometry}
                        material={materials.coral}
                        position={[0.079, 0.14, 0.019]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve749.geometry}
                        material={materials.white}
                        position={[0.08, 0.148, 0.018]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve750.geometry}
                        material={materials.purple}
                        position={[0.071, 0.15, 0.022]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve751.geometry}
                        material={materials.purple}
                        position={[0.068, 0.148, 0.022]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve752.geometry}
                        material={materials.purple}
                        position={[0.073, 0.148, 0.021]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve753.geometry}
                        material={materials.purple}
                        position={[0.07, 0.146, 0.022]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve754.geometry}
                        material={materials.turquoise}
                        position={[0.09, 0.15, 0.015]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve755.geometry}
                        material={materials.turquoise}
                        position={[0.09, 0.146, 0.015]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve756.geometry}
                        material={materials.turquoise}
                        position={[0.087, 0.148, 0.016]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve757.geometry}
                        material={materials.turquoise}
                        position={[0.092, 0.148, 0.014]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve758.geometry}
                        material={materials.coral}
                        position={[0.074, 0.14, 0.021]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve759.geometry}
                        material={materials.white}
                        position={[0.074, 0.14, 0.021]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve760.geometry}
                        material={materials.coral}
                        position={[0.087, 0.14, 0.016]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve761.geometry}
                        material={materials.white}
                        position={[0.087, 0.14, 0.016]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve762.geometry}
                        material={materials.Glasses}
                        position={[0.071, 0.154, 0.022]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve763.geometry}
                        material={materials.Glasses}
                        position={[0.089, 0.154, 0.015]}
                        rotation={[1.575, -0.001, -0.333]}
                        scale={0.491}
                    />
                </group>
            )}

        </>
    )
}