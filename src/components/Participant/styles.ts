import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10
  },
  content: {
    flex: 1,
    backgroundColor: '#1F1E25',
    borderRadius: 6,
    justifyContent: 'center',
    height: 56
  },
  name: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 16
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#E23C44',
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  }
})