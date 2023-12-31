import { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../UI/Input';
import SubmitButton from '../UI/SubmitButton';
import Color from '../../utils/colors';
import { TodoContext } from '../../store/todo/todo-context';
import { Todo } from '../../store/todo/todo-context';
import DatePicker from './DatePicker';

interface TodoFormProps {
  defaultValues?: {
    title: string;
  };
  isEditing?: boolean;
  todoID?: string;
  todo?: Todo;
}

const TodoForm = ({
  defaultValues,
  isEditing,
  todoID,
  todo,
}: TodoFormProps) => {
  const todoCtx = useContext(TodoContext);
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({
    title: {
      value: isEditing ? todo.title : '',
      isValid: true,
    },
    content: {
      value: isEditing ? todo.content : '',
      isValid: true,
    },
    date: {
      value: isEditing ? todo.date : new Date().toISOString().slice(0, 10),
      isValid: true,
    },
  });

  const inputChangedHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const onRemove = () => {
    todoCtx.deleteTodo(todoID);
    navigation.goBack();
  };

  const onSubmit = () => {
    if (isEditing) {
      const updatedNews = {
        id: todoID,
        title: inputs.title.value,
        content: inputs.content.value,
        date: inputs.date.value,
      };
      todoCtx.updateTodo(updatedNews);
      setInputs({ ...inputs, title: { value: '', isValid: true } });
      return navigation.goBack();
    }
    // Effectuer validation
    if (inputs.title.isValid) {
      todoCtx.addTodo({
        title: inputs.title.value,
        content: inputs.content.value,
        date: inputs.date.value,
      });
      setInputs({ ...inputs, title: { value: '', isValid: true } });
      return navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <DatePicker
        updateDate={inputChangedHandler}
        dateToDisplay={inputs.date.value}
      />
      <Input
        style={styles.rowInput}
        label="Tache : "
        invalid={!inputs.title.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, 'title'),
          value: inputs.title.value,
        }}
      />

      <Input
        style={styles.rowInput}
        label="Contenu : "
        invalid={!inputs.content.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, 'content'),
          value: inputs.content.value,
          multiline: true,
        }}
      />
      <SubmitButton onPress={onSubmit} />
      <SubmitButton
        onPress={onRemove}
        label="Supprimer"
        extraStyles={styles.removeButtonStyle}
      />
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  rowInput: {
    width: '100%',
  },
  container: {
    width: '80%',
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  removeButtonStyle: {
    backgroundColor: Color.orange,
    marginVertical: 5,
  },
});
