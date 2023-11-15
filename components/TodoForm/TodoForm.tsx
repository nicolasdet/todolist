import { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../UI/Input';
import SubmitButton from '../UI/SubmitButton';
import { TodoContext } from '../../store/todo/todo-context';

interface TodoFormProps {
  defaultValues?: {
    title: string,
  };
  isEditing?: boolean;
  newsID?: string;
  newsTitle?: string;
}

const TodoForm = ({
  defaultValues,
  isEditing,
  newsID,
  newsTitle,
}: TodoFormProps) => {
  const todoCtx = useContext(TodoContext);
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    title: {
      value: isEditing ? newsTitle : '',
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
    if (isEditing) {
      const updatedNews = {
        id: newsID,
        title: inputs.title.value,
      };
      todoCtx.updateTodo(updatedNews);
      setInputs({ title: { value: '', isValid: true } });
      return navigation.goBack();
    }
    // Effectuer validation
    if (inputs.title.isValid) {
      todoCtx.addTodo(inputs.title.value);
      setInputs({ title: { value: '', isValid: true } });
      return navigation.goBack();
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
