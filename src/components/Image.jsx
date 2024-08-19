import React from "react";

// Define the custom Image component
export const Image=({ src, alt, width, style, height, quality = 100, loading = 'lazy', ...props }) => {
    // Inline style to handle responsive imagesz


    return  (<><img src={src} alt={alt} width={width} height={height} loading={loading} style={style}  {...props} /></>) 

};