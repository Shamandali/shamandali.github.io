import { FormItemProps } from "antd";
import { FormFactory } from "../FormFactory.interface";

export interface PropsElement {
    element: FormFactory.IFormFactoryType<any>
    props: FormItemProps
}