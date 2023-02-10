import { FC, useEffect, useRef, useState } from "react";
import {
  Message,
  MessagesByRoomIdAndCreatedOnQuery,
  OnCreateMessageByRoomIdSubscription,
  Room,
} from "API";
import { API } from "aws-amplify";
import { messagesByRoomIdAndCreatedOn } from "graphql/queries";
import { onCreateMessageByRoomId } from "graphql/subscriptions";
import { useAuth } from "contexts/AuthProvider";
import classNames from "classnames";
import SendMessage from "features/chat/SendMessage";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type Props = {
  room: Room;
};

export const sortMessages = (messages: Message[]) => {
  return messages.sort((a, b) => {
    if (a.createdOn < b.createdOn) {
      return -1;
    }
    if (a.createdOn > b.createdOn) {
      return 1;
    }
    return 0;
  });
};

const ChatRoom: FC<Props> = ({ room }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [messages, setMessages] = useState<Message[]>([]);
  const { user } = useAuth();
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
        setMessages(sortMessages(messages));
      } else {
        setMessages([]);
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
          if (newMessage) {
            setMessages((currentMessages) => {
              return sortMessages([...currentMessages, newMessage]);
            });
          }
        },
      });
      return () => {
        sb.unsubscribe();
      };
    }
  }, [room.id, user?.attributes?.sub]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col">
      <h1 className="p-4 text-sky-600">{room.name}</h1>
      <div className="flex h-full flex-col space-y-4 overflow-y-scroll border-t p-4">
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
                  <div
                    className={classNames(
                      message.owner === user?.attributes?.sub
                        ? "text-sky-400"
                        : "",
                      "pt-1 text-gray-400"
                    )}
                  >
                    {dayjs(message.createdOn).fromNow()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <SendMessage room={room} />
    </div>
  );
};
export default ChatRoom;
