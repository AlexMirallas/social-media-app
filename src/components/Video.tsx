"use client"

import { IKVideo } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

import React from 'react';
type VideoTypes ={
    path: string,
    className?: string,
}

function Video({path,className}: VideoTypes) {

    return (
        <IKVideo
            urlEndpoint={urlEndpoint}
            path={path}
            className={className}
            transformation={[
                {width: "1920", height: "1080", q: "90"},
                { raw: "l-text,Jédy,fs-50,l-end" }
            ]}
            controls
        />
    );
}

export default Video;