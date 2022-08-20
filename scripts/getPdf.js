const base64 = require("base64topdf");
const baseVar = `JVBERi0xLjYKJb/3ov4KMSAwIG9iago8PCAvT3V0bGluZXMgMyAwIFIgL1BhZ2VzIDQgMCBSIC9UeXBlIC9DYXRhbG9nID4+CmVuZG9iagoyIDAgb2JqCjw8IC9DcmVhdGlvbkRhdGUgPGI0YzY0ZjEzNDBmZWRlM2RlNWNlMDBiMjdkNjIxYzViYzYwYzBjY2M4M2EzOGIxMzdjMzk3NWNlNDQ4ODI0MGI5NzVlYTE1NGI3NzYwODYzMzUyZDQ5ZTQ2MmMwNTllOD4gL0NyZWF0b3IgPDlkZmU3NTcxNWFmZDlmOGFjZmY5NGY2ZWQxMzgyY2U1M2FjZjhjZTEzNWIwYmIzODg2MzgwZWI1NzRjNTVjNDJmYjA4NTY5NWFkMzdmOGRlYzk2MDA3YjhmMWI1YmI4MT4gL1Byb2R1Y2VyIDxjMTBjMjMwNWIxZTU0OGJiNTkwNTM1NWE5NWM3NGM5MmZmYWQyYzA4ZmFmNDYyNzE2MzA4ZGU1NzVlN2QxZWVmPiA+PgplbmRvYmoKMyAwIG9iago8PCAvQ291bnQgMCAvVHlwZSAvT3V0bGluZXMgPj4KZW5kb2JqCjQgMCBvYmoKPDwgL0NvdW50IDIgL0tpZHMgWyA1IDAgUiA2IDAgUiBdIC9UeXBlIC9QYWdlcyA+PgplbmRvYmoKNSAwIG9iago8PCAvQ29udGVudHMgNyAwIFIgL01lZGlhQm94IFsgMCAwIDYxMi4wMDAwIDc5Mi4wMDAwIF0gL1BhcmVudCA0IDAgUiAvUmVzb3VyY2VzIDw8IC9Gb250IDw8IC9GMSA4IDAgUiA+PiAvUHJvY1NldCA5IDAgUiA+PiAvVHlwZSAvUGFnZSA+PgplbmRvYmoKNiAwIG9iago8PCAvQ29udGVudHMgMTAgMCBSIC9NZWRpYUJveCBbIDAgMCA2MTIuMDAwMCA3OTIuMDAwMCBdIC9QYXJlbnQgNCAwIFIgL1Jlc291cmNlcyA8PCAvRm9udCA8PCAvRjEgOCAwIFIgPj4gL1Byb2NTZXQgOSAwIFIgPj4gL1R5cGUgL1BhZ2UgPj4KZW5kb2JqCjcgMCBvYmoKPDwgL0xlbmd0aCAzMzYgL0ZpbHRlciAvRmxhdGVEZWNvZGUgPj4Kc3RyZWFtCjSx1IGLdYFVLD2exQdtKRbPvh9qbhVe4DThwu15NhxKZBtAt8cJhMSFELPnLADENqxD8vQbRmLq+4xg7qwifBZhr9NJkVmCPEaZ2QS/9uxfZ/VJiyP5Y1Svt8shVltTFqbeprST+WlmMTfqIcjKvWCaT3LUmUQ2++VgG4Q4zIcx7vwt7JQVPoba5u57ke7oRENYQz77PQjGrIFoP8EyKI4f4rTy8+N2YzcPFW8sC11m9r6v779IgqO68encwhY25I8XPlf5acyyAYB3dCDKENMvzKjoJE2YGWR8NqJ5+woFSm1MYm8yXwc1DbdSlGU7cTpOogaEhWCGaxSz8HfSO9F5ACO8EYfv3undTv98JrjZTTe+rD0Pe/8Z12n4hKsTENpFWWQBHZIDuW/44MygCNtwl0GNAm6CXR2rsW2LKJBC8EskIho6I7rIGx4TO5D4bWVuZHN0cmVhbQplbmRvYmoKOCAwIG9iago8PCAvQmFzZUZvbnQgL0hlbHZldGljYSAvRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZyAvTmFtZSAvRjEgL1N1YnR5cGUgL1R5cGUxIC9UeXBlIC9Gb250ID4+CmVuZG9iago5IDAgb2JqClsgL1BERiAvVGV4dCBdCmVuZG9iagoxMCAwIG9iago8PCAvTGVuZ3RoIDMwNCAvRmlsdGVyIC9GbGF0ZURlY29kZSA+PgpzdHJlYW0KYFhTsJDojzLsi+33uKV2z8a8aQWDQWqIswJsgCFozZ6C2x87jgRizVe1gzQEkElvtoP5NnutfYjVV44sJrfIxVfvtdWLuAeGB8ZulCr7Ki1KHFoB3kFsethn89rg3K5dY++isV39FqvExJnRYthw4sqUm9jkkuDyizKeBJ/Ybo2fnICanUIL3Vj8isXMg9Lv8j4WHUwHvcfE7VMTVP1u3qT2ngdbPLHC5MfWWgYmIXJE+LX6uAyMWRt4h21AUCWredDP4+9PaMbVFfG0NwyV9YZebDn1CFvqaG8GBu/T9s3hLghUdauXb6S2ftel7DKfhWhMpzQEzsH6pxdkfoMiyIZb+w7yGIIQNirNIknDHxSDfpdMXLA3uLOQNp6QI7U8eUNgO04ydzxY9dyW405+zGVuZHN0cmVhbQplbmRvYmoKMTEgMCBvYmoKPDwgL0NGIDw8IC9TdGRDRiA8PCAvQXV0aEV2ZW50IC9Eb2NPcGVuIC9DRk0gL0FFU1YyIC9MZW5ndGggMTYgPj4gPj4gL0ZpbHRlciAvU3RhbmRhcmQgL0xlbmd0aCAxMjggL08gPDBkMzY4NThlMTg4OTVjOTU4Y2M1YzU2NTNjZTZjYTViNmI2M2RhYzRjZDA2MDJiNjVmODczYzljNjE1Nzg4ZTU+IC9QIC0yMCAvUiA0IC9TdG1GIC9TdGRDRiAvU3RyRiAvU3RkQ0YgL1UgPGRjMTNkMTRkMmEzNGE3NDMzOWYxMzdiYWRkMmZjMDQ1MDEyMjQ1NmE5MWJhZTUxMzQyNzNhNmRiMTM0Yzg3YzQ+IC9WIDQgPj4KZW5kb2JqCnhyZWYKMCAxMgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA4MCAwMDAwMCBuIAowMDAwMDAwMzk5IDAwMDAwIG4gCjAwMDAwMDA0NDUgMDAwMDAgbiAKMDAwMDAwMDUxMCAwMDAwMCBuIAowMDAwMDAwNjYzIDAwMDAwIG4gCjAwMDAwMDA4MTcgMDAwMDAgbiAKMDAwMDAwMTIyNCAwMDAwMCBuIAowMDAwMDAxMzMxIDAwMDAwIG4gCjAwMDAwMDEzNjEgMDAwMDAgbiAKMDAwMDAwMTczNyAwMDAwMCBuIAp0cmFpbGVyIDw8IC9JbmZvIDIgMCBSIC9Sb290IDEgMCBSIC9TaXplIDEyIC9JRCBbPDk1ZDU5YTRjMTgzZWI3MmY3NTA0NzM1MzE3MThkNTJiPjw5NWQ1OWE0YzE4M2ViNzJmNzUwNDczNTMxNzE4ZDUyYj5dIC9FbmNyeXB0IDExIDAgUiA+PgpzdGFydHhyZWYKMjAzOAolJUVPRgo=`;
let decodedBase64 = base64.base64Decode(baseVar, "assets/decoded/decodedFile.pdf");