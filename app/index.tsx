import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// 만들 것
// 1. 할일 추가 기능
// ㅇ  ㄴ 업로드될 투두 리스트칸 <= 변화가 가능한 변수여야함
//   ㄴ 작성할 박스
//   ㄴ 만들기 버튼
//     ㄴ 작성한 박스의 내용이 투두리스트에 추가되도록 함

const style = StyleSheet.create({
  newTodoTextInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

type TODOSType = [{ id: string; todo: string }];

type TodoListProps = { todo: string };

const TodoList = ({ todo }: TodoListProps) => (
  <View>
    <Text>{todo}</Text>
  </View>
);

const [newTodoTextInputOn, setNewTodoTextInputOn] = useState('');

export default function Index() {
  const [TODOS, setTODOS] = useState<TODOSType>([
    { id: 'a', todo: 'Add any Todo' },
  ]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title='Add' onPress={() => {}} />
      <FlatList
        data={TODOS}
        renderItem={({ item }) => <TodoList todo={item.todo} />}
        keyExtractor={(item) => item.id}
      />

      <TextInput
        style={style.newTodoTextInput}
        onChangeText={setNewTodoTextInputOn}
        placeholder='Input any todo'
        value={newTodoTextInputOn}
      />
    </View>
  );
}
