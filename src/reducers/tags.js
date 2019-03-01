const initTags = [
  {
    'id': 0,
    'tag_name': 'python',
    'num': 1,
  },
  {
    'id': 1,
    'tag_name': 'java',
    'num': 5,
  },
  {
    'id': 2,
    'tag_name': 'c++',
    'num': 6,
  },
  {
    'id': 3,
    'tag_name': 'javascript',
    'num': 2,
  },
  {
    'id': 4,
    'tag_name': 'nodejs',
    'num': 10,
  },
  {
    'id': 5,
    'tag_name': 'umijs',
    'num': 1,
  },
  {
    'id': 6,
    'tag_name': 'dvajs',
    'num': 3,
  },

];

const tags = (state = initTags, action)=>{
  switch (action.type) {
    default:
      return state;
  }
};

export default tags;
