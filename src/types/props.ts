import * as Yup from 'yup';

type IData = Record<string, unknown>;

interface IProps<T extends IData> {
    columns: IColumn<T>[];
    data: T[];
    title?: string;
    onSubmit: (data: T[]) => void;
    validationSchema?: Yup.Ref | Yup.Schema<unknown[] | undefined, object> | Yup.MixedSchema<unknown[] | undefined, object>;
}

interface IColumn<T extends IData> {
    title?: string | React.ReactElement;
    key: string;
    render?: (obj: T) => unknown;
    editable?: boolean;
    lookup?: Record<string, React.ReactNode>;
    type?: string;
    required?: boolean;
}

interface IEditRowProps<T extends IData> {
    index: number;
    columns: IColumn<T>[];
}

interface IEditBodyProps<T extends IData> {
    columns: IColumn<T>[];
}
interface IEditHeaderProps<T extends IData> {
    columns: IColumn<T>[];
}

interface IToolbarProps {
    title?: string;
}


export type {
    IData,
    IProps,
    IColumn,
    IEditRowProps,
    IEditBodyProps,
    IEditHeaderProps,
    IToolbarProps
}