import { useContext, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TodoCard from './TodoCard';
import { TodoContext } from '../../store/todo/todo-context';
import { isTablet } from '../../utils/deviceInfo';
import { SortObjByDate } from '../../utils/dates';
import TodoFilterElement from './TodoFilterElement';

type DateFilterForTodoList = 'All' | 'Today';

const TODAY = 'Today';
const ALL = 'All';

const TodoList = () => {
  const [filter, setFilter] = useState('All');
  const todoCtx = useContext(TodoContext);
  const today = new Date();

  const filterdTodosByDate = SortObjByDate([...todoCtx.todos]);
  const filterTodosByTodayDate = [
    ...todoCtx.todos.filter(
      (todo) => todo.date === today.toISOString().slice(0, 10)
    ),
  ];

  const onPressFilter = (value: DateFilterForTodoList) => {
    if (value === TODAY) {
      setFilter(TODAY);
      return;
    }
    return setFilter(ALL);
  };

  return (
    <View style={styles.container}>
      <View style={styles.MenuDropDown}>
        <TodoFilterElement label={ALL} onPress={() => onPressFilter(ALL)} />
        <TodoFilterElement label={TODAY} onPress={() => onPressFilter(TODAY)} />
      </View>
      <FlatList
        data={filter === TODAY ? filterTodosByTodayDate : filterdTodosByDate}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoCard {...item} />}
        numColumns={isTablet ? 2 : 1}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  MenuDropDown: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
