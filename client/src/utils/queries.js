import { gql } from "@apollo/client";

// GET ALL QUERIES

export const QUERY_ALL_USERS = gql`
query QUERY_ALL_USERS {
    Users {
      _id
      username
      email
      password
      collections {
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
  }
`;


export const QUERY_ALL_PIECES = gql` 
query QUERY_ALL_PIECES {
    Pieces {
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
  `;


export const QUERY_ALL_COLLECTIONS = gql`
query QUERY_ALL_COLLECTIONS {
    Collections {
      _id
      name
      description
      pieces {
        name
        _id
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

export const QUERY_ALL_CATEGORIES = gql`
query QUERY_ALL_CATEGORIES {
    Categories {
      _id
      name
      description
    }
  }  
`;

// END GET ALL QUERIES

// GET SINGLE QUERIES

export const QUERY_USER = gql`
query QUERY_USER($id: ID!) {
    User(_id: $id) {
      _id
      username
      email
      password
      collections {
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
  }
`