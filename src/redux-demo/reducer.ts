export default function counterReducer(
    state = { value: 0 },
    action: { type: "increment" | "decrement" }
) {
    switch (action.type) {
        case "increment":
            return { value: state.value + 1 };
        case "decrement":
            return { value: state.value - 1 };
        default:
            return state;
    }
}
