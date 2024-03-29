
import styled from 'styled-components'

export const CheckoutButtonStyle = styled.button`
box-shadow: 3px 4px 0px 0px #276873;
	background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	background-color:#599bb3;
	border:1px solid #29668f;
	color:#ffffff;
	font-size:15px;
	padding:7px 50px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;;
	margin-top: 10px;
	&:hover {
	background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
	background-color:#408c99;
	}
	&	:active {
	position:relative;
	top:1px;
	}
	@media screen and (min-width: 320px) and (max-width: 480px) {
		font-size: 40px;
		margin-left: 320px;
	}
	
`