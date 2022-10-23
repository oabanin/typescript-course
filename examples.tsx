const { values, setFieldValue } = useFormikContext<{
    input: string;
    filters: { [index: string]: string[] };
  }>();
 
 //---

  const onChange = useCallback(
 (e: ChangeEvent<Record<string, unknown>>, checked: boolean) => {
   setFieldValue(e.target.name as string, checked);
 },
 [setFieldValue],
);


// --- 
type Ref<T> = RefCallback<T> | RefObject<T> | null

const ref = useRef<HTMLDivElement>(null);

  children(
    props: {
      formError: null | string;
      onSetShouldClose: Dispatch<SetStateAction<boolean>>;
    } & FormikProps<Values>,

      
 const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: { [event.target.name]: event.target.value },
    });
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: { [event.target.name]: true },
    });
  };


const FormComponent = () => {
  const handleFormEvent = (e: FormEvent<HTMLFormElement>) => {
    // Do something
  };

  return <form onSubmit={handleFormEvent}>{/** Some JSX */}</form>;
};
