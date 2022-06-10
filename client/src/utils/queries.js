import { gql } from "@apollo/client";

// ************************
// ALL QUERIES WORK AS IS...IF ANYTHING IS CHANGED IN THE SCHEMA, 
// EXAMPLE: IF USERNAME NO LONGER HAS A USERNAME FIELD IT WILL THROW ERRORS
// WHEN QUERIES FOR THESE SET QUERIES. 
// THAT APPLIES TO ANY QUERY. WHEN CHANGING SCHEMA WE MUST 
// CHANGE QUERIES OR WE WILL GET ERRORS
// ************************

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
      pieces {
        name
        _id
        image
        description
      }
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
`;

export const QUERY_PIECE = gql`
query QUERY_PIECE($id: ID!) {
    Piece(_id: $id) {
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

export const QUERY_COLLECTION = gql`
query QUERY_COLLECTION($id: ID!) {
    Collection(_id: $id) {
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

export const QUERY_CATEGORY = gql`
query QUERY_COLLECTION($id: ID!) {
    Category(_id: $id) {
      _id
      name
    }
  }
  
`;

// END SINGLE QUERIES

