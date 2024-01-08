const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      author: 'John Doe',
      shortDescription: 'Short description',
      content: 'Main content of the article',
      publishedDate: new Date('02-03-2023'),
      category: 'Sport',
    },
    {
      id: '2',
      title: 'Article title 2',
      author: 'John Doe',
      shortDescription: 'Short description',
      content: 'Main content of the article',
      publishedDate: new Date('02-03-2023'),
      category: 'News',
    },
    {
      id: '3',
      title: 'Article title 3',
      author: 'John Doe',
      shortDescription: 'Short description',
      content: 'Main content of the article',
      publishedDate: new Date('02-03-2023'),
      category: 'Movies',
    },
    {
      id: '4',
      title: 'Article title 4',
      author: 'John Doe',
      shortDescription: 'Short description',
      content: 'Main content of the article',
      publishedDate: new Date('02-03-2023'),
      category: 'Sport',
    },
  ],
  categories: [
    {
      id: '1',
      name: 'Sport',
    },
    {
      id: '2',
      name: 'News',
    },
    {
      id: '3',
      name: 'Movies',
    },
  ]
};

export default initialState;