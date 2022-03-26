import axios from "axios";
import { useState } from "react";
import { ITodo } from "../../models/ITodo";
import { TodoContext } from "./todoContext";

const GET_URL: string = "https://localhost:5001/api/Todo/";
const POST_URL: string = "https://localhost:5001/api/Todo/";
const PUT_URL: string = "https://localhost:5001/api/Todo/";
const DELETE_URL: string = "https://localhost:5001/api/Todo/";

interface IItemModel {
    id: number;
    text: string;
    createdBy: string;
    dateCreated: Date;
}

export const TodoContextProvider: React.FC<{}> = (props) => {
    const [tasks, setTasks] = useState<ITodo[]>([]);
    const [success, setSuccess] = useState<boolean | undefined>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>([]);

    const handleError = (err: any) => {
        if(err.response?.data[""]){
            setErrors(err.response?.data[""]);
        }
        else if(err.response.data.errors)
            setErrors(err.response?.data?.errors);
        else
            setErrors(["Something went wrong. Please try again."]);
    };

    const getTasks = async () => {
        try {
            setErrors([]);
            setLoading(true);
            setSuccess(undefined);

            const response = await axios.get<IItemModel[]>(GET_URL);

            const items: ITodo[] = response.data.map(d => {
                return {
                    id: d.id,
                    text: d.text,
                    completed: false
                };});

            setTasks([...items]);
        } catch (err: any) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const addTask = async (text: string) => {
        try {
            setErrors([]);
            setLoading(true);
            setSuccess(undefined);

            await axios.post(POST_URL,
                {
                    "text": text
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            await getTasks();
        } catch (err: any) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const deleteTask = async (id: number) => {
        try {
            setErrors([]);
            setLoading(true);
            setSuccess(undefined);

            await axios.delete(DELETE_URL+id,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            await getTasks();
        } catch (err: any) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const updateTask = async (id: number, text: string) => {
        try {
            setErrors([]);
            setLoading(true);
            setSuccess(undefined);

            await axios.put(PUT_URL+id,
                {
                    "text": text
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            await getTasks();
        } catch (err: any) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    const toggleCompleted = (id: number) => {
        const updatedTasks = tasks.map(task => {
            if(task.id !== id) return task;

            return {
                ...task,
                completed: !task.completed
            };
        });

        setTasks([...updatedTasks]);
    };
      
    return(
        <TodoContext.Provider
            value={{
                tasks: tasks,
                success: success,
                loading: loading,
                errors: errors,
                getTasks: getTasks,
                addTask: addTask,
                deleteTask: deleteTask,
                updateTask: updateTask,
                toggleCompleted: toggleCompleted
            }}>
                {props.children}
        </TodoContext.Provider>
    )
}