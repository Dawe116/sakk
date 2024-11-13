import React,{useState, useEffect}  from "react";
import {useParams ,useNavigate,Link, NavLink } from "react-router-dom";

export const ChessMod = () => {
    const paras = useParams();
    const id = paras.chessId;
    const navigate = useNavigate();
    const [chess, setChess] = useState({
        name: "",
        birth_date: "",
        wold_ch_won: "",
        profile_url: "",
        image_url: ""
    });
    


    useEffect(() => {
        setLoading(true);
        fetch("http://chess.sulla.hu/chess/" + id)
        .then(response => response.json())
        .then(sakkos => {setChess(sakkos);})
        .catch(hiba => console.error(hiba))
        .finally(() => setLoading(false));
    }, [id]);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setChess(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetch('')
    }


    
    return(
        <div className="p-5 m-auto text-center content bg-lavender">
            <div>
                <h2>Sakkosok</h2>
                     <form>
                        <div className="card col-sm3 d-inline-block m-1 p-2">
                            
                                <div className="form-group row pb-3">
                                    <label className="col-sm-3 col-form-label">Sakkozó neve:</label>
                                    <div className="col-sm-9">
                                        <input type="text" name="name" className="form-control" defaultValue={chess.name} onChange={handleInputChange} />
                                    </div>
                            </div>
                        </div>

                        <div className="card col-sm3 d-inline-block m-1 p-2">
                            
                                <div className="form-group row pb-3">
                                    <label className="col-sm-3 col-form-label">Sakkozó dátum:</label>
                                    <div className="col-sm-9">
                                        <input type="text" name="name" className="form-control" defaultValue={chess.name} onChange={handleInputChange} />
                                    </div>
                            </div>
                        </div>

                        <div className="card col-sm3 d-inline-block m-1 p-2">
                            
                                <div className="form-group row pb-3">
                                    <label className="col-sm-3 col-form-label">Nyert Világbajnokságok</label>
                                    <div className="col-sm-9">
                                        <input type="text" name="name" className="form-control" defaultValue={chess.name} onChange={handleInputChange} />
                                    </div>
                            </div>
                        </div>

                        <div className="card col-sm3 d-inline-block m-1 p-2">
                            
                                <div className="form-group row pb-3">
                                    <label className="col-sm-3 col-form-label">Profil Url: </label>
                                    <div className="col-sm-9">
                                        <input type="text" name="name" className="form-control" defaultValue={chess.name} onChange={handleInputChange} />
                                    </div>
                            </div>
                        </div>

                        <div className="card col-sm3 d-inline-block m-1 p-2">
                            
                            <div className="form-group row pb-3">
                                <label className="col-sm-3 col-form-label">Kép Url: </label>
                                <div className="col-sm-9">
                                    <input type="text" name="name" className="form-control" defaultValue={chess.name} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-succes">Mentés</button>

                    </form>
                </div>
            </div>
                
    );
    
}
