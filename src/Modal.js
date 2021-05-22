import React, {useState, useEffect} from 'react'
import Header from './Header';
import axios from 'axios'

export default function Modal(props) {

    const column_labels = {
        "Capsules": ["Type", "Status"],
        "Crew": ["Name", "Status"],
        "Rockets": ["Name", "Type"],
        "Starlink": ["Name", "Status"]
    }

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(props.modalText){
            setLoading(true);
            setError(false);
            axios.get("https://api.spacexdata.com/v4/"+props.modalText.toLowerCase()).then(res => {
                let labels = column_labels[props.modalText]
                setLoading(false);
                setData(res.data.map((d) => {
                    return {
                        first: d[labels[0].toLowerCase()],
                        second: d[labels[1].toLowerCase()]
                    }
                }));

                // console.log(res.data);
            }).catch( error => {
                setLoading(false);
                setError(true);
                console.log(error);
            });    
        }

    }, [props.modalText])

    const setModal = () => {
        props.setModalVisible(false)
    };

    return (
        <div className={props.modalVisible ? 'Modal' : 'Modal Modal--hidden'}>
            <div className="Headline">{props.modalText}
                <div className="Headline__Button" onClick={setModal}>
                    <span className="Headline__Icon"></span>
                </div>
            </div>

            {props.modalText && <Header column_labels={column_labels[props.modalText]} data={data} setData={setData}/>}

            {loading && <div className="loader loader--more">
                            <div className="loader__box">
                                <span></span><span></span><span></span><span></span><span></span>
                            </div>
                            <div className="loader__text">Loading</div>
                        </div>
            }

            {error && <div className="ErrorMessage"><p>Something went wrong. Try again later!</p></div>}
            
            {!loading && !error &&  
                <>
                    <div className="Container">
                        { data.map( (o) => 
                            <div className="Row">
                                <div className="Row__Cell">{o.first}</div>
                                <div className="Row__Cell">{o.second}</div>
                            </div> ) }
                    </div>
                    <div className="Container__Gradient"/>
                </>
            }
        </div>
    )
}
