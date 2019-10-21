import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Flávio Caruso',
          avatar: 'https://placeimg.com/40/40/tech'
        },
        date: '31 May 2019',
        content: 'Pessoal, hoje é meu aniversário',
        comments: [
          {
            id: 2,
            author: {
              name: 'Fulano de Tal',
              avatar: 'https://placeimg.com/40/40/any'
            },
            date: '31 May 2019',
            content:
              'Parabéns Flávio'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Pedro José da Silva',
          avatar: 'https://placeimg.com/40/40/people'
        },
        date: '07 Jun 2019',
        content:
          `Fala Pessoal Beleza? Estou curtindo muito esse Bootcamp GoStack, nesse momento estou usando ReactJS`,
        comments: [
          {
            id: 4,
            author: {
              name: 'Mãe do Pedro',
              avatar: 'https://placeimg.com/40/40/animals'
            },
            date: '07 Jun 2019',
            content:
              'Parabéns meu Filho!'
          },
          {
            id: 5,
            author: {
              name: 'Avô do Pedro',
              avatar: 'https://placeimg.com/40/40/nature'
            },
            date: '07 Jun 2019',
            content:
              'E isso é de comer?'
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;