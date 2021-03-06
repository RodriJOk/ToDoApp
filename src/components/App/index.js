import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCouter/TodoCouter';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoForm } from '../TodoForm/TodoForm';
import { CreateTodoButton } from '../CreateToDoButton/CreateToDoButton';
import { Modal } from '../Modal';
import { TodoError } from '../TodoError/index';
import { TodoLoading } from '../TodoLoading/index';
import { EmptyTodos } from '../EmptyTodos/index';
import { ChangeAlert } from '../ChangeAlert/index';

 function App() {
  const {
    states, 
    stateUpdaters
  } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
  } = states;

  const {
    setOpenModal,
    addTodo,
    deleteTodo,
    setSearchValue,
    completeTodo,
    sincronizeTodos
  } = stateUpdaters;


   return (
      <>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
          />
          
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />

      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={()=> <TodoError/>}
        onLoading={()=> <TodoLoading/>}
        onEmptyTodos={()=> <EmptyTodos/>}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        >
          {todo =>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}/>
     </>
   );
 }

export default App;
