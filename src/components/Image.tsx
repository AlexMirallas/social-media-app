"use client"

import React from 'react';
import { IKImage } from "imagekitio-next";

type ImageType ={
    path:string;
    width?:number;
    height?:number;
    alt?:string;
    className?:string;
    tr?: boolean;
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

function Image({path,width,height,alt,className, tr}: ImageType) {
    return (
        <IKImage
            urlEndpoint={urlEndpoint}
            path={path}
            {...(tr?
                {transformation:[{width:`${width}`, height:`${height}`}]}
                : {width:width, height: height})}
            alt={alt}
            className={className}
        />
    );
}

export default Image;