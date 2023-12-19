/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("/3d/model.gltf");
    const { selectedBadges } = props;
    console.log(selectedBadges);
    return (
        <group {...props} dispose={null} renderOrder={3}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve457.geometry}
                material={materials.white}
                position={[-0.024, 0.018, -0.002]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -2.189, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve458.geometry}
                material={materials.purple}
                position={[0, 0.002, -0.002]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -2.189, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve459.geometry}
                material={materials["glasses_mirror.001"]}
                position={[0.08, 0.026, 0.073]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={-1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve460.geometry}
                material={materials.purple}
                position={[0.08, 0.026, 0.073]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={-1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve461.geometry}
                material={materials.purple}
                position={[0.004, -0.028, 0.06]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -0.597, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve462.geometry}
                material={materials["Glasses light"]}
                position={[0.125, 0.026, 0.073]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={-1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve463.geometry}
                material={materials.white}
                position={[0.116, 0.026, 0.073]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -0.676, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve464.geometry}
                material={materials["SVGMat.006"]}
                position={[0.08, 0.026, 0.07]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={-1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve465.geometry}
                material={materials.purple}
                position={[0.033, -0.026, 0.059]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -0.597, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve466.geometry}
                material={materials.purple}
                position={[0.018, -0.031, 0.059]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -0.597, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve467.geometry}
                material={materials.purple}
                position={[0, -0.034, 0.059]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -0.597, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve468.geometry}
                material={materials.purple}
                position={[-0.034, -0.026, 0.059]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -0.597, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve469.geometry}
                material={materials.purple}
                position={[-0.018, -0.031, 0.059]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.519, -0.597, -1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve470.geometry}
                material={materials["glasses_mirror.001"]}
                position={[-0.081, 0.026, 0.073]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve471.geometry}
                material={materials.purple}
                position={[-0.081, 0.026, 0.073]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve472.geometry}
                material={materials["Glasses light"]}
                position={[-0.126, 0.026, 0.073]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.519}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve473.geometry}
                material={materials.white}
                position={[-0.117, 0.026, 0.073]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1.519, 0.676, 1.519]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve474.geometry}
                material={materials["SVGMat.006"]}
                position={[-0.081, 0.026, 0.07]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.519}
            />


            <Bk6Badge selectedBadges={selectedBadges} nodes={nodes} materials={materials} />
            <BudatorenBadge selectedBadges={selectedBadges} nodes={nodes} materials={materials} />
            <LeieboordenBadge selectedBadges={selectedBadges} nodes={nodes} materials={materials} />
            <BudascoopBadge selectedBadges={selectedBadges} nodes={nodes} materials={materials} />
            <BudafabriekBadge selectedBadges={selectedBadges} nodes={nodes} materials={materials} />

        </group>
    );
}

useGLTF.preload("/3d/model.gltf");

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
                        position={[0.077, 0.179, 0.041]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve765.geometry}
                        material={materials.white}
                        position={[0.075, 0.183, 0.042]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve767.geometry}
                        material={materials.turquoise}
                        position={[0.08, 0.192, 0.04]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve770.geometry}
                        material={materials.turquoise}
                        position={[0.058, 0.175, 0.048]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve771.geometry}
                        material={materials.turquoise}
                        position={[0.06, 0.19, 0.048]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve773.geometry}
                        material={materials.turquoise}
                        position={[0.09, 0.188, 0.037]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve776.geometry}
                        material={materials.turquoise}
                        position={[0.07, 0.206, 0.044]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve777.geometry}
                        material={materials.white}
                        position={[0.083, 0.169, 0.039]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve779.geometry}
                        material={materials.coral}
                        position={[0.0834, 0.163, 0.039]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve780.geometry}
                        material={materials.purple}
                        position={[0.07, 0.191, 0.044]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve782.geometry}
                        material={materials["SVGMat.001"]}
                        position={[0.075, 0.183, 0.042]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve743.geometry}
                        material={materials.white}
                        position={[0.1, 0.094, 0.03]}
                        rotation={[-1.567, 0.001, 0.349]}
                        scale={-0.491}
                    />
                </group>
            )}

        </>
    )
}
function BudatorenBadge({ selectedBadges, nodes, materials }) {
    return (
        <>
            {selectedBadges.includes("budatoren") && (
                <group>
                    <group
                        position={[-0.074, 0.177, 0.044]}
                        rotation={[1.492, 0.223, 0.358]}
                        scale={[-1.035, -1.24, -1]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube039.geometry}
                            material={materials.white}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube039_1.geometry}
                            material={materials.purple}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve797.geometry}
                        material={materials.purple}
                        position={[-0.072, 0.179, 0.043]}
                        rotation={[-1.567, -0.001, -0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve798.geometry}
                        material={materials.white}
                        position={[-0.074, 0.183, 0.042]}
                        rotation={[-1.567, -0.001, -0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve800.geometry}
                        material={materials["SVGMat.004"]}
                        position={[-0.078, 0.198, 0.04]}
                        rotation={[-1.567, -0.001, -0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve801.geometry}
                        material={materials.white}
                        position={[-0.078, 0.198, 0.04]}
                        rotation={[-1.567, -0.001, -0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve807.geometry}
                        material={materials.turquoise}
                        position={[-0.087, 0.192, 0.037]}
                        rotation={[-1.567, -0.001, -0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve808.geometry}
                        material={materials.white}
                        position={[-0.086, 0.192, 0.037]}
                        rotation={[-1.567, -0.001, -0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve809.geometry}
                        material={materials.turquoise}
                        position={[-0.069, 0.197, 0.044]}
                        rotation={[-1.567, -0.001, -0.349]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve810.geometry}
                        material={materials.white}
                        position={[-0.069, 0.197, 0.044]}
                        rotation={[-1.567, -0.001, -0.349]}
                        scale={-0.491}
                    />
                    <group
                        position={[-0.048, 0.178, 0.032]}
                        rotation={[-1.567, -0.001, -0.349]}
                        scale={-0.491}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Curve086.geometry}
                            material={materials.white}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Curve086_1.geometry}
                            material={materials.coral}
                        />
                    </group>
                </group>
            )}

        </>
    )
}
function LeieboordenBadge({ selectedBadges, nodes, materials }) {
    return (
        <>
            {selectedBadges.includes("leieboorden") && (
                <group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve740.geometry}
                        material={materials.purple}
                        position={[0.003, 0.137, 0.06]}
                        rotation={[-1.567, 0, 0]}
                        scale={-0.498}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve741.geometry}
                        material={materials.coral}
                        position={[0.001, 0.142, 0.06]}
                        rotation={[-1.567, 0, 0]}
                        scale={-0.498}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve742.geometry}
                        material={materials.white}
                        position={[0.001, 0.14, 0.06]}
                        rotation={[-1.567, 0, 0]}
                        scale={-0.498}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve745.geometry}
                        material={materials.white}
                        position={[0.001, 0.137, 0.06]}
                        rotation={[-1.567, 0, 0]}
                        scale={[-0.498, -0.507, -0.498]}
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
                        position={[0.141, 0.137, 0]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve784.geometry}
                        material={materials.white}
                        position={[0.139, 0.137, 0.002]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve786.geometry}
                        material={materials["SVGMat.003"]}
                        position={[0.139, 0.138, 0.002]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve787.geometry}
                        material={materials.turquoise}
                        position={[0.134, 0.154, 0.006]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve788.geometry}
                        material={materials.turquoise}
                        position={[0.149, 0.149, -0.006]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve789.geometry}
                        material={materials.white}
                        position={[0.145, 0.136, -0.003]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve790.geometry}
                        material={materials.white}
                        position={[0.139, 0.137, 0.002]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve791.geometry}
                        material={materials.white}
                        position={[0.132, 0.138, 0.008]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve792.geometry}
                        material={materials.white}
                        position={[0.133, 0.131, 0.007]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve793.geometry}
                        material={materials.white}
                        position={[0.14, 0.131, 0.001]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve794.geometry}
                        material={materials.white}
                        position={[0.146, 0.131, -0.004]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve796.geometry}
                        material={materials.white}
                        position={[0.142, 0.131, -0.001]}
                        rotation={[-1.568, 0.003, 0.698]}
                        scale={-0.491}
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
                        position={[-0.136, 0.137, 0.003]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve747.geometry}
                        material={materials.white}
                        position={[-0.138, 0.137, 0.001]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve748.geometry}
                        material={materials.coral}
                        position={[-0.137, 0.14, 0.002]}
                        rotation={[-1.574, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve749.geometry}
                        material={materials.white}
                        position={[-0.138, 0.148, 0.001]}
                        rotation={[-1.574, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve750.geometry}
                        material={materials.purple}
                        position={[-0.13, 0.15, 0.008]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve751.geometry}
                        material={materials.purple}
                        position={[-0.128, 0.148, 0.009]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve752.geometry}
                        material={materials.purple}
                        position={[-0.132, 0.148, 0.006]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve753.geometry}
                        material={materials.purple}
                        position={[-0.13, 0.146, 0.008]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve754.geometry}
                        material={materials.turquoise}
                        position={[-0.145, 0.15, -0.005]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve755.geometry}
                        material={materials.turquoise}
                        position={[-0.145, 0.146, -0.005]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve756.geometry}
                        material={materials.turquoise}
                        position={[-0.144, 0.148, -0.004]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve757.geometry}
                        material={materials.turquoise}
                        position={[-0.147, 0.148, -0.007]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve758.geometry}
                        material={materials.coral}
                        position={[-0.133, 0.14, 0.005]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve759.geometry}
                        material={materials.white}
                        position={[-0.133, 0.14, 0.005]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve760.geometry}
                        material={materials.coral}
                        position={[-0.143, 0.14, -0.003]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve761.geometry}
                        material={materials.white}
                        position={[-0.143, 0.14, -0.003]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve762.geometry}
                        material={materials.Glasses}
                        position={[-0.13, 0.154, 0.008]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve763.geometry}
                        material={materials.Glasses}
                        position={[-0.145, 0.154, -0.005]}
                        rotation={[-1.568, -0.003, -0.698]}
                        scale={-0.491}
                    />
                </group>
            )}
        </>
    )
}
