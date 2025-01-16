import { type MutableRefObject, createContext, useContext } from 'react';
import type { Socket } from 'socket.io-client';

interface SocketContext {
  readonly socketRef: MutableRefObject<Socket | null>;
  readonly emitEvent: (eventName: string) => void;
}

export const socketContext = createContext<SocketContext | null>(null);

export const useSocketContext = (): SocketContext => {
  const context = useContext(socketContext);

  if (context === null) {
    throw new Error(
      'useSocketContext must be used within socketContext.Provider'
    );
  } else {
    return context;
  }
};
