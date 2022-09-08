import { Text, TouchableOpacity, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons/'
import { styles } from "./styles"
import CheckBox from 'expo-checkbox';
import { useState } from "react"

type Props = {
  name: string,
  onRemove: () => void
}

export function ToDo({ name, onRemove }: Props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={styles.container}>

      <CheckBox
        style={styles.checkBox}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onRemove}
      >
        <FontAwesome name="trash" color={'#808080'} />
      </TouchableOpacity>
    </View>
  )
}