
# Bulk Google Translate

This script allows you to bulk translate words or sentences from a source language to a target language using the Google Translate API. It leverages the [`@vitalets/google-translate-api`](https://www.npmjs.com/package/@vitalets/google-translate-api) package to make translation requests.

## Prerequisites

Before using this tool, make sure you have the following prerequisites:

- Node.js 
- npm
## Installation

1. Clone the repository to your local machine.
2. Navigate to the repository directory.
3. Install the required dependencies by running the following command:

```bash
npm install
```

## Usage

1. Open the `index.js` file.
2. Customize the following variables according to your needs:

   - `TO`: The target language code (e.g., 'en' for English).
   - `FROM`: The source language code (e.g., 'de' for German).
   - `SOURCE_FILE`: The path to the JSON file containing the sentences to translate.
   - `DEST_FILE`: The desired path and filename for the translated results JSON file.
   - `ips`: An array of IP addresses or proxy URLs to bypass rate limits. To obtain the list, follow these steps:
     - Run the provided [Colab link](https://colab.research.google.com/drive/1Ud7b31vAhg-s_inMD6TXXPKIbzk9S8ls?usp=sharing) to retrieve a list of IP addresses.
     - Copy and paste the output list of IP addresses into the `ips` variable in the `index.js` file.

3. Save the changes to the `index.js` file.
4. Run the script by executing the following command in the repository directory:

```bash
node index.js
```

The tool will start translating each sentence from the `SOURCE_FILE` and save the results to the `DEST_FILE`. It will display the progress, indicating the number of sentences processed.

If the tool encounters rate limits or errors, it will automatically switch to a different proxy from the `ips` list and retry the translation. You can update the `ips` list if needed to ensure a smooth translation process.

## Notes

- Ensure that your source language and target language codes are valid according to the Google Translate API documentation. You can refer to [this](https://github.com/itsecurityco/to-google-translate/blob/master/supported_languages.json) file for a list of language codes supported by the API.
- The tool will write the translated results to a JSON file in the specified format.
- You can modify the tool to customize error handling, retry behavior, or integrate with other services as needed.

Feel free to modify and enhance the script according to your requirements. Happy translating!
