import {
	Body,
	Container,
	Head,
	Html,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";

interface BugReportEmailProps {
	bugPrioritytoggle: string;
	bugDescription: string;
	bugReasontoggle: string;
}

export const BugReportEmail = ({
	bugDescription,
	bugPrioritytoggle,
	bugReasontoggle,
}: BugReportEmailProps) => (
	<Html>
		<Head />
		<Body style={main}>
			<Preview>{bugDescription}</Preview>
			<Container style={container}>
				{/* <Img
					src={`${baseUrl}/static/github.png`}
					width="32"
					height="32"
					alt="Github"
				/> */}

				<Text style={title}>
					<strong>{bugPrioritytoggle}</strong>: {bugReasontoggle}
				</Text>

				<Section style={section}>
					<Text style={text}>
						<strong>Bug Description:</strong>
					</Text>
					<Text style={text}>{bugDescription}</Text>
				</Section>
				<Text style={links}>
					<Link style={link}>Your security audit log</Link> ・{" "}
					<Link style={link}>Contact support</Link>
				</Text>

				<Text style={footer}>
					PawMed AI • jpdevdotcom • jp dacallos • Catarman, Northern Samar,
					Philippines
				</Text>
			</Container>
		</Body>
	</Html>
);

export default BugReportEmail;

const main = {
	backgroundColor: "#ffffff",
	color: "#24292e",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
	maxWidth: "480px",
	margin: "0 auto",
	padding: "20px 0 48px",
};

const title = {
	fontSize: "24px",
	lineHeight: 1.25,
};

const section = {
	padding: "24px",
	border: "solid 1px #dedede",
	borderRadius: "5px",
	textAlign: "center" as const,
};

const text = {
	margin: "0 0 10px 0",
	textAlign: "left" as const,
};

// const button = {
// 	fontSize: "14px",
// 	backgroundColor: "#28a745",
// 	color: "#fff",
// 	lineHeight: 1.5,
// 	borderRadius: "0.5em",
// 	padding: "12px 24px",
// };

const links = {
	textAlign: "center" as const,
};

const link = {
	color: "#0366d6",
	fontSize: "12px",
};

const footer = {
	color: "#6a737d",
	fontSize: "12px",
	textAlign: "center" as const,
	marginTop: "60px",
};
