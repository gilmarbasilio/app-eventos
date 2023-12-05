import { StyleSheet } from 'react-native'
import { COLOR_WHITE } from './constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 60
  },
  eventName: {
    color: COLOR_WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  form: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
    gap: 10
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    height: 56,
    color: COLOR_WHITE,
    padding: 16,
    fontSize: 16,
    borderRadius: 6
  },
  buttonText: {
    color: COLOR_WHITE,
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
})

export default styles