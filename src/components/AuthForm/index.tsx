import { KeyboardAvoidingView, Platform , Image} from "react-native";
import { Envelope, Lock } from "phosphor-react-native";

import Button from "../Button";
import Spacer from "../Spacer";
import { Input } from "../Input";
import { Heading } from "../Heading";

import THEME from "../../THEME";
import { styles } from "./styles";
import logo from '../../../assets/logo.png'
import { Auth } from "../../Model/Auth";
import { useState } from "react";

interface AuthFormProps {
  authFormSubtitle: string;
  submitFormButtonText: string;
  submitFormButtonAction: (auth: Auth) => void;
}

function AuthForm(props: AuthFormProps){
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

    return (
        <KeyboardAvoidingView
         behavior={ Platform.OS === "ios" ? "padding" : 'position' }
         style={styles.container}
         contentContainerStyle={styles.containerPosition}
        >
          <Image source={logo} resizeMethod='scale' />
          <Heading title='Sysmap Parrot' subtitle={props.authFormSubtitle} />
          <Input.Root>
            <Input.Icon>
              <Envelope color={THEME.COLORS.INPUT} />
              <Input.Input 
                value={user} 
                onChangeText={setUser} 
                placeholder='Digite seu e-mail' 
                autoCapitalize='none' 
                autoCorrect={false}
              />
            </Input.Icon>
          </Input.Root>
          <Spacer />
          <Input.Root>
            <Input.Icon>
              <Lock color={THEME.COLORS.INPUT} />
              <Input.Input 
               value={password} 
               onChangeText={setPassword}
               placeholder='********' 
               autoCapitalize='none' 
               autoCorrect={false}
               secureTextEntry
              />
            </Input.Icon>
          </Input.Root>
          <Spacer />
          <Button title={props.submitFormButtonText} onPress={() => {
                props.submitFormButtonAction({ user, password })
            }}/>
        </KeyboardAvoidingView>
    )
}

export default AuthForm;