import { View, Image } from 'react-native';

import logo from "../../../assets/logo.png"
import { styles } from './styles';
import { Heading } from '../../components/Heading';

function Login({navigation}) {
    return (
      <View style={styles.container}>
        <Image source={logo} resizeMethod='scale' />
        <Heading title='Sysmap Parrot' subtitle='Faça login e começe a usar!' />
      </View>
    );
}

export default Login