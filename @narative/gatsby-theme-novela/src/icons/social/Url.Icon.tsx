import React from 'react';
import { Icon } from '@types';

const UrlIcon: Icon = ({ fill = "white" }) => (

  <svg xmlns="http://www.w3.org/2000/svg" width="20"
    height="18" viewBox="0 0 30 30"><path fill={fill} d="M10.05 25.36a4 4 0 0 1-2.83-1.17L5.81 22.78a4 4 0 0 1 0-5.66l2.83-2.83a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L7.22 18.54a2 2 0 0 0 0 2.82l1.42 1.42a2 2 0 0 0 2.82 0L14.29 20a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.41l-2.83 2.83A4 4 0 0 1 10.05 25.36zM20.66 16a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l2.83-2.83a2 2 0 0 0 0-2.82L21.36 7.22a2 2 0 0 0-2.82 0l-2.83 2.83a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.41l2.83-2.83a4.1 4.1 0 0 1 5.66 0l1.41 1.41a4 4 0 0 1 0 5.66l-2.83 2.83A1 1 0 0 1 20.66 16z" /><path fill={fill} d="M11.46,19.54a1,1,0,0,1-.7-.3,1,1,0,0,1,0-1.41l7.07-7.07a1,1,0,0,1,1.41,1.41l-7.07,7.07A1,1,0,0,1,11.46,19.54Z" /></svg>
)
export default UrlIcon;