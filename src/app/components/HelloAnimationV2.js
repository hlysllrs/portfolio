'use client'

import { gsap } from 'gsap'
import { useRef } from 'react'
import Circle from './Circle'
import useIsomorphicLayoutEffect from '../utils/isomorphicEffect'
import { Draggable } from 'gsap/all'

export default function Home() {
    const circleRef = useRef()

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(Draggable)
        const { innerWidth, innerHeight } = window
        circleRef.current.moveTo(innerWidth / 2, innerHeight / 2)

        const onMove = ({ clientX, clientY }) => {
            circleRef.current.moveTo(clientX, clientY)
            gsap.set(circleRef, { autoAlpha: 1 })
            checkHit()
        }

        window.addEventListener('pointermove', onMove)

        return () => window.removeEventListener('pointermove', onMove)
    }, [])

    // const addCircleRef = (ref) => {
    //     if (ref) {
    //         circleRef.current.push(ref)
    //     }
    // }

    const checkHit = () => {
        gsap.utils.toArray('.smile').forEach((elem) => {
            const tl = gsap.timeline()
            if (Draggable.hitTest(elem, '.circle')) {
                tl.to(elem, { scale: 1 })
            } else {
                tl.to(elem, { scale: 3 })
            }
        })
    }
    return (
        <main className="flex max-h-full items-center justify-between p-24 flex-wrap [mask-image:url('../../public/images/hello.svg')] [mask-repeat:no-repeat] overflow-hidden">
            <Circle size="lg" ref={circleRef} delay={0.2} />
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
            <h1 className="smile text-8xl font-bold">☺︎</h1>
        </main>
    )
}
