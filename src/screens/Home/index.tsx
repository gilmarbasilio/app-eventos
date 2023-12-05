import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, FlatList } from 'react-native';

import {useState} from 'react'

import styles from './styles'
import Participant from '../../components/Participant';

export default function Home() {
  const [partcipantName, setParticipantName] = useState<string>();
  const [partcipants, setParticipants] = useState<string[]>([]);


  const handfleParticipantAdd = () => {
    if(!partcipantName) {
      return Alert.alert('Campo Vazio', 'Digite o nome do participante antes de adicionar!')
    }

    if(partcipants.includes(partcipantName)) {
      return Alert.alert('Participante existente', 'Já existe um participante na lista')
    } 

    setParticipants(prevState => [...prevState, partcipantName]);
    setParticipantName('')
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(partcipant => partcipant !== name))
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])  
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor='#888'
          onChangeText={(text) => setParticipantName(text)}
          value={partcipantName}
        />

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7} 
          onPress={handfleParticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {/* <ScrollView>
        {partcipants.map((partcipant) => (
          <Participant 
            key={partcipant} 
            name={partcipant} 
            onRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView> */}
      <FlatList 
        data={partcipants}
        renderItem={({item: partcipant}) => (
          <Participant 
            key={partcipant} 
            name={partcipant} 
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}