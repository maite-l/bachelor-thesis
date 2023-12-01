'use client';

import React, { useEffect } from "react";
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
import domtoimage from 'dom-to-image';


export default function Home() {
  const handleTakeImage = async () => {
    const ARView = document.getElementById('ARView');

    // Get the video and filter elements
    const video = ARView.querySelector('video');
    const filter = ARView.querySelector('canvas');

    // html2canvas to get the video as an image (dom-to-image doesn't support video element)
    const canvasV = await html2canvas(video);
    const dataV = canvasV.toDataURL('image/jpg');

    // dom-to-image to get the filter as an image (html2canvas doesn't support transparency in canvas element)
    const dataF = await domtoimage.toPng(filter);

    // create a container div to hold the images
    const container = document.createElement('div');
    // add styling to position the images on top of each other
    container.style.display = 'grid';
    container.style.overflow = 'hidden';
    container.style.gridTemplateColumns = '1fr';
    container.style.gridTemplateRows = '1fr';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.justifyItems = 'center';
    container.style.transform = 'scaleX(-1)';
    container.classList.add('image');

    // Create img elements for the images
    const imgV = document.createElement('img');
    imgV.src = dataV;
    imgV.style.gridColumn = '1';
    imgV.style.gridRow = '1';
    const imgF = document.createElement('img');
    imgF.src = dataF;
    imgF.style.gridColumn = '1';
    imgF.style.gridRow = '1';

    // Append images to the container
    container.appendChild(imgV);
    container.appendChild(imgF);

    // Append the container to the body
    document.body.appendChild(container);
  };

  const handleImageDownload = async () => {
    const image = document.querySelector('.image');
    console.log(image);
    const canvas = await html2canvas(image);
    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');
    link.href = data;
    link.download = 'image.jpg';
    link.click();
  };


  // determine scale and offset based on window width (could use better solution)
  const windowWidth = window.innerWidth;
  let scale = 1;
  let offset = 0;
  if (windowWidth < 320) {
    scale = 4;
    offset = 2.2;
  } else if (windowWidth < 375) {
    scale = 2.8;
    offset = 1.8;
  } else if (windowWidth < 425) {
    scale = 2.5;
    offset = 1.4;
  } else if (windowWidth < 550) {
    scale = 2;
    offset = 1.4;
  } else if (windowWidth < 650) {
    scale = 1.8;
    offset = 0.5;
  } else if (windowWidth < 800) {
    scale = 1.7;
    offset = 0.4;
  } else if (windowWidth < 1000) {
    scale = 1.4;
    offset = 0.3;
  } else if (windowWidth >= 1000) {
    scale = 1;
    offset = 0;
  }

  return (
    <main>
      <h1>React AR Mind Demo</h1>
      <button type="button" onClick={handleTakeImage}>Take picture</button>
      <button type="button" onClick={handleImageDownload}>Download picture</button>
      <div style={{ transform: "scaleX(-1)", display: "flex", justifyContent: "center" }}>
        <ARView
          // turn on preserveDrawingBuffer to be able to take a screenshot
          gl={{ preserveDrawingBuffer: true }}
          // turn off flipUserCamera to for more natural camera feel
          flipUserCamera={false}
          id="ARView"
        >
          <ARAnchor
            // target is point on the facemesh the model will be attached to
            // reference: https://github.com/tensorflow/tfjs-models/blob/master/face-landmarks-detection/mesh_map.jpg
            target={1}
          >
            {/* light */}
            <directionalLight color="white" position={[0, 0, 10]} />

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



            {/* head model */}
            {/* <Head /> */}


            <group scale={[scale, scale, scale]} position={[0, 0, offset]}>
              {/* glasses model made up of components, converted by https://gltf.pmnd.rs/ */}
              <GlassesComponents />
              {/* head model made up of components to be able to adjust so it occludes */}
              <HeadOccluder />
            </group>

          </ARAnchor>
        </ARView>
        {/* extra div with width and height of filter to make up for absolute positioning */}
        <div style={{ minWidth: "100vw", minHeight: "100vh" }}></div>
      </div>
    </main >
  )
}
