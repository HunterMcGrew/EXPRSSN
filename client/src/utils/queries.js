import { gql } from "@apollo/client";

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


