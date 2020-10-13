import React from 'react';
import {Link} from 'react-router-dom';
import {Map, TileLayer} from 'react-leaflet';
import {FiPlus} from 'react-icons/fi';

import '../styles/pages/maps.css';
import 'leaflet/dist/leaflet.css';

import localIcon from '../images/Local.svg';

function Maps() {
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

            </Map>

            <Link to="" className="create">
                <FiPlus size={32} color="#FFF" />

            </Link>
        </div>

    );
}

export default Maps;