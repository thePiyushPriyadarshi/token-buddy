# Token Buddy

## Tokenization Algorithm

This project uses a custom algorithm to convert strings into tokens and back.  
The process is as follows:

### String to Token

1. **Split Input:**  
   The input string is split into words by spaces.

2. **Character Encoding:**  
   For each character in a word:
   - Get its ASCII code.
   - Add 64 to the ASCII code (ensures every character code is of three digits when converted to octal).
   - Convert the result to an octal (base-8) string.
   - Concatenate these octal strings for the word.

3. **Token Output:**  
   Each word is represented by its concatenated octal codes.  
   Words are joined by spaces to form the final token string.

**Example:**  
`Hi` →  
- 'H': ASCII 72 → 72+64=136 → octal '210'  
- 'i': ASCII 105 → 105+64=169 → octal '251'  
Token: `210251`

### Token to String

1. **Split Token:**  
   The token string is split into words by spaces.

2. **Character Decoding:**  
   For each word:
   - Split into chunks of 3 characters (each representing an octal code).
   - Convert each chunk from octal to decimal.
   - Subtract 64 to get the original ASCII code.
   - Convert to the corresponding character.

3. **String Output:**  
   Decoded words are joined by spaces to reconstruct the original string.

**Example:**  
Token `210251` →  
- '210': octal 210 → decimal 136 → 136-64=72 → 'H'  
- '251': octal 251 → decimal 169 → 169-64=105 → 'i'  
Result: `Hi`

---

## Usage

- **stringToToken(string):** Converts a string to its tokenized form.
- **tokenToString(token):** Decodes a token back to the original string.

See