import { useTodo } from "../hooks/useTodo";

export const Dashboard = () => {
    const {todos: tasks} = useTodo();

    return (
        <div>
            Total:{tasks.filter(_ => !_.completed).length}
            Pending: {tasks.filter(_ => !_.completed).length}
            Completed: {tasks.filter(_ => _.completed).length}
        </div>
    );
}