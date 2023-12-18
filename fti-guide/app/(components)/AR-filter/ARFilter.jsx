'use client';

import React, { useState, useRef, useEffect } from "react";

// import of the library
import { ARView, ARAnchor } from "react-three-mind";

import { Model } from './Model';
import { HeadOccluder } from './Occluder';

import html2canvas from 'html2canvas';

import styles from './ARFilter.module.css';


export default function ARFilter({ allBadges }) {

    const [selectedBadges, setSelectedBadges] = useState([]);
    const [imageV, setImageV] = useState(null);
    const [imageF, setImageF] = useState(null);
    const [isLoadingImg, setIsLoadingImg] = useState(false);
    const [isLoadingFilter, setIsLoadingFilter] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [flipCamera, setFlipCamera] = useState(true);

    let canShare = false;
    if (typeof navigator !== 'undefined' && navigator.share) {
        canShare = true;
    }

    // set a ref to the ar filter
    const arFilterRef = useRef(null);
    // set a ref to the image container
    const imgContainerRef = useRef(null);


    // no way to detect if the model is loaded, so setting a fake loading timeout
    useEffect(() => {
        setTimeout(() => {
            setIsLoadingFilter(false);
        }, 2000);
    }, []);

    const handleBadgeClick = (badgeSlug) => {
        if (selectedBadges.includes(badgeSlug)) {
            // Badge is already selected, remove it
            setSelectedBadges(selectedBadges.filter(slug => slug !== badgeSlug));
        } else {
            // Badge is not selected, add it
            setSelectedBadges([...selectedBadges, badgeSlug]);
        }
    };

    const handleTakeImage = async () => {

        setIsLoadingImg(true);

        const ARView = document.getElementById('ARView');

        // Get the video and filter elements
        const video = ARView.querySelector('video');
        const filter = ARView.querySelector('canvas');

        const canvasV = await html2canvas(video);
        const dataV = canvasV.toDataURL('image/jpg');

        const canvasF = await html2canvas(filter, { backgroundColor: null });
        const dataF = canvasF.toDataURL('image/jpg');

        setIsLoadingImg(false);
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
        setShowConfirmation(true);
        setTimeout(() => {
            setShowConfirmation(false);
        }, 3000);
    };

    const handleShare = async () => {
        const image = imgContainerRef.current;
        const canvas = await html2canvas(image);
        const data = canvas.toDataURL('image/jpg');
        const blob = await (await fetch(data)).blob();
        const file = new File([blob], 'FTI-filter.jpg', { type: blob.type });
        const shareData = {
            files: [file],
        };
        try {
            await navigator.share(shareData);
            console.log('Shared successfully');
        } catch (err) {
            console.log('Error: ' + err);
        }
    };

    const handleNew = () => {
        arFilterRef.current.startTracking();
        setImageV(null);
        setImageF(null);
    };

    const handleSwitch = () => {
        arFilterRef.current.stopTracking();

        arFilterRef.current.switchCamera();
        const ARView = document.getElementById('ARView');
        const imgContainer = imgContainerRef.current;
        console.log(imgContainer)
        if (flipCamera) {
            ARView.style.transform = "scaleX(1)";
            imgContainer.style.transform = "scaleX(1)";
        } else {
            ARView.style.transform = "scaleX(-1)";
            imgContainer.style.transform = "scaleX(-1)";
        }
        setFlipCamera(!flipCamera);

        arFilterRef.current.startTracking();
    };

    let scale = 1.5;
    let offset = 0;

    return (
        <div className={styles.ARfilter}>

            <div className={`${styles.confirmation} ${showConfirmation ? styles.confirmationVisible : styles.confirmationHidden}`}>
                Foto opgeslagen!
            </div>

            <div className={`container margin ` + styles.container}>
                <div className={`${styles.interface} ${styles.gridElement}`} >
                    {(isLoadingImg || isLoadingFilter) && (
                        <div className={styles.loader}>
                            <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
                        </div>
                    )}
                    <div>
                        {imageV && imageF &&
                            <NewPictureButton imageV={imageV} imageF={imageF} handleNew={handleNew} />
                        }
                        {!imageV && !imageF && !isLoadingImg && !isLoadingFilter &&
                            <BadgeButtons selectedBadges={selectedBadges} allBadges={allBadges} handleBadgeClick={handleBadgeClick} />
                        }
                    </div>
                    <div className={styles.interfaceBottom}>
                        {!imageV && !imageF && !isLoadingImg && !isLoadingFilter &&
                            <TakePhotoInterface handleTakeImage={handleTakeImage} handleSwitch={handleSwitch} />
                        }
                        {imageV && imageF &&
                            <PhotoTakenInterface handleImageDownload={handleImageDownload} handleShare={handleShare} canShare={canShare} />
                        }
                    </div>


                </div>
                <div className={styles.imgContainer} ref={imgContainerRef}>
                    {imageV && <img src={imageV} className={`${styles.gridElement} ${styles.videoImg}`} />}
                    {imageF && <img src={imageF} className={`${styles.gridElement} ${styles.filterImg}`} />}
                </div>
                <ARView
                    // turn on preserveDrawingBuffer to be able to take a screenshot
                    style={{ width: "100vw", height: "100vh", zIndex: "-1", gridColumn: "1", gridRow: "1", transform: "scaleX(-1)" }}
                    id="ARView"
                    ref={arFilterRef}

                    gl={{ preserveDrawingBuffer: true }}
                    flipUserCamera={false}
                >
                    <ARAnchor
                        // target is point on the facemesh the model will be attached to
                        target={5}
                    >
                        {/* light */}
                        <ambientLight intensity={1.5} />

                        <directionalLight color="white" position={[0, 0, 10]} />
                        <directionalLight color="#ece1b3" intensity={4} position={[10, 10, 10]} />
                        <directionalLight color="#ece1b3" intensity={2} position={[-10, 10, 10]} />

                        {/* model */}
                        <group scale={[scale, scale, scale]} position={[0, 0, offset]}>
                            <Model scale={[4, 4, 4]} position={[0, 0.05, 0]} rotation={[Math.PI / 25, 0, 0]} selectedBadges={selectedBadges} />
                            {/* <HeadOccluder /> */}
                        </group>

                    </ARAnchor>
                </ARView>
            </div>
        </div >
    )
}


function NewPictureButton({ handleNew }) {
    return (
        <button type="button" onClick={handleNew} className={styles.buttonSecondary}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M0.723312 3.00954V3.00986V7.36423C0.723312 7.54203 0.791954 7.71223 0.913633 7.83747C1.03526 7.96265 1.19986 8.03266 1.37113 8.03266H5.60179H5.60184C5.72966 8.03277 5.85479 7.99384 5.96138 7.92061C6.06799 7.84736 6.15133 7.74303 6.2006 7.62063C6.24988 7.49822 6.26279 7.36342 6.23763 7.23337C6.21247 7.10332 6.15042 6.9841 6.05959 6.89072L6.05957 6.8907L4.56121 5.34853L4.52065 5.30678L4.56303 5.26689L5.49239 4.39195L5.51311 4.37149C5.51325 4.37135 5.51338 4.37122 5.51351 4.37108C6.50134 3.35491 7.75836 2.6606 9.12768 2.37514C10.4972 2.08964 11.9181 2.22581 13.2127 2.76658C14.5074 3.30735 15.6182 4.22864 16.4067 5.41511C17.1952 6.60157 17.6265 8.00068 17.6468 9.43767C17.6671 10.8747 17.2756 12.2861 16.521 13.4956C15.7663 14.7052 14.682 15.6593 13.4032 16.2386C12.1244 16.8179 10.708 16.9966 9.331 16.7522C7.954 16.5078 6.67771 15.8513 5.66148 14.8649L5.66142 14.8648C5.59952 14.8046 5.52678 14.7575 5.44739 14.7263C5.36801 14.6951 5.28349 14.6803 5.19863 14.6828C5.11378 14.6852 5.03017 14.7048 4.95258 14.7405C4.87498 14.7762 4.80486 14.8274 4.74628 14.8911C4.6877 14.9549 4.64181 15.03 4.61131 15.1122C4.58081 15.1943 4.56632 15.2819 4.56871 15.37C4.57109 15.458 4.59029 15.5446 4.62517 15.6249C4.66006 15.7052 4.70991 15.7775 4.77182 15.8378L4.77185 15.8378C6.3291 17.3555 8.39343 18.1986 10.5374 18.1928H10.5376H10.6535C12.0294 18.1734 13.3798 17.8064 14.5859 17.124C15.7921 16.4416 16.8171 15.4645 17.5707 14.2786C18.3244 13.0927 18.7836 11.7342 18.9078 10.3227C19.032 8.91112 18.8174 7.48982 18.283 6.18372C17.7485 4.87762 16.9106 3.72681 15.843 2.83233C14.7755 1.93787 13.5109 1.3271 12.1606 1.05357C10.8102 0.780032 9.41529 0.85207 8.09829 1.26337C6.78128 1.67468 5.58243 2.4127 4.60718 3.41273L4.60721 3.41276L4.60544 3.41444L3.64208 4.32159L3.60098 4.3603L3.56167 4.31977L1.82888 2.53268C1.73797 2.43901 1.62226 2.37546 1.49654 2.34986C1.37084 2.32427 1.24056 2.3377 1.12219 2.38854C1.00381 2.43938 0.902512 2.52543 0.831383 2.636C0.760241 2.74658 0.722561 2.87661 0.723312 3.00954Z" fill="#FBF3ED" stroke="#FBF3ED" strokeWidth="0.114583" />
            </svg>
            Opnieuw
        </button>
    )
}

function BadgeButtons({ selectedBadges, allBadges, handleBadgeClick }) {

    const [collectedBadgeValues, setCollectedBadgeValues] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const badgesArray = JSON.parse(localStorage.getItem('collected'));
            setCollectedBadgeValues(badgesArray);
        }
    }, []);

    let collectedBadgesAmount = 0;
    if (collectedBadgeValues) { collectedBadgesAmount = collectedBadgeValues.length }
    const uncollectedBadgesAmount = allBadges.length - collectedBadgesAmount;

    let filteredBadges = [];
    if (collectedBadgeValues) {
        filteredBadges = allBadges.filter(badge => {
            return collectedBadgeValues.includes(badge.slug);
        });
    }

    return (
        <div className={styles.badges}>
            {filteredBadges.map((badge, index) => (
                <div key={index} className={styles.badge} onClick={() => handleBadgeClick(badge.slug)}>
                    {selectedBadges.includes(badge.slug) && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="79" height="68" viewBox="0 0 79 68" fill="none" className={styles.border}>
                            <path d="M58.9622 67.5H20.0378L0.578235 34.0008L20.0378 0.5H58.9622L78.4218 34.0008L58.9622 67.5Z" stroke="#F27361" strokeWidth="4" strokeMiterlimit="10" />
                        </svg>
                    )}
                    <img src={'images/badges/' + badge.slug + '.svg'} alt={badge.title} />
                </div>
            ))}
            {Array.from({ length: uncollectedBadgesAmount }, (_, index) => (
                <div key={index} className={`${styles.badge}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="79" height="68" viewBox="0 0 79 68" fill="#FBF3ED">
                        <path d="M58.9622 67.5H20.0378L0.578235 34.0008L20.0378 0.5H58.9622L78.4218 34.0008L58.9622 67.5Z" stroke="#6E33D5" strokeMiterlimit="10" />
                    </svg>
                    <p>?</p>
                </div>
            ))}
        </div>
    )
}


function TakePhotoInterface({ handleTakeImage, handleSwitch }) {
    return (
        <div className={styles.takePhoto}>
            <button type="button" onClick={handleTakeImage} className={styles.cameraButton}></button>
            <button type="button" onClick={handleSwitch} className={styles.switchCamera}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                    <path d="M17.8365 2.66311L17.3317 0H8.66583L8.16097 2.66311H0V21.9637H26V2.66311H17.8365ZM10.7433 18.4575L10.3117 17.5437L11.5006 16.9808C9.20602 16.4532 7.48951 14.401 7.48951 11.9524H8.49922C8.49922 13.9214 9.88252 15.5722 11.7278 15.9963L10.8291 15.0447L11.5637 14.3505L13.9895 16.9202L10.7408 18.4524L10.7433 18.4575ZM16.8243 11.9575C16.8243 9.93301 15.3652 8.2468 13.4443 7.87825L14.4565 8.79961L13.7775 9.5468L11.1649 7.16893L14.2874 5.39437L14.7872 6.27282L13.6891 6.89631C16.0518 7.37087 17.8365 9.46097 17.8365 11.9575H16.8268H16.8243Z" fill="#FBF3ED" />
                </svg>
            </button>
        </div>
    )
}


function PhotoTakenInterface({ handleImageDownload, handleShare, canShare }) {
    return (
        <div className={styles.photoTaken}>
            <button type="button" onClick={handleImageDownload} className={styles.button}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                    <path d="M5.80635 9.5955L5.80632 9.59548C5.68639 9.48818 5.60554 9.35223 5.57286 9.20525C5.54019 9.05835 5.55685 8.90599 5.62109 8.76714C5.68538 8.62817 5.79477 8.50838 5.93642 8.42369C6.0781 8.33899 6.24524 8.29354 6.41663 8.29366H6.41667H10.0833H10.1406V8.23637V1.66857C10.1406 1.46819 10.2294 1.27456 10.39 1.13073C10.5508 0.986715 10.7702 0.904887 11 0.904887C11.2298 0.904887 11.4492 0.986715 11.61 1.13073C11.7706 1.27456 11.8594 1.46819 11.8594 1.66857V8.23637V8.29366H11.9167H15.5833H15.5834C15.7548 8.29354 15.9219 8.33899 16.0636 8.42369C16.2052 8.50838 16.3146 8.62817 16.3789 8.76714C16.4431 8.90599 16.4598 9.05835 16.4271 9.20525C16.3945 9.35223 16.3136 9.48818 16.1937 9.59548L16.1937 9.5955L11.6103 13.7004L11.6103 13.7004C11.5307 13.7717 11.4359 13.8286 11.3311 13.8675C11.2263 13.9065 11.1138 13.9265 11 13.9265C10.8862 13.9265 10.7737 13.9065 10.6689 13.8675C10.5641 13.8286 10.4693 13.7717 10.3897 13.7004L10.3897 13.7004L5.80635 9.5955ZM20.1667 18.9663H20.224V18.909V13.1622C20.224 12.9618 20.3128 12.7682 20.4734 12.6244C20.6342 12.4804 20.8535 12.3985 21.0833 12.3985C21.3132 12.3985 21.5325 12.4804 21.6933 12.6244C21.8539 12.7682 21.9427 12.9618 21.9427 13.1622V18.909C21.9427 19.3271 21.7573 19.7296 21.4248 20.0274C21.0921 20.3254 20.6396 20.4937 20.1667 20.4937H1.83333C1.36038 20.4937 0.907904 20.3254 0.575193 20.0274C0.24269 19.7296 0.0572917 19.3271 0.0572917 18.909V13.1622C0.0572917 12.9618 0.146113 12.7682 0.306708 12.6244C0.46751 12.4804 0.686832 12.3985 0.916667 12.3985C1.1465 12.3985 1.36582 12.4804 1.52663 12.6244C1.68722 12.7682 1.77604 12.9618 1.77604 13.1622V18.909V18.9663H1.83333H20.1667ZM11.9167 8.23637H11.974L5.76812 9.63818C5.63978 9.52336 5.55236 9.37702 5.51693 9.21768C5.4815 9.05834 5.49966 8.89317 5.5691 8.74308C5.63854 8.59299 5.75614 8.46472 5.90702 8.37452C6.05789 8.28432 6.23526 8.23624 6.41667 8.23637H10.026H10.0833V8.17907V1.66857C10.0833 1.45083 10.1799 1.24202 10.3518 1.08805C10.5237 0.934091 10.7569 0.847595 11 0.847595C11.2431 0.847595 11.4763 0.934091 11.6482 1.08805C11.8201 1.24202 11.9167 1.45083 11.9167 1.66857V8.17907V8.23637Z" fill="#6E33D5" stroke="#6E33D5" strokeWidth="0.114583" />
                </svg>
                Opslaan
            </button>
            {canShare &&
                <button type="button" onClick={handleShare} className={styles.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                        <path d="M21.0901 20.6401C21.0902 21.2422 20.9585 21.837 20.7042 22.3827C20.45 22.9285 20.0793 23.412 19.6183 23.7992C19.1573 24.1864 18.6171 24.4681 18.0356 24.6243C17.4542 24.7806 16.8456 24.8077 16.2526 24.7037C15.6596 24.5997 15.0965 24.3671 14.6029 24.0223C14.1093 23.6775 13.6972 23.2289 13.3955 22.7079C13.0938 22.1869 12.9098 21.6061 12.8564 21.0064C12.803 20.4067 12.8815 19.8026 13.0865 19.2365L7.01357 15.3349C6.43356 15.9038 5.69846 16.2888 4.90048 16.4416C4.10251 16.5943 3.27719 16.508 2.52808 16.1935C1.77897 15.8789 1.13943 15.3502 0.689676 14.6736C0.239925 13.997 0 13.2026 0 12.3901C0 11.5777 0.239925 10.7833 0.689676 10.1067C1.13943 9.43005 1.77897 8.9013 2.52808 8.58677C3.27719 8.27224 4.10251 8.18593 4.90048 8.33867C5.69846 8.49141 6.43356 8.8764 7.01357 9.44533L13.0865 5.5495C12.7387 4.59393 12.7553 3.54373 13.1329 2.59957C13.5105 1.65541 14.2228 0.883497 15.1337 0.431327C16.0445 -0.0208434 17.09 -0.121566 18.0704 0.148405C19.0507 0.418375 19.8973 1.04011 20.4482 1.89481C20.9992 2.7495 21.2159 3.77724 21.057 4.78162C20.898 5.78601 20.3746 6.69662 19.5867 7.33947C18.7988 7.98232 17.8017 8.31232 16.7858 8.26641C15.77 8.22051 14.8066 7.80193 14.0799 7.09065L8.00701 10.9922C8.33522 11.8992 8.33522 12.8925 8.00701 13.7995L14.0799 17.7011C14.6597 17.1336 15.394 16.7497 16.1909 16.5974C16.9878 16.4452 17.8119 16.5313 18.5601 16.8449C19.3083 17.1586 19.9474 17.686 20.3974 18.361C20.8474 19.0361 21.0884 19.8288 21.0901 20.6401Z" fill="#6E33D5" />
                    </svg>
                    Delen
                </button>
            }
        </div>
    )
}
