import { FC, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listRooms } from "graphql/queries";
import { createRoom } from "graphql/mutations";
import { PlusIcon } from "@heroicons/react/24/outline";
import ChatRoom from "features/chat/ChatRoom";
import { ListRoomsQuery, Room } from "API";

const Dashboard: FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [roomName, setRoomName] = useState("");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
    (
      API.graphql({
        query: listRooms,
      }) as Promise<{ data: ListRoomsQuery }>
    ).then(({ data }) => {
      const rooms = data?.listRooms?.items as Room[];
      if (rooms.length > 0) {
        setRooms(rooms);
      }
    });
  }, []);

  const addRoom = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (roomName) {
      (
        API.graphql({
          query: createRoom,
          variables: {
            input: {
              name: roomName,
            },
          },
        }) as Promise<{ data: { createRoom: Room } }>
      ).then(({ data }) => {
        setRooms([...rooms, data.createRoom]);
        setRoomName("");
      });
    }
  };

  return (
    <div className="flex overflow-auto">
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="relative z-0 flex flex-1 overflow-hidden border-b">
          <aside className="w-96 flex-shrink-0 border-r border-gray-200">
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-lg font-medium text-gray-900">Rooms</h2>
              <form className="mt-6 flex space-x-4" onSubmit={addRoom}>
                <div className="min-w-0 flex-1">
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      value={roomName}
                      onChange={(e) => setRoomName(e.target.value)}
                      className="block w-full rounded-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      placeholder="Add new room"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  <PlusIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </button>
              </form>
            </div>
            <nav className="min-h-0 flex-1 overflow-y-auto">
              <ul
                role="list"
                className="z-0 h-fit divide-y divide-gray-200 border-b border-t"
              >
                {rooms.map((room) => (
                  <li
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500 hover:bg-gray-50">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {room.name}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {room.createdOn}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="w-full overflow-scroll">
            {selectedRoom ? (
              <ChatRoom room={selectedRoom} />
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <div className="pt-4 text-center">
                  {rooms.length === 0 ? (
                    <h2 className="text-gray-700">
                      Create a new room to get started
                    </h2>
                  ) : (
                    <h2 className="text-gray-700">
                      Select a room to start chatting
                    </h2>
                  )}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
