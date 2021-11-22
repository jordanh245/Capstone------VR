// import initialState from "../data/data";

const initalState = [];

const Products = (state=initalState,action) => {
	switch (action.type) {
		case "LOAD_PRODUCTS":
			console.log(action.payload)
			return [...state, ...action.payload]
		default:
			return state;
	}
}
export default Products;