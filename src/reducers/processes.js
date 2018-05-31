const init_state = [
    {title: 'process #1', id: 1},
    {title: 'process #2', id: 2},
    {title: 'process #3', id: 3},
    {title: 'process #4', id: 4},
    {title: 'process #5', id: 5},
];

const processes = (state = init_state, action) => {
  switch (action.type) {
    case 'ADD_PROCESS':
      return [
        ...state,
        {title: action.title}
      ];
    default:
      return state
  }
};

export default processes
