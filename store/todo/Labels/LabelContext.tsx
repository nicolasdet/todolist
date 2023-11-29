import { createContext, useState } from 'react';
import InitialLabels from './initial-labels.json';

export type Label = {
  id: string;
  name: string;
  color: string;
};

interface LabelContextType {
  labels: Label[];
  addLabel: (label: Label) => void;
  deleteLabel: (id: string) => void;
  updateLabel: (label: Label) => void;
}

export const LabelContext = createContext<LabelContextType>({
  labels: [],
  addLabel: () => {},
  deleteLabel: () => {},
  updateLabel: () => {},
});

const LabelContextProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [labels, setLabels] = useState<Label[]>([...InitialLabels.labels]);

  const addLabel = (label: Label) => {
    setLabels([...labels, label]);
  };

  const updateLabel = (label: Label) => {
    setLabels([...labels.map((l) => (l.id === label.id ? label : l))]);
  };

  const deleteLabel = (id: string) => {
    setLabels([...labels.filter((label) => label.id !== id)]);
  };

  const value = {
    labels,
    addLabel,
    deleteLabel,
    updateLabel,
  };
  return (
    <LabelContext.Provider value={value}>{children}</LabelContext.Provider>
  );
};

export default LabelContextProvider;
