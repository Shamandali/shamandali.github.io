import { FormFactory } from "@/components/FormFactory/FormFactory.interface";

export const elements: FormFactory.IFormFactoryType<any>[] = [
    {
        name: 'name',
        type: 'string',
        required: true,
        placeholder: 'Ingresa el nombre',
        label: 'Nombre'
    },
    {
        name: 'Profile',
        type: 'string',
        required: true,
        placeholder: 'Ingresa el perfil',
        label: 'Perfil'
    },
    {
        name: 'Abbreviation',
        type: 'string',
        required: true,
        placeholder: 'Ingresa la abreviatura',
        label: 'Abreviatura'
    },
    {
        name: 'Address',
        type: 'string',
        required: true,
        placeholder: 'Ingresa la dirección',
        label: 'Dirección'
    },
    {
        name: 'Phone',
        type: 'string',
        required: true,
        placeholder: 'Ingresa el teléfono',
        label: 'Teléfono'
    },
    {
        name: 'BillName',
        type: 'string',
        required: true,
        placeholder: 'Ingresa el Nombre de la factura',
        label: 'Nombre de la factura'
    },
    {
        name: 'Nit',
        type: 'string',
        required: true,
        placeholder: 'Ingresa el NIT',
        label: 'NIT'
    },
    {
        name: 'Contact',
        type: 'string',
        required: true,
        placeholder: 'Ingresa el contacto',
        label: 'Contacto / CHAMP'
    },
    {
        name: 'Position',
        type: 'string',
        required: true,
        placeholder: 'Ingresa la posición del contacto',
        label: 'Posición'
    },
    {
        name: 'AdministratorContact',
        type: 'string',
        required: true,
        placeholder: 'Ingresa el contacto',
        label: 'Contacto / Administrador'
    }
];
