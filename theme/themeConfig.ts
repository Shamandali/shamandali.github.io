import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        // fontSize: 16,
        // colorPrimary: '#5E0855',
        // borderRadius: 4,


    },
    components: {
        Button: {
            borderRadius: 25,
            fontSize: 20,
            colorText: 'white',

        },
        Input: {
            colorBgContainer: '#F9EEFF',
            borderRadius: 4,
            colorBorder: 'transparent',

        },
        InputNumber: {
            colorBgContainer: '#F9EEFF',
            borderRadius: 4,
            colorBorder: 'transparent'
        }


    }
};

export default theme;