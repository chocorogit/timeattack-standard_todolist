// import uuid from "react-uuid";
import { useState } from "react";
import shortid from "shortid";
import { createStore } from "redux";
import { useSelector } from "react-redux";

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
];

// 리듀서
export const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];

        case "DELETE_TODO":
            // TODO: 여기 작성
            return state;

        case "SWITCH_TODO":
            // TODO: 여기 작성
            return state;

        default:
            return state;
    }
};

// 스토어 생성
const store = createStore(todos);
