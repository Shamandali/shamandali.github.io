import { ColumnFilterItem } from "antd/es/table/interface"

export type ColumnFactoryType<T> = {
    name: string
    search?: boolean
    sort?: boolean
    filter?: ColumnFilterItem[]
    customRender?: (render: T, index?: number) => JSX.Element | string
    customFilter?: string
    filteredValue?: T
    fixed?: 'left' | 'right' | false
    width?: string | number
    ellipsis?: boolean,
    customName?: string,
}