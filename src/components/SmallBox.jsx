import React from "react";
import View from "./View";
import { Image } from "./Image";

function SmallBox({image,title}) {
  return (
      <View style={{display:'grid',justifyItems:'center',alignItems:'center',border: "1px solid rgba(0, 0, 0, 0.16)",
        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",height:'100%'}}>
        <Image src={image} style={{width:'60%',height:'70%'}} />
        <h6 style={{fontSize:'0.6rem'}}>{title}</h6>
      </View>
  )
}
export default SmallBox;
