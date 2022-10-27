import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({imageURL, boxes}) => {
    return (
    <div className="center ma">
        <div className="absolute mt2">
            <img id='inputImage' src={imageURL} alt='image' width='500px' height='auto'/>
            {boxes.map(box => {
                return <div key={`box${box.topRow}${box.rightCol}`} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}> </div>
                })
            }
        </div>
    </div> 
    )
}
 
export default FaceRecognition;