import { KeyboardTypeOptions } from "react-native";

interface IPropsTitleWithInput {
  children?: React.ReactNode;
  title: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  value: string;
  secure?: boolean;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
}

interface IPropsTitleWithConfirmInput extends IPropsTitleWithInput {
  buttonText: string;
  hasTimer?: boolean;
}

export type { IPropsTitleWithInput, IPropsTitleWithConfirmInput };
