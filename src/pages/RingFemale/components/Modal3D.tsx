'use client'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

export const Modal3D = () => {
  // Khai báo ref với kiểu dữ liệu của Three.js Group
  const groupRef = useRef<THREE.Group>(null)

  // Load model và định nghĩa kiểu dữ liệu trả về
  const { scene } = useGLTF('/Diamond_desk.glb')

  useLayoutEffect(() => {
    if (!groupRef.current) return

    // Tạo Timeline đồng bộ với thanh cuộn
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container-3d', // Class của div bọc ngoài cùng
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // Độ trễ nhẹ giúp chuyển động mượt hơn
      },
    })

    // Animation: Xoay và di chuyển
    tl.to(groupRef.current.rotation, {
      y: Math.PI * 2, // Xoay 360 độ
      ease: 'none',
    }).to(
      groupRef.current.position,
      {
        x: -1.5,
        z: 1,
        ease: 'power1.inOut',
      },
      0,
    ) // Tham số 0 giúp chạy song song với animation trước
    return () => {
      // Cleanup ScrollTrigger khi component bị unmount
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <primitive ref={groupRef} object={scene} scale={2} position={[0, -1, 0]} />
  )
}

useGLTF.preload('/Diamond_desk.glb')
