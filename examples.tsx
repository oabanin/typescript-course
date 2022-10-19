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

