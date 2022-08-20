import { encrypt } from "node-qpdf2";

const options = {
    input: "./assets/sample.pdf",
    keyLength: 128,
    output: "/assets/encrypted.pdf",
    password: '123456789',
    restrictions: {
        print: 'low',
        useAes: 'y'
    }
}

await encrypt(options);