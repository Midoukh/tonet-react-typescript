import React, {FC} from 'react'
import {Box} from '@chakra-ui/react'
import ReactImage from "../../Image/Image";


const Item : FC = ({src, name = "photo"}) => {
    return (
        <Box>
            <ReactImage />
        </Box>
    )
}

export default Item