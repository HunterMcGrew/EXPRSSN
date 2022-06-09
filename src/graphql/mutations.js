/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addUser = /* GraphQL */ `
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        name
        username
        email
        password
        collections {
          _id
          name
          description
        }
      }
    }
  }
`;
export const login = /* GraphQL */ `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        username
        email
        password
        collections {
          _id
          name
          description
        }
      }
    }
  }
`;
export const addCollection = /* GraphQL */ `
  mutation AddCollection($name: String!, $description: String!, $userId: ID!) {
    addCollection(name: $name, description: $description, userId: $userId) {
      _id
      name
      description
      pieces {
        _id
        name
        description
        image
        category {
          _id
          name
          description
        }
      }
    }
  }
`;
export const addPiece = /* GraphQL */ `
  mutation AddPiece($name: String!, $description: String!, $collectionId: ID!) {
    addPiece(
      name: $name
      description: $description
      collectionId: $collectionId
    ) {
      _id
      name
      description
      pieces {
        _id
        name
        description
        image
        category {
          _id
          name
          description
        }
      }
    }
  }
`;
