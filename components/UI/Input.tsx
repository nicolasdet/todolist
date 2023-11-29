import { StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import colors from '../../utils/colors';
import { Ionicons } from '@expo/vector-icons';

interface IputInterface {
  label: string;
  invalid?: boolean;
  style?: any;
  textInputConfig?: any;
  onRemoveText?: () => void;
}

const Input = ({
  label,
  invalid,
  style,
  textInputConfig,
  onRemoveText,
}: IputInterface) => {
  const inputStyles: ViewStyle[] = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={inputStyles} {...textInputConfig} />
        {onRemoveText && (
          <Ionicons
            style={styles.inputIcon}
            onPress={onRemoveText}
            name="close-sharp"
            size={24}
            color="black"
          />
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  label: {
    fontSize: 12,
    color: colors.darkBlue,
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    backgroundColor: colors.grey,
    color: colors.black,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: colors.red,
  },
  inputIcon: {
    position: 'absolute',
    right: 10,
  },
  invalidInput: {
    backgroundColor: colors.red,
  },
});
