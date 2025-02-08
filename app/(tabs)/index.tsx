import CustomKeyboardView from "@/components/CustomKeyboardView";
import { encryptDecrypt } from "@/utils/EncryptionDecryption";
import { useState } from "react";
import { Dimensions, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

export default function TabOneScreen() {
	const [input, setInput] = useState("");
	const [key, setKey] = useState("");
	const [result, setResult] = useState("");

	const handleEncryption = () => {
		if (input && key) {
			const encrypted = encryptDecrypt(input, key);
			setResult(encrypted);
		}
	};

	return (
		<CustomKeyboardView>
			<Card style={styles.card}>
				<Card.Title title="Encryption" />
				<Card.Content>
					<TextInput label={"Encrypt your text"} value={input} onChangeText={setInput} style={styles.input} />
					<TextInput label={"Encryption Key"} value={key} onChangeText={setKey} style={styles.input} />
					<Button mode="contained" style={styles.button} onPress={handleEncryption}>
						Encrypt
					</Button>
					{result && (
						<View style={styles.resultContainer}>
							<Text style={styles.resultLabel}>Encrypted Text:</Text>
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
		padding: 16,
		justifyContent: "center",
	},

	card: {
		elevation: 4,
	},

	input: {
		marginBottom: 6,
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
