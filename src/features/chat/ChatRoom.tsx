import { FC, useEffect, useState } from "react";
import {
  Message,
  MessagesByRoomIdAndCreatedOnQuery,
  OnCreateMessageByRoomIdSubscription,
  Room,
} from "API";
import { API } from "aws-amplify";
import { createMessage } from "graphql/mutations";
import { messagesByRoomIdAndCreatedOn } from "graphql/queries";
import { onCreateMessageByRoomId } from "graphql/subscriptions";
import { useAuth } from "contexts/AuthProvider";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

export type Props = {
  room: Room;
};
const ChatRoom: FC<Props> = ({ room }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { user } = useAuth();
  const [messageContent, setMessageContent] = useState("");
  const sendMessage = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (messageContent) {
      const { data: newMessage } = (await API.graphql({
        query: createMessage,
        variables: {
          input: {
            content: messageContent,
            roomId: room.id,
            owner_name: user?.attributes?.name,
          },
        },
      })) as { data: { createMessage: Message } };
      console.log("new message", newMessage);
      setMessages([...messages, newMessage.createMessage]);
      setMessageContent("");
    }
  };

  useEffect(() => {
    (
      API.graphql({
        query: messagesByRoomIdAndCreatedOn,
        variables: {
          roomId: room.id,
          sortDirection: "ASC",
        },
      }) as Promise<{ data: MessagesByRoomIdAndCreatedOnQuery }>
    ).then(({ data }) => {
      const messages = data?.messagesByRoomIdAndCreatedOn?.items as Message[];
      if (messages.length > 0) {
        setMessages(messages);
      }
    });
  }, [room.id]);

  useEffect(() => {
    const subscription = API.graphql({
      query: onCreateMessageByRoomId,
      variables: { roomId: room.id },
    });
    if ("subscribe" in subscription) {
      const sb = subscription.subscribe({
        next: ({
          value,
        }: {
          value: { data: OnCreateMessageByRoomIdSubscription };
        }) => {
          const newMessage = value.data.onCreateMessageByRoomId;
          if (newMessage && newMessage.owner !== user?.attributes?.sub) {
            console.log("new message", newMessage);
            setMessages([...messages, newMessage]);
          }
        },
      });
      return () => {
        sb.unsubscribe();
      };
    }
  }, [room.id, user?.attributes?.sub]);

  return (
    <div className="h-screen flex-col px-6 pt-6 pb-4">
      <h1 className="text-sky-600">{room.name}</h1>

      <div className="mt-4 flex min-h-fit flex-col space-y-4 overflow-y-auto border-t p-3">
        {messages.map((message) => (
          <div key={message.id}>
            <div
              className={classNames(
                message.owner === user?.attributes?.sub ? "justify-end" : "",
                "flex items-end"
              )}
            >
              <div className="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                <div
                  className={classNames(
                    message.owner === user?.attributes?.sub
                      ? "bg-sky-600 text-white"
                      : "bg-gray-300",
                    "inline-block rounded-lg px-4 py-2 text-gray-600"
                  )}
                >
                  {message.owner !== user?.attributes?.sub && (
                    <div className="text-xss text-gray-400">
                      {message.owner_name}
                    </div>
                  )}
                  <div>{message.content}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <form className="mt-6 flex space-x-4" onSubmit={sendMessage}>
          <div className="min-w-0 flex-1">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                className="block w-full rounded-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                placeholder="Write a message..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            <PaperAirplaneIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </div>
  );
};
export default ChatRoom;
