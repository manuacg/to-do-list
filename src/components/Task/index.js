import {XCircle} from 'phosphor-react';
import { Container } from "./styled";

export function Task({ task, onDeleteTask }) {

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    return (
        <Container>
            <input id="checkbox" type="checkbox" class="form-check-input" />

            <p> {task.content} </p>

            <button onClick={handleDeleteTask} title="Deletar item">
                <XCircle size={24} />
            </button>
        </Container>
    )
}