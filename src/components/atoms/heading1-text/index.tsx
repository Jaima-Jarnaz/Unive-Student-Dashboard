export interface Heading1TextProps {
  children: React.ReactNode;
}

export const Heading1Text: React.FC<Heading1TextProps> = ({ children }) => <h1 className="a-heading1">{children}</h1>;
