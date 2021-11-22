import React from 'react'
import error from "../assets/error.png"
import {ErrorStyle, ErrorH1} from "../styled-components/ErrorStyle"
export default function Error() {
	return (
		<div>
		<ErrorStyle>
			
			<img src={error} alt=""  width="500px"/>
		</ErrorStyle>
		<ErrorH1>Oops! This page doesnt exist... </ErrorH1>
		
</div>
	)
}
