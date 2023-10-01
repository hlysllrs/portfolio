import { TypeAnimation } from 'react-type-animation'

export default function NavAnimation() {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Software Engineer',
                2000, // wait 2s before replacing "Software Engineer" with "Web Developer"
                'Web Developer',
                2000,
                'Puzzle Enthusiast',
                2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={false}
        />
    )
}
