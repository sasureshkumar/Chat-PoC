/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoomInput = {
  id?: string | null,
  name: string,
  owner?: string | null,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Room = {
  __typename: "Room",
  id: string,
  name: string,
  messages?: ModelMessageConnection | null,
  owner?: string | null,
  createdOn: string,
  updatedOn: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content: string,
  owner_name?: string | null,
  roomId: string,
  owner?: string | null,
  createdOn: string,
  updatedOn: string,
};

export type UpdateRoomInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  createdOn: string,
  updatedOn?: string | null,
};

export type DeleteRoomInput = {
  id: string,
  createdOn: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  owner_name?: string | null,
  roomId: string,
  owner?: string | null,
  createdOn?: string | null,
  updatedOn?: string | null,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  owner_name?: ModelStringInput | null,
  roomId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  owner_name?: string | null,
  roomId?: string | null,
  owner?: string | null,
  createdOn: string,
  updatedOn?: string | null,
};

export type DeleteMessageInput = {
  id: string,
  createdOn: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items:  Array<Room | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner_name?: ModelStringInput | null,
  roomId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  updatedOn?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelSubscriptionRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdOn?: ModelSubscriptionStringInput | null,
  updatedOn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  owner_name?: ModelSubscriptionStringInput | null,
  roomId?: ModelSubscriptionIDInput | null,
  createdOn?: ModelSubscriptionStringInput | null,
  updatedOn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        owner_name?: string | null,
        roomId: string,
        owner?: string | null,
        createdOn: string,
        updatedOn: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        owner_name?: string | null,
        roomId: string,
        owner?: string | null,
        createdOn: string,
        updatedOn: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        owner_name?: string | null,
        roomId: string,
        owner?: string | null,
        createdOn: string,
        updatedOn: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    owner_name?: string | null,
    roomId: string,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    owner_name?: string | null,
    roomId: string,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    owner_name?: string | null,
    roomId: string,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
  createdOn: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        owner_name?: string | null,
        roomId: string,
        owner?: string | null,
        createdOn: string,
        updatedOn: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  id?: string | null,
  createdOn?: ModelStringKeyConditionInput | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
  createdOn: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    owner_name?: string | null,
    roomId: string,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  id?: string | null,
  createdOn?: ModelStringKeyConditionInput | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      owner_name?: string | null,
      roomId: string,
      owner?: string | null,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByRoomIdAndCreatedOnQueryVariables = {
  roomId: string,
  createdOn?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByRoomIdAndCreatedOnQuery = {
  messagesByRoomIdAndCreatedOn?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      owner_name?: string | null,
      roomId: string,
      owner?: string | null,
      createdOn: string,
      updatedOn: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessageByRoomIdSubscriptionVariables = {
  roomId?: string | null,
};

export type OnCreateMessageByRoomIdSubscription = {
  onCreateMessageByRoomId?:  {
    __typename: "Message",
    id: string,
    content: string,
    owner_name?: string | null,
    roomId: string,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
  owner?: string | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        owner_name?: string | null,
        roomId: string,
        owner?: string | null,
        createdOn: string,
        updatedOn: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        owner_name?: string | null,
        roomId: string,
        owner?: string | null,
        createdOn: string,
        updatedOn: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        owner_name?: string | null,
        roomId: string,
        owner?: string | null,
        createdOn: string,
        updatedOn: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    owner_name?: string | null,
    roomId: string,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    owner_name?: string | null,
    roomId: string,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    owner_name?: string | null,
    roomId: string,
    owner?: string | null,
    createdOn: string,
    updatedOn: string,
  } | null,
};
