import React, {useState, useEffect} from 'react'
import Header from './Header';
import axios from 'axios'

export default function Modal(props) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(props.modalText){
            setLoading(true);
            axios.get("https://api.spacexdata.com/v4/"+props.modalText.toLowerCase()).then(res => {
                setLoading(false);
                setData(res.data);
                // console.log(data);
            }).catch( error => {
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
                    <span className="Headline__Icon"></span>
                </div>
            </div>

            <Header/>
            {loading && <p><br/><br/><br/>It's loading time</p>}
            { data.map( (o) => <p>{o.type}</p> ) }
        </div>
    )
}
