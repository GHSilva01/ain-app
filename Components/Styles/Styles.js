import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    width: '100%',
    height: 300,
  },
  bannerContainerImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  containerTitle: {
    textAlign: 'center',
    padding: 15,
    marginBottom: 20,
  },
  containerTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8257E5',
  },
  formContainer: {
    width: '93%',
  },
  inputArea: {
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E7E9EC',
    borderRadius: 5,
    backgroundColor: '#F7F8FA',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '95%',
    backgroundColor: '#8257E5',
    padding: 10,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#F7F8FA',
  },
});

export default styles;