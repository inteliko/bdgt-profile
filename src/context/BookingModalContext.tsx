import React, { createContext, useContext, useState } from 'react';

type BookingContextType = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const BookingModalContext = createContext<BookingContextType | undefined>(undefined);

export const BookingModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ open, close, isOpen }}>
      {children}
    </BookingModalContext.Provider>
  );
};

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error('useBookingModal must be used within BookingModalProvider');
  return ctx;
}

export default BookingModalContext;
