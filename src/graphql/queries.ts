/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!, $createdOn: AWSDateTime!) {
    getRoom(id: $id, createdOn: $createdOn) {
      id
      name
      messages {
        items {
          id
          content
          owner_name
          roomId
          owner
          createdOn
          updatedOn
        }
        nextToken
      }
      owner
      createdOn
      updatedOn
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $id: ID
    $createdOn: ModelStringKeyConditionInput
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRooms(
      id: $id
      createdOn: $createdOn
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        messages {
          nextToken
        }
        owner
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!, $createdOn: AWSDateTime!) {
    getMessage(id: $id, createdOn: $createdOn) {
      id
      content
      owner_name
      roomId
      owner
      createdOn
      updatedOn
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $id: ID
    $createdOn: ModelStringKeyConditionInput
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessages(
      id: $id
      createdOn: $createdOn
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        content
        owner_name
        roomId
        owner
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const messagesByRoomIdAndCreatedOn = /* GraphQL */ `
  query MessagesByRoomIdAndCreatedOn(
    $roomId: ID!
    $createdOn: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByRoomIdAndCreatedOn(
      roomId: $roomId
      createdOn: $createdOn
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        owner_name
        roomId
        owner
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
