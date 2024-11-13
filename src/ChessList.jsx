import React,{ useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const ChessList = () => {
    const [chesses, setChess] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://chess.sulla.hu/chess")
        .then(response => response.json())
        .then(sakkosok => {
            setChess(sakkosok);})
        .catch(hiba => console.error(hiba))
        .finally(() => setLoading(false));
    }, []);

    return(
        <div className="p-5 m-auto text-center content bg-ivory">
                {loading ? (<div className="spinner-border"></div>) : 
                (<div > <h2>Sakkosok</h2>
                    {
                        chesses.map((chess, index) => (
                            <div className="card col-sm3 d-inline-block m-1 p-2" key={index}>
                                <p className="text-dark">Sakkozó neve: {chess.name}</p>
                                <p className="text-danger">Születési éve: {chess.birth_date}</p>
                                <p className="text-danger"> Megnyert világbajnokságai: {chess.wold_ch_won}</p>
                                <div className="card-body">

                                    <Link to={chess.profile_url} >Profil Link</Link><br/>
                                    <Link key="x" to ={"/chess/" + chess.id} >
                                    <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400*800"} alt={chess.name} className="img-fluid" style={{width: "200px"}}  /> </Link><br/>
                                </div>
                                <link to={"/chess-mod"}
                            </div>
                ))}
            </div>
                )}
        </div>
    );
}