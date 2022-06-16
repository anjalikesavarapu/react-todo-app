import React from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './components/Todo';
import db from './components/firebase';
import firebase from 'firebase/app';

function App() {
    const [todos, setTodo] = React.useState([])
    const [inputTodo, setInputTodo] = React.useState('')

    React.useEffect(() => {
        db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setTodo(snapshot.docs.map(doc => doc.data().todo))
        })
    }, [])

    function addTodo(event) {
        event.preventDefault();
        db.collection('todos').add({
            todo: inputTodo,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInputTodo('')
    }
    return (
        <div className="App">
            <h1>My todo app💟</h1>
            <form>
                <FormControl>
                    <InputLabel>✍️ Write a todo </InputLabel>
                    <Input value={inputTodo} onChange={(event) => setInputTodo(event.target.value)} />
                </FormControl>
                <Button disabled={!inputTodo} type='submit' onClick={addTodo} variant="contained" color="primary">
                    Add todo
                </Button>
            </form>
            <ul>
                {todos.map(todo => (
                    <Todo text={todo} />
                ))}
            </ul>
        </div>
    );
}

export default App;
