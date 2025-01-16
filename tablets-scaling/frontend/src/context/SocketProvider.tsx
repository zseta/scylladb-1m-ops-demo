import { type ReactElement, type ReactNode, useRef } from 'react';
import type { Socket } from 'socket.io-client';
import { socketContext } from '@/context/socket';

interface SocketProviderProps {
  readonly children: ReactNode;
}

export const SocketProvider = ({
  children,
}: SocketProviderProps): ReactElement => {
  const socketRef = useRef<Socket | null>(null);

  const emitEvent = (eventName: string) => {
    console.log(`Emitting event: ${eventName}`);

    if (socketRef.current) {
      socketRef.current.emit(eventName);
    }
  };

  return (
    <socketContext.Provider value={{ socketRef: socketRef, emitEvent }}>
      {children}
    </socketContext.Provider>
  );
};
