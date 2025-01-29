import React, { createContext, ReactNode, useContext, useState } from 'react';

// IndexContext에 저장될 변수들 형식 지정
interface IndexContextType {
  newTodo: string | null;
  resetNewTodo: () => void;
}

// IndexContext : 보관소 만듦
const IndexContext = createContext<IndexContextType | null>(null);

// IndexProvider에 사용될 프롭({children}) 형식 지정
interface IndexProviderProps {
  children: ReactNode;
}

// IndexProvider : 보관소에 들어갈 변수들을 만들고
// IndexProvider라는 것 하나로, IndexContext.Provider를 사용할 수 있도록 간편화
export const IndexProvider: React.FC<IndexProviderProps> = ({ children }) => {
  const [newTodo, setNewTodo] = useState<string | null>(null);
  const resetNewTodo = () => {
    setNewTodo(null);
  };
  return (
    <IndexContext.Provider value={{ newTodo, resetNewTodo }}>
      {children}
    </IndexContext.Provider>
  );
};

// useContext(IndexContext) 대신, useIndex라는 변수 하나로 context를 사용할 수 있도록 함
export const useIndex = (): IndexContextType => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error('useIndex must be used within an IndexProvider');
  }
  return context;
};
