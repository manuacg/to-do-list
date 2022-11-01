import { toDoArray } from "../../utils/todo";
import { TaskList } from "../../components/TaskList";
import { Container, Content } from "./styled";

export function Home() {

  return (
    <Container>
      <h1>To-do List</h1>

      <Content>
        {toDoArray.map(todo => {
          return (
            <TaskList key={todo.id} info={todo} />
          )
        })}
      </Content>

    </Container>
  );
}
