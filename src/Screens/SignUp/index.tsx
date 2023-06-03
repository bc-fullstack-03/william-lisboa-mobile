import { Text, TouchableOpacity } from 'react-native';
import AuthForm from '../../components/AuthForm';
import { styles } from './styles';
import { Context as AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import Spacer from '../../components/Spacer';

function SignUp({navigation}) {
  const { register, errorMessage } = useContext(AuthContext)
  
  return (
    <>
      <AuthForm
        authFormSubtitle='Registre-se agora mesmo!'
        submitFormButtonText='Cadastrar'
        submitFormButtonAction={register}
      />
      <TouchableOpacity 
        onPress={()=> { navigation.navigate("Login")}}
      >
        <Text style={styles.link}>Já possui conta? Entre agora!</Text>
      </TouchableOpacity>
      {errorMessage && (
        <Spacer>
          <Text style={styles.error}>{errorMessage}</Text>
        </Spacer>
      )}
    </>
  );
}

export default SignUp