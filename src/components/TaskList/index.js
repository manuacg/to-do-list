import { useState } from "react";
import { Task } from "../Task";

import { AllTasks , Container, Form } from "./styled";

export function TaskList({ info }) {
    const [task, setTask] = useState([
        {
            id: Math.random(),
            content: "Item de Exemplo"
        }
    ])

    const [newTaskTxt, setNewTaskTxt] = useState('');

    function handleNewTask(event) { 
        setNewTaskTxt(event.target.value)
    }


    function handleCreateNewTask(event) { 
        event.preventDefault();

        const NewTask = {
            id: Math.random(),
            content: newTaskTxt,
        }

        setTask([...task, NewTask]);
        setNewTaskTxt('')

    }

    function deleteTask(id) {
        const taskWithoutDeletedOne = task.filter((task) => task.id !== id)

        setTask(taskWithoutDeletedOne);
    }

    return (
        <Container>
             <header>
                <strong>{info.title}</strong>
            </header>

            <AllTasks>
                {task.map(task => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            onDeleteTask={deleteTask}
                        />
                    )
                })}
            </AllTasks>
            
            <Form onSubmit={handleCreateNewTask}>
                <strong>Criar uma nova tarefa</strong>
                <textarea
                    placeholder="Digite uma nova tarefa"
                    required
                    value={newTaskTxt}
                    onChange={handleNewTask}
                />

                <footer>
                    <button type="submit">Criar</button>
                </footer>
            </Form>

        </Container>
    )
}