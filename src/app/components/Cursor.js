import { forwardRef, useImperativeHandle, useRef } from 'react'
import gsap from 'gsap'

const Cursor = forwardRef(({ size, delay }, ref) => {
    const elRef = useRef()

    useImperativeHandle(
        ref,
        () => {
            return {
                moveTo(x, y) {
                    gsap.to(elRef.current, { x, y })
                },
            }
        },
        [delay]
    )

    return (
        <div
            className="circle bg-transparent h-24 w-24 rounded-full z-5"
            ref={elRef}
        ></div>
    )
})

export default Cursor
