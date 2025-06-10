import "./App.css";

// Store
interface CounterState {
  value: number;
}

interface UserState {
  isSignedIn: boolean;
}

// Actions
// const increment = {type: 'INCREMENT', payload: 1}
const increment = { type: "INCREMENT" };
const decrement = { type: "DECREMENT" };

// Reducers

export default function App() {
  return (
    <div>
      <h2>Redux Complete Tutorial</h2>
    </div>
  );
}
