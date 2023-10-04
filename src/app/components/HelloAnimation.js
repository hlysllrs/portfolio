'use client'

import { gsap } from 'gsap'
import { useRef } from 'react'
import Cursor from './Cursor'
import useIsomorphicLayoutEffect from '../utils/isomorphicEffect'
import { Draggable } from 'gsap/all'

export default function HelloAnimation() {
    const cursorRef = useRef()

    const smiles = Array.from({ length: 124 }, (_, index) => {
        return (
            <div
                className="smile md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-none rounded-full text-black"
                key={index}
            >
                ☺︎
            </div>
        )
    })

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(Draggable)
        const { innerWidth, innerHeight } = window
        cursorRef.current.moveTo(innerWidth / 2, innerHeight / 2)

        const onMove = ({ clientX, clientY }) => {
            cursorRef.current.moveTo(clientX, clientY)
            checkHit()
        }

        window.addEventListener('pointermove', onMove)

        return () => window.removeEventListener('pointermove', onMove)
    }, [])

    const checkHit = () => {
        gsap.utils.toArray('.smile').forEach((elem) => {
            const tl = gsap.timeline()
            if (Draggable.hitTest(elem, '.circle')) {
                tl.to(elem, {
                    scale: 1,
                    duration: 0.75,
                    color: '#f6f6f6',
                })
            } else {
                tl.to(elem, {
                    scale: 0,
                    duration: 1.5,
                    color: 'black',
                })
            }
        })
    }

    return (
        <main className="md:flex max-h-full w-full items-end justify-start hidden">
            <div className="fixed h-full w-full pointer-events-none">
                <Cursor size="lg" ref={cursorRef} delay={0.2} />
            </div>
            <div className="flex-1"></div>
            <div className="grid grid-cols-[repeat(18,_minmax(0,_1fr))] md:gap-x-2 max-h-[39vw] w-full items-center justify-between flex-wrap [mask-image:url('../../public/images/hello.svg')] [mask-repeat:no-repeat] [mask-position:bottom left] overflow-hidden bg-black">
                {smiles}
            </div>
        </main>
    )
}
