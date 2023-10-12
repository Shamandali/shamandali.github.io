import { ColumnType, TablePaginationConfig, TableProps } from "antd/es/table"
import { FilterValue, SorterResult } from "antd/es/table/interface"
import { TableProps as RcTableProps } from 'rc-table/lib/Table'

export interface ITablePropsComponent<T> {
    data?: T[]
    columns: ColumnType<T>[]
    loading?: boolean
    pagination?: false | TablePaginationConfig
    scroll?: RcTableProps<T>['scroll']
    onChange?: (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<T> | SorterResult<T>[]) => void
    expandedRowRender?: boolean
    summary?: (data: T) => JSX.Element
    additionalProps?: TableProps<T>
}