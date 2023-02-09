/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessageByRoomId = /* GraphQL */ `
  subscription OnCreateMessageByRoomId($roomId: ID) {
    onCreateMessageByRoomId(roomId: $roomId) {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom(
    $filter: ModelSubscriptionRoomFilterInput
    $owner: String
  ) {
    onCreateRoom(filter: $filter, owner: $owner) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom(
    $filter: ModelSubscriptionRoomFilterInput
    $owner: String
  ) {
    onUpdateRoom(filter: $filter, owner: $owner) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom(
    $filter: ModelSubscriptionRoomFilterInput
    $owner: String
  ) {
    onDeleteRoom(filter: $filter, owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
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
