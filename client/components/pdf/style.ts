import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
	page: {
		backgroundColor: "#fff",
		color: "#262626",
		fontFamily: "Helvetica",
		fontSize: 12,
		padding: "30px 50px",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	title: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
		color: "#FF7800",
		fontSize: 25,
	},
	titleImage: {
		width: 30,
		height: 30,
	},
	textBold: {
		fontFamily: "Helvetica-Bold",
	},

	information: {
		flexDirection: "column",
		gap: 10,
	},
	informationImage: {
		borderRadius: 10, // just use a number, no "px"
		overflow: "hidden", // important for borderRadius to work properly on images
	},
	informationData: {
		flexDirection: "column",
		gap: 5,
	},
});
