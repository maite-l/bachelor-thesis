'use client';

import styles from './page.module.css'
import React from "react";
import { createRoot } from "react-dom/client";

// import of the library
import { ARView, ARAnchor } from "react-three-mind";

import { Cube } from './cube';
import { GlassesBasic } from './glasses-basic';
import { GlassesComponents } from './glasses-components';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>React AR Mind Demo</h1>
      <ARView>
        <ARAnchor target={1} // Target (image or face) to be anchored to
        >
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />

          {/* simple cube */}
          {/* <mesh>
            <boxGeometry attach="geometry" args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial attach="material" color="hotpink"/>
          </mesh> */}

          {/* imported cube */}
          {/* <Cube /> */}

          {/* glasses model, loaded by GLTFLoader */}
          {/* <GlassesBasic />  */}

          {/* glasses model made up of components, converted by https://gltf.pmnd.rs/ */}
          <GlassesComponents />

        </ARAnchor>
      </ARView>
    </main >
  )
}
