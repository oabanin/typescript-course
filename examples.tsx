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

objArr: {
    id: string;
    title: string;
  }[];

props: {
  formError: null | string;
  onSetShouldClose: Dispatch<SetStateAction<boolean>>;
} & FormikProps<Values>,

// --- 
type Ref<T> = RefCallback<T> | RefObject<T> | null


