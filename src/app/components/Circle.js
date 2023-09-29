import { forwardRef, useImperativeHandle, useRef } from 'react'
import gsap from 'gsap'

const Circle = forwardRef(({ size, delay }, ref) => {
    const elRef = useRef()

    useImperativeHandle(
        ref,
        () => {
            return {
                moveTo(x, y) {
                    gsap.to(elRef.current, { x, y, delay })
                },
            }
        },
        [delay]
    )

    return (
        <div
            className={`circle ${size} bg-green-500 rounded-full blur-md`}
            ref={elRef}
        ></div>
    )
})

export default Circle
