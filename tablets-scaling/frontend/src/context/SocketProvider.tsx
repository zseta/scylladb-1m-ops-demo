import { type ReactElement, useRef } from 'react';
import type { Socket } from 'socket.io-client';
import type { ChildrenProps } from '@/util/props';
import { socketContext } from '@/context/socket';

export const SocketProvider = ({ children }: ChildrenProps): ReactElement => {
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
