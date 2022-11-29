import React, {useState} from "react";


function Recommendation(props) {
    const [chunks, setChunks] = useState(['Nochunks'])
    const [cityCode, setcityCode] = useState('MEX')
    const [travelerCountryCode, setTravelerCountryCode] = useState('FR')

    let formData = JSON.stringify({
        'cityCodes':cityCode,
        'travelerCountryCode':travelerCountryCode
    });

    return (


        <div>
            <input type="text" onChange={(event, value) => {setcityCode(event.target.value)}}></input>
            <input type="text" onChange={(event, value) => {setTravelerCountryCode(event.target.value)}}></input>
            <input type="submit" onClick={(event, value) => {
                fetch(' http://127.0.0.1:5000/', {

                    method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: formData
            
                })
                .then(response => {
                    response.json().then(data => {
                        setChunks(data)
                    })
                })
            }}/>
            {chunks.map((data)=>(
                <p>{data['name']}</p>
            ))}
        </div>
    );
}

export default Recommendation;