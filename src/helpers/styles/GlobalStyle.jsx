import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const global = {};

// Constants
global.component = {
    width: "100%",
    height: "auto",
    corners: "20px",
    margin: "20px",
    padding: "20px",
    disabled: `dashed 1px #969da3`
}

global.cta = {
    borderRadius: "100%",
    width: "160px",
    height: "40px"
}

// Color
global.color = {
    // Constants
    primary: '#0f7ddb',
    white: '#ffffff',
    disabled: '#969da3',
    black: '#20272e',

    // Components
    componentLight: '#eff0f2',
    componentDark: '#525a62',

    // Text colors
    textLight: '#20272e',
    textDark: '#ffffff'
}

// Containers
export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 90%;
    height: 100vh;
    margin: 0 auto;
`;

// Global styles
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow: none scroll;
    }
    
    /* Defaul text */
    h1, p, a, li, span, em, textarea, .button{
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        border: none;

        &:focus {
            -webkit-tap-highlight-color: transparent;
        }
    }

    span, em, input, .button {
        font-size: 12px;
    }

    p, textarea {
        font-size: 20px;
        font-weight: bold;
    }

    p {
        margin-right: 5px;
    }

    ul, li , a{
        list-style: none;
        text-decoration: none;
    }

    textarea {
        outline: none;
        resize: none;
    }

    /* CTA */


    /* Content wrapper */
    .content {
        margin: 15px;
    }

    /* List items */
    .list-item {
        display: flex;
        flex-direction: row;
		align-items: center;

        height: 45px;
		margin-left: 15px;
        margin-bottom: 10px;
	}

    /* Light Theme */

    /* Dark Theme */
`;

export default GlobalStyles;