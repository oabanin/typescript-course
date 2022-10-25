import React, { MouseEvent, ReactNode } from 'react'
type Props = { 
 onClick(e: MouseEvent<HTMLElement>): void
 children?: ReactNode 
}

const ref = useRef<HTMLDivElement>(null);

const Button = ({ onClick: handleClick, children }: Props) => (
  <button onClick={handleClick}>{children}</button>
)




 const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
  };

const FormComponent = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Do something
  };

  return <form onSubmit={handleFormEvent}></form>;
};
