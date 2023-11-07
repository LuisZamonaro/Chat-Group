import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`
    

    @media(max-width: 765px) {
        display: ${({ handlemenu }) => (handlemenu == 1 ? "none" : "block")};
    }
`