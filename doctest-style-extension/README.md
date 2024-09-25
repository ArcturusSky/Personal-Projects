# Doctest Style Extension

## Overview
Doctest Style Extension is a Visual Studio Code extension that provides custom colors and syntax highlighting for doctest files. This extension enhances the readability and visual appeal of .txt files containing doctest content.

## Author's Note
Hey! Hi, it's ArcturusSky, alias Arc. You might wonder why I mentioned Perplexity in the "Author" section. Well, this extension wasn't originally meant to be an extension at all! I was working on a school task, creating a doctest, when I thought, "it's too plain with all the white". So, I asked Perplexity AI for a way to add colors. 

At first, it suggested just changing the language, which wasn't effective. Then it proposed a simple .json script, a single file. But I wanted more than just "one line in blue" etc. So I kept asking, and one thing led to another, and here we are with this full-fledged extension!

## Features
- Custom syntax highlighting for doctest files
- Dark theme optimized for doctest content
- Improved readability for .txt files containing doctests
- Markdown-like heading styles

## Syntax Highlighting Guide
This extension applies custom coloring to different elements of your doctest files:

- **Prompt (>>>)**: Highlighted in bright blue to clearly mark the start of each Python command.
- **Python Code**: Syntax highlighted similar to standard Python, including:
  - Keywords in purple
  - Strings in soft orange
  - Numbers in light green
  - Function names in light yellow
- **Expected Output**: Displayed in bright yellow to differentiate from input.
- **Comments (#)**: Shown in green to distinguish from code and output.
- **Error Messages**: Highlighted in bright red for quick identification.

## Heading Styles
The extension supports Markdown-like heading styles:

- **# # Heading 1**: Gold text, bold, italic, and underlined.
- **# ## Heading 2**: Gold text, bold and italic.
- **# ### Heading 3**: Gold text, italic.

## Installation
1. Open Visual Studio Code.
2. Go to the Extensions view (Ctrl+Shift+X).
3. Search for "Doctest Style Extension".
4. Click Install.

Alternatively, you can download the .vsix file from the [releases page](https://github.com/ArcturusSky/Personal-Projects/releases) and install it manually.

## Usage
Once installed, the extension will automatically apply the custom syntax highlighting to .txt files. To activate the custom theme:

1. Open the Command Palette (Ctrl+Shift+P).
2. Type "Preferences: Color Theme".
3. Select "Doctest with Style".

## Configuration
This extension doesn't require any additional configuration. It works out of the box for .txt files.

## Example
![Example](placeholder.jpg)

## Contributing
This project is part of a personal repository and is not currently accepting contributions. However, feel free to fork the project for your own use.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
Created by ArcturusSky with Perplexity AI

## Acknowledgments
- Inspired by the need for better doctest visualization in VS Code.
- Thanks to the VS Code extension development community for their resources and documentation.
- Special thanks to Perplexity AI for the initial inspiration and guidance.

## Support
For issues, questions, or suggestions, please [open an issue](https://github.com/ArcturusSky/Personal-Projects/issues) in the GitHub repository.