import { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from './Input';
import SubmitButton from './SubmitButton';
import { TodoContext } from '../../store/todo/todo-context';

const TodoForm = ({ defaultValues }) => {
  const todoCtx = useContext(TodoContext);
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    title: {
      value: defaultValues ? defaultValues.title : '',
      isValid: true,
    },
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const onSubmit = () => {
    // Effectuer validation
    if (inputs.title.isValid) {
      todoCtx.addTodo({ title: inputs.title.value });
      setInputs({ title: { value: '', isValid: true } });
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <Input
        style={styles.rowInput}
        label="Tache : "
        invalid={!inputs.title.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, 'title'),
          value: inputs.title.value,
        }}
      />
      <SubmitButton onPress={onSubmit} />
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  rowInput: {
    width: '100%',
    flex: 1,
  },
  container: {
    width: '80%',
    flex: 1,
    alignItems: 'center',
  },
});
