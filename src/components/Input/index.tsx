import { View, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';
import THEME from '../../THEME';

interface TextInputRootProps {
  children: React.ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return <View style={styles.container}>{props.children}</View>;
}

interface TextInputInputProps extends TextInputProps {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={THEME.COLORS.INPUT}
      {...props}
    ></TextInput>
  );
}

interface TextInputIconProps {
  children: React.ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <>{props.children}</>;
}

export const Input = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};