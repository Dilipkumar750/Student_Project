import React from "react";

export const TextInput = (type ,onChangeText,className ,style) =>{
    return(<input type={type} onChange={onChangeText} className={className} style={style}/>)
}