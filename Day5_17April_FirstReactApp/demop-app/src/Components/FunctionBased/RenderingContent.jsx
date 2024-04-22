import React from 'react';
import Counter from './Counter'
import DynamicContent from './DynamicContent'

const RenderingContent=({isLoggedIn})=>{
    const Component =isLoggedIn ? Counter : DynamicContent;
    return <Component/>
    }
    export default RenderingContent