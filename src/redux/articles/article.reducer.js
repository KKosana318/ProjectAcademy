const INITITAL_STATE = {
  articles: []
}

const ArticleReducer = (prevState = INITITAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        articles: action.payload
      }
    default:
      return state;
  }
};

export default ArticleReducer;