const init_state = [
    {title: 'item #1'},
    {title: 'item #2'},
    {title: 'item #3'},
    {title: 'item #4'},
    {title: 'item #5'},
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
