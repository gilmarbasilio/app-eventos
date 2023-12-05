import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

type Props = {
  name: string;
  onRemove: (name: string) => void;
}

export default function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>

    </View>
  )
}
