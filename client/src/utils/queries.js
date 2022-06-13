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
    pieces {
      _id
      name
      description
      artist
      link
    }
  }
}
`;


// END GET ALL QUERIES

// GET SINGLE QUERIES

export const QUERY_USER = gql`
{
  User {
   _id
    email
    pieces {
      _id
      name
      description
      artist
      link
    }
  }
}
`;
export const QUERY_ME = gql`
{
  me {
   _id
    email
    pieces {
      _id
      name
      description
      artist
      link
    }
  }
}
`;

// END SINGLE QUERIES

