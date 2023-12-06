'use client';

import React, { useState, useRef } from "react";

// import of the library
import { ARView, ARAnchor } from "react-three-mind";

import { Model } from './Model';
import { HeadOccluder } from './Occluder';

import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

import styles from './ARFilter.module.css';


export default function ARFilter() {

    const [imageV, setImageV] = useState(null);
    const [imageF, setImageF] = useState(null);

    // set a ref to the image container
    const imgContainerRef = useRef(null);

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

        // Set the images as state
        setImageV(dataV);
        setImageF(dataF);
    };

    const handleImageDownload = async () => {
        const image = imgContainerRef.current;
        const canvas = await html2canvas(image);
        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');
        link.href = data;
        link.download = 'FTI-filter.jpg';
        link.click();
    };

    const handleShare = async () => {
        // const image = document.querySelector('.image');
        // const canvas = await html2canvas(image);
        // const data = canvas.toDataURL('image/jpg');
        const shareData = {
            title: "MDN",
            text: "Learn web development on MDN!",
            url: "https://developer.mozilla.org",
        };
        try {
            await navigator.share(shareData);
            console.log('Shared successfully');
        } catch (err) {
            console.log('Error: ' + err);
        }

    };

    const handleNew = () => {
        setImageV(null);
        setImageF(null);
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
        <div>

            <div className={`container margin ` + styles.container}>
                <div className={`${styles.interface} ${styles.gridElement}`} >
                    {!imageV && !imageF && <button type="button" onClick={handleTakeImage} className={styles.cameraButton}></button>}
                    {imageV && imageF &&
                        <>
                            <button type="button" onClick={handleImageDownload}>Download picture</button>
                            <button type="button" onClick={handleShare}>Share</button>
                            <button type="button" onClick={handleNew}>Retake</button>
                        </>
                    }
                </div>
                <div className={styles.imgContainer} ref={imgContainerRef}>
                    {imageV && <img src={imageV} className={styles.gridElement} />}
                    {imageF && <img src={imageF} className={styles.gridElement} />}
                </div>
                <ARView
                    // turn on preserveDrawingBuffer to be able to take a screenshot
                    gl={{ preserveDrawingBuffer: true }}
                    // turn off flipUserCamera to for more natural camera feel
                    flipUserCamera={false}
                    id="ARView"
                    style={{ width: "100vw", height: "100vh", zIndex: "-1", gridColumn: "1", gridRow: "1", transform: "scaleX(-1)" }}
                >
                    <ARAnchor
                        // target is point on the facemesh the model will be attached to
                        target={1}
                    >
                        {/* light */}
                        <directionalLight color="white" position={[0, 0, 10]} />

                        {/* model */}
                        <group scale={[scale, scale, scale]} position={[0, 0, offset]}>
                            <Model />
                            <HeadOccluder />
                        </group>

                    </ARAnchor>
                </ARView>
                {/* extra div with width and height of filter to make up for absolute positioning */}
                {/* <div style={{ minWidth: "100vw", minHeight: "100vh" }}></div> */}
            </div>
        </div >
    )
}
