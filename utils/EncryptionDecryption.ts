var base64 = require("base-64");

export function encryptDecrypt(input: string, key: string, decryption?: boolean): string {
	let output: string = "";

	if (!decryption) {
		for (let i = 0; i < input.length; i++) {
			let inputCharCode = input.charCodeAt(i);
			let keyCharCode = key.charCodeAt(i % key.length);

			output += String.fromCharCode(inputCharCode ^ keyCharCode);
		}
		return base64.encode(output);
	} else {
		let stringResult = base64.decode(input);
		for (let i = 0; i < stringResult.length; i++) {
			let inputCharCode = stringResult.charCodeAt(i);
			let keyCharCode = key.charCodeAt(i % key.length);

			output += String.fromCharCode(inputCharCode ^ keyCharCode);
		}
		return output;
	}
}
