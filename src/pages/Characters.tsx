import { useState, useEffect } from 'react';
import { Character, getCharacters } from '../data/characters';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonAvatar
} from '@ionic/react';
import './Characters.css';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const chars = await getCharacters();
      setCharacters(chars);
    };
    fetchCharacters();
  }, []);

  return (
    <IonPage id="characters-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Futurama Characters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Futurama Characters
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {characters.map(character => (
            <IonItem key={character.id}>
              <IonAvatar slot="start">
                <img src={character.image} alt={character.name} />
              </IonAvatar>
              <IonLabel>
                <h2>{character.name}</h2>
                <p>Estado: {(() => {
                  const status = character.status?.toLowerCase() || '';
                  if (status.includes('alive')) return 'Vivo';
                  if (status.includes('dead')) return 'Muerto';
                  return character.status;
                })()}</p>
                <p>Género: {character.gender === 'MALE' ? 'Masculino' : character.gender === 'FEMALE' ? 'Femenino' : character.gender}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Characters;
