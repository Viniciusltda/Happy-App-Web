import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import {FiPlus, FiArrowRight} from 'react-icons/fi';

import '../styles/pages/maps.css';

import happyMapIcon from '../utils/mapIcon';
import api from '../services/api';

import localIcon from '../images/Local.svg';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function Maps() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);

        });
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={localIcon} alt="Ícone de Marcação"/>

                    <h2>Escolha um orfanato no mapa.</h2>

                    <p>Muitas crianças estão esperando a sua visita.</p>

                </header>

                <footer>
                    <strong>Aparecida do Taboado</strong>
                    <span>Mato Grosso do Sul</span>

                </footer>
            </aside>

            <Map center={[-20.0793302, -51.0879282]} zoom={15} style={{width: '100%', height: '100%'}}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map(orphanage => {
                    return (
                        <Marker key={orphanage.id} position={[orphanage.latitude, orphanage.longitude]} icon={happyMapIcon}>
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="popup">
                                {orphanage.name}

                                <Link to={`/orphanages/${orphanage.id}`}><FiArrowRight size={20} color="#FFF" /></Link>

                            </Popup>

                        </Marker>
                    )
                })}

            </Map>

            <Link to="/orphanages/create" className="create">
                <FiPlus size={32} color="#FFF" />

            </Link>
        </div>

    );
}

export default Maps;