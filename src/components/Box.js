import React from 'react'
import { Suspense } from 'react'
import { Mesh } from 'three'
import { useLoader } from 'react-three-fiber'
import { TextureLoader } from 'three'
import image from './image.jpg'
export default function () {

    const colorMap=useLoader(TextureLoader,image)
  return (
    <mesh rotation={[90,0,90]}>
        <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
        {/* <meshStandardMaterial map={colorMap}></meshStandardMaterial> */}
        <meshNormalMaterial attach="material"></meshNormalMaterial>
    </mesh>
  )
}
