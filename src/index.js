import {createStore} from "redux"

// TodoList 예제
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO, text
  }
}

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO, id
  }
}

const reducer = (state = [], action) => {
  console.log(action)
  switch(action.type) {
    case ADD_TODO:
      return [ { text: action.text, id: Date.now()}, ...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== parseInt(action.id));
    default:
      return state; 
  }
}; 

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id))
}

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo)
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos);



const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddToDo(todo);
  
};

form.addEventListener("submit", onSubmit);

// 카운터 리듀서 예제
// const add = document.getElementById("add");
// const minus = document.getElementById("minus"); 
// const number = document.querySelector("span");

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS ="MINUST"

// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//       case ADD:
//         return count + 1;
//       case MINUS:
//         return count - 1;
//       default:
//         return count;

//   }

// };

// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerText = countStore.getState();
// };

// countStore.subscribe(onChange);

// const handelAdd = () => {
//   countStore.dispatch({type: ADD});
// }

// const handelMinus = () => {
//   countStore.dispatch({type: MINUS});
// }


// add.addEventListener("click", handelAdd);
// minus.addEventListener("click", handelMinus); 