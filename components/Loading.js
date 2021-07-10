
import {Circle} from 'better-react-spinkit'

function Loading() {
    return (
        <center style={{display:'grid', height: '100vh', placeItems: 'center'}}>
            <div>
                <img src="https://image.flaticon.com/icons/png/512/124/124034.png"
                alt=""
                style={{marginBottom:10}}
                height={200} 
                />
            </div>
            <Circle color="#3CBC28" size={60} />
        </center>
    )
}

export default Loading
