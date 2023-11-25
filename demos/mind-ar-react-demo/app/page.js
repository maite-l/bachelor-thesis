'use client';

import React from "react";
import { createRoot } from "react-dom/client";

// import of the library
import { ARView, ARAnchor } from "react-three-mind";

import { Cube } from './cube';
import { GlassesBasic } from './glasses-basic';
import { GlassesComponents } from './glasses-components';

import { OccludedCube } from './occluded-cube';
import { Head } from './occluder';
import { HeadOccluder } from './occluder-components';

import html2canvas from 'html2canvas';

export default function Home() {
  const handleImageDownload = async () => {
    const element = document.getElementById('print'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg'),
      link = document.createElement('a');

    link.href = data;
    link.download = 'downloaded-image.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main>
      <h1>React AR Mind Demo</h1>
      <button type="button" onClick={handleImageDownload}>Download</button>
      <div style={{ transform: "scaleX(-1)" }}>
        <ARView
          gl={{ preserveDrawingBuffer: true }}
          id="print"
          flipUserCamera={false}
        >
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

            {/* occluded cube */}
            {/* <OccludedCube /> */}



            {/* glasses model, loaded by GLTFLoader */}
            {/* <GlassesBasic />  */}

            {/* glasses model made up of components, converted by https://gltf.pmnd.rs/ */}
            <GlassesComponents />



            {/* head model */}
            {/* <Head /> */}


            {/* head model made up of components to be able to adjust so it occludes */}
            <HeadOccluder />

          </ARAnchor>
        </ARView>
      </div>
    </main >
  )
}
