import React, { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";

const Home = () => {
    const initialState = [
        {
            id: shortid.generate(),
            title: "제목1",
            content: "내용1",
            isDone: false,
        },
        {
            id: shortid.generate(),
            title: "제목2",
            content: "내용2",
            isDone: true,
        },
        {
            id: shortid.generate(),
            title: "제목3",
            content: "내용3",
            isDone: false,
        },
        {
            id: shortid.generate(),
            title: "제목4",
            content: "내용4",
            isDone: true,
        },
    ];
    const [todos, setTodos] = useState(initialState);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };

    const contentHandler = (e) => {
        setContent(e.target.value);
    };

    const submitTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: shortid.generate(),
            title,
            content,
            isDone: false,
        };
        setTodos([...todos, newTodo]);
        setTitle("");
        setContent("");
    };

    return (
        <>
            <form onSubmit={submitTodo}>
                <input value={title} onChange={titleHandler} />
                <input value={content} onChange={contentHandler} />
                <button type="submit">입력</button>
            </form>
            <h2>할 일</h2>
            {todos
                .filter((todo) => !todo.isDone)
                .map((todo) => (
                    <Todo key={todo.id}>
                        <span>{todo.id}</span>
                        <h4>{todo.title}</h4>
                        <p>{todo.content}</p>
                        <p>{todo.isDone}</p>
                        <button>완료</button>
                        <button>삭제</button>
                    </Todo>
                ))}
            <h2>완료</h2>
            {todos
                .filter((todo) => todo.isDone)
                .map((todo) => (
                    <Todo key={todo.id}>
                        <span>{todo.id}</span>
                        <h4>{todo.title}</h4>
                        <p>{todo.content}</p>
                        <p>{todo.isDone}</p>
                        <button>완료 취소</button>
                        <button>삭제</button>
                    </Todo>
                ))}
        </>
    );
};

const Todo = styled.div`
    border: 1px solid #999;
`;

export default Home;
