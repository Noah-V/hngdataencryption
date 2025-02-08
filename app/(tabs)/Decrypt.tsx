import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Button, Card, TextInput } from "react-native-paper";
import { useState } from "react";
import CustomKeyboardView from "@/components/CustomKeyboardView";
import { encryptDecrypt } from "@/utils/EncryptionDecryption";

export default function TabTwoScreen() {
	const [input, setInput] = useState("");
	const [key, setKey] = useState("");
	const [result, setResult] = useState("");

	const handleDecryption = () => {
		if (input && key) {
			try {
				const decrypted = encryptDecrypt(input, key, true);
				setResult(decrypted);
			} catch (error) {
				setResult("Error: Invalid input or key");
			}
		}
	};
	return (
		<CustomKeyboardView>
			<Card style={styles.card}>
				<Card.Title title="Decryption" />
				<Card.Content>
					<TextInput label="Text to Decrypt" value={input} onChangeText={setInput} style={styles.input} />
					<TextInput label="Decryption Key" value={key} onChangeText={setKey} style={styles.input} />
					<Button mode="contained" onPress={handleDecryption} style={styles.button}>
						Decrypt
					</Button>
					{result && (
						<View style={styles.resultContainer}>
							<Text style={styles.resultLabel}>Decrypted Text:</Text>
							<Text selectable>{result}</Text>
						</View>
					)}
				</Card.Content>
			</Card>
		</CustomKeyboardView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		justifyContent: "center",
	},
	card: {
		elevation: 4,
	},
	input: {
		marginBottom: 16,
	},
	button: {
		marginTop: 8,
	},
	resultContainer: {
		marginTop: 16,
	},
	resultLabel: {
		fontWeight: "bold",
		marginBottom: 8,
	},
});
