import { gql } from "@apollo/client";

// signup mutation
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// login mutation
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// store cloudinary URL to graphql
export const ADD_PIECE = gql`
mutation ADD_PIECE($name: String!, $description: String!, $link: String!, $collectionId: ID!, $artist: String!) {
  addPiece(name: $name, description: $description, link: $link, collectionId: $collectionId, artist: $artist) {
    _id
  }
}`;

export const REMOVE_PIECE = gql`
  mutation removePiece($name:ID!) {
    removePiece(name:$name) {
      email
      username
      pieces {
        description
        link
        
      }
    }
  }


`;