/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
