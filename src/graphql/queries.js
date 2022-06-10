/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const users = /* GraphQL */ `
  query Users {
    Users {
      _id
      name
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
        }
      }
    }
  }
`;
export const pieces = /* GraphQL */ `
  query Pieces {
    Pieces {
      _id
      name
      description
      image
      category {
        _id
        name
        description
        pieces {
          _id
          name
          description
          image
        }
      }
    }
  }
`;
export const categories = /* GraphQL */ `
  query Categories {
    Categories {
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
export const collections = /* GraphQL */ `
  query Collections {
    Collections {
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
export const user = /* GraphQL */ `
  query User($_id: ID!) {
    User(_id: $_id) {
      _id
      name
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
        }
      }
    }
  }
`;
export const piece = /* GraphQL */ `
  query Piece($_id: ID!) {
    Piece(_id: $_id) {
      _id
      name
      description
      image
      category {
        _id
        name
        description
        pieces {
          _id
          name
          description
          image
        }
      }
    }
  }
`;
export const category = /* GraphQL */ `
  query Category($_id: ID!) {
    Category(_id: $_id) {
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
export const collection = /* GraphQL */ `
  query Collection($_id: ID!) {
    Collection(_id: $_id) {
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
