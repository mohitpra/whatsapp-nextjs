import Image from 'next/image'
import {Circle} from 'better-react-spinkit'
import styled from "styled-components"

function Loading() {
    return (
        <center style={{display:'grid', height: '100vh', placeItems: 'center'}}>
            <div>
                <ImageContainer>
                <Image src="https://image.flaticon.com/icons/png/512/124/124034.png"
                alt=""
                layout="fill" 
                />
                    </ImageContainer>
            </div>
            <Circle color="#3CBC28" size={60} />
        </center>
    )
}

export default Loading

const ImageContainer = styled.div`
  position: relative;
  height:200px;
  width:200px;
  margin-bottom: 25px;
`;
