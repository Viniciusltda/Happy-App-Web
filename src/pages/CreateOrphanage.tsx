import React, {useState, FormEvent, ChangeEvent} from "react";
import {useHistory} from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import { Map, Marker, TileLayer } from 'react-leaflet';
import {LeafletMouseEvent} from 'leaflet';

import Sidebar from '../components/Sidebar';
import happyMapIcon from '../utils/mapIcon';
import api from '../services/api';

import '../styles/pages/create-orphanage.css';

export default function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [open_hours, setOpen_hours] = useState('');
  const [open_on_weekends, setOpen_on_weekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImg, setPreviewImg] = useState<string[]>([]);

  
  function handleMapClick(e: LeafletMouseEvent) {
    const {lat, lng} = e.latlng;
    
    setPosition({latitude: lat, longitude: lng});

  }

  function handleImages(e: ChangeEvent<HTMLInputElement>) {
    if(!e.target.files){
      return;
    }

    const Images = Array.from(e.target.files);

    setImages(Images);

    const ImgPreview = Images.map(image => {
      return URL.createObjectURL(image);

    });

    setPreviewImg(ImgPreview);

  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const {latitude, longitude} = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('open_hours', open_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(img => {
      data.append('images', img);

    });

    await api.post('orphanages', data);

    alert('Cadastro feito com sucesso!');

    history.push('/app');

  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-20.0793302, -51.0879282]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              { position.latitude != 0 && 
                <Marker 
                  interactive={false} 
                  icon={happyMapIcon} 
                  position={[position.latitude, position.longitude]}
                />
              }

            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>

              <textarea 
              id="about" 
              maxLength={300} 
              value={about} 
              onChange={e => setAbout(e.target.value)} 
              />

            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImg.map(img => {
                  return (
                    <img key={img} src={img} alt={img} />
                  )
                })}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>


              </div>

              <input multiple type="file" id="image[]" onChange={handleImages} />

            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>

              <textarea 
              id="instructions" 
              value={instructions} 
              onChange={e => setInstructions(e.target.value)}
              />

            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horários de Visita</label>

              <input 
              id="opening_hours" 
              value={open_hours} 
              onChange={e => setOpen_hours(e.target.value)}
              />

            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende em Fins de Semana</label>

              <div className="button-select">

                <button 
                type="button" 
                className={open_on_weekends ? 'active' : ''}
                onClick={() => setOpen_on_weekends(true)}
                >Sim</button>

                <button 
                type="button" 
                className={!open_on_weekends ? 'active' : ''}
                onClick={() => setOpen_on_weekends(false)}
                >Não</button>

              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}
