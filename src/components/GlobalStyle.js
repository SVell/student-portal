import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding: 0;
		box-sizing: 0;
		font-family: 'Poppins';
	}
	h1, h2{
		font-family: 'Poppins';
		color: white;
	}
`;

export default GlobalStyle;
