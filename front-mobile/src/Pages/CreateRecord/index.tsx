import react from'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const CreateRecord = () => {
return (
    <>
    <Header/>
    <Text style={styles.text}>Hello CreateRecord</Text>
    </>
);
};


const styles = StyleSheet.create({
    container: {
      color: '#fff',
      fontSize: 50,
      textAlign: 'center',
      marginTop: 100
     }
  });



export default CreateRecord;