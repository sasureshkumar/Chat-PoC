import { FC, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { API } from "aws-amplify";
import { createMessage } from "graphql/mutations";
import { Message, Room } from "API";
import { useAuth } from "contexts/AuthProvider";

type Props = {
  room: Room;
};
const SendMessage: FC<Props> = ({ room }) => {
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
      setMessageContent("");
    }
  };

  return (
    <div>
      <form className="flex space-x-4 border-t p-4" onSubmit={sendMessage}>
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
  );
};

export default SendMessage;
