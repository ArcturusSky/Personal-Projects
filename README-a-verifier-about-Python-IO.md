# Python - Programming for Begginers (Refreshing memories)

This repository will hold all the directories, projects and task about **Python**. In this README.md you will find some reminders like "what is a variable" "how to assign values" etc, to get back memories from the "C" learnt previously. However its quality of reminder, it also add some concepts and syntax unique to Python.

## Summary

- [Python - Programming for Begginers (Refreshing memories)](#python---programming-for-begginers-refreshing-memories)
  - [Summary](#summary)
  - [Glossary](#glossary)
  - [Reading and Writing Files](#reading-and-writing-files)
    - [Basic syntax](#basic-syntax)
  - [Predefined Clean-up Actions](#predefined-clean-up-actions)
    - [Basic syntax](#basic-syntax-1)
  - [Binary Files](#binary-files)
    - [Basic syntax](#basic-syntax-2)
  - [Serializing Data with JSON](#serializing-data-with-json)
    - [Basic Syntax](#basic-syntax-3)
  - [Reading and Writing Files in Python](#reading-and-writing-files-in-python)
    - [Basic Syntax](#basic-syntax-4)
    - [Reading from Files](#reading-from-files)
    - [Writing to Files](#writing-to-files)
    - [Using the `with` Statement](#using-the-with-statement)
    - [Memory Aid](#memory-aid)
    - [Real-Life Analogy](#real-life-analogy)
  - [JSON Data Format](#json-data-format)
    - [Basic Syntax](#basic-syntax-5)
    - [Reading JSON Data in Python](#reading-json-data-in-python)
    - [Writing JSON Data in Python](#writing-json-data-in-python)
    - [Memory Aid](#memory-aid-1)
    - [Real-Life Analogy](#real-life-analogy-1)
  - [The sys Module](#the-sys-module)
    - [Basic Syntax](#basic-syntax-6)
    - [Commonly Used Attributes](#commonly-used-attributes)
    - [Commonly Used Functions](#commonly-used-functions)
    - [Memory Aid](#memory-aid-2)
    - [Real-Life Analogy](#real-life-analogy-2)
  - [Author](#author)

## Glossary


 
## Reading and Writing Files

**Definition**

The `open()` function returns a file object and is commonly used with two positional arguments and one keyword argument: `open(filename, mode, encoding=None)`.

### Basic syntax

To use the `open()` function, you need to specify the filename, the opening mode, and the encoding.

*Example:*

```python
f = open('workfile', 'w', encoding="utf-8")
```

**Explanations, breakdown of the example:**

- **Filename**: The first argument is a string containing the filename.
- **Mode**: The second argument is a string containing a few characters describing how the file will be used:
  - 'r': read-only (default)
  - 'w': write-only (overwrites existing file)
  - 'a': append (adds to end of file)
  - 'r+': read and write
- **Encoding**: The third argument specifies the character encoding. UTF-8 is recommended unless you need a different encoding.

**Memory aid**: Remember "FME" - Filename, Mode, Encoding.

**Real-life analogy**: Think of opening a file like entering a room. The filename is the room's address, the mode is how you want to use the room (look around, rearrange furniture, or add new items), and the encoding is the language you'll use inside.

## Predefined Clean-up Actions

**Definition**

Some objects in Python define standard clean-up actions to be performed when the object is no longer needed, regardless of whether the operation using the object was successful or not. This ensures that resources are properly released, even in the case of errors or exceptions.

### Basic syntax

Here's an example of opening a file and printing its contents, which can lead to issues if the file is not properly closed:

```python
for line in open("myfile.txt"):
    print(line, end="")
```

**Explanations, breakdown of the example:**

- This code opens the file, reads and prints the lines, but does not explicitly close the file.
- Leaving the file open can be problematic, especially in larger applications, as it can lead to resource leaks.

To ensure the file is properly closed, even in the case of an error or exception, you can use the `with` statement:

```python
with open("myfile.txt") as f:
    for line in f:
        print(line, end="")
```

**Explanations, breakdown of the example:**

- The `with` statement automatically takes care of closing the file object `f` when the block of code inside the `with` statement is finished executing, even if an exception occurs.
- This is a common pattern for working with objects that provide predefined clean-up actions, as it ensures the resources are properly released.

**Memory aid**: Think of the `with` statement as a "guardian" that ensures the file is properly closed, no matter what happens.

**Real-life analogy**: Imagine you're borrowing a book from the library. The `with` statement is like the librarian, who makes sure you return the book when you're done, even if you accidentally spill coffee on it.

## Binary Files

**Definition**

Binary files contain raw bytes rather than text. They are used for non-text data like images, audio, video, etc.

### Basic syntax

To open a binary file, use the 'b' flag in the mode parameter:

*Example:*

```python
with open('image.jpg', 'rb') as f:
    data = f.read()
```

**Explanations, breakdown of the example:**

- **'rb'**: Opens the file in read binary mode
- **f.read()**: Reads raw bytes from the file
- **No encoding**: Binary files don't use character encoding

Key differences from text files:

- **Bytes vs Strings**: Binary files work with bytes objects, not strings
- **No encoding**: No need to specify an encoding when opening
- **Seek/Tell**: seek() and tell() work with byte positions, not characters
- **No line reading**: Methods like readline() don't work on binary files

**Memory aid**: Think "B for Bytes" when working with Binary files.

**Real-life analogy**: A text file is like reading a book, while a binary file is like looking at the 1s and 0s on a CD - it's the raw data.

## Serializing Data with JSON

**Definition**

JSON (JavaScript Object Notation) is a popular data format used for exchanging data between applications. Python's `json` module provides tools to serialize Python objects into JSON strings and deserialize JSON strings back into Python objects.

### Basic Syntax

To serialize a Python object into a JSON string, use `json.dumps()`:

*Example:*

```python
import json

data = {"name": "Alice", "age": 30, "city": "New York"}
json_string = json.dumps(data)
print(json_string)
```

**Explanations, breakdown of the example:**

- **`import json`**: Imports the json module
- **`data`**: A Python dictionary containing some data
- **`json.dumps(data)`**: Serializes the `data` dictionary into a JSON string
- **`print(json_string)`**: Prints the resulting JSON string

**To deserialize a JSON string back into a Python object, use `json.loads()`:

*Example:*

```python
json_string = '{"name": "Alice", "age": 30, "city": "New York"}'
data = json.loads(json_string)
print(data)
```

**Explanations, breakdown of the example:**

- **`json_string`**: A JSON string representing some data
- **`json.loads(json_string)`**: Deserializes the `json_string` into a Python dictionary
- **`print(data)`**: Prints the resulting Python dictionary

**Memory Aid**:

- **`dumps()`**: **D**umps data to **s**tring (serialization)
- **`loads()`**: **L**oads data from **s**tring (deserialization)

**Real-Life Analogy**:

Think of JSON as a universal language for data. Serialization is like translating your data from your native language (Python) into JSON, and deserialization is like translating it back from JSON into your native language. This allows different applications that might not "speak" the same language to easily exchange information. 

## Reading and Writing Files in Python

**Definition**

Files are used to store data permanently. Python provides several methods to read from and write to files, which can be either plaintext or binary files.

### Basic Syntax

To open a file, use the `open()` function with the appropriate mode:

*Example:*

```python
# Open a file for reading
file = open('hello.txt', 'r')
# Open a file for writing
file = open('hello.txt', 'w')
# Open a file for appending
file = open('hello.txt', 'a')
```

**Explanations, breakdown of the example:**

- **Modes**:
  - `'r'`: Read mode (default)
  - `'w'`: Write mode (overwrites existing file)
  - `'a'`: Append mode (adds to the end of the file)
  - `'r+'`: Read and write mode
  - `'rb'`, `'wb'`, `'ab'`: Binary modes for reading, writing, and appending binary files respectively.

### Reading from Files

To read from a file, you can use several methods:

*Example:*

```python
# Open the file
file = open('hello.txt', 'r')
# Read the entire file
content = file.read()
print(content)
# Read line by line
lines = file.readlines()
for line in lines:
    print(line.strip())
# Read one line at a time
line = file.readline()
print(line.strip())
file.close()
```

**Explanations, breakdown of the example:**

- **`read()`**: Reads the entire file as a single string.
- **`readlines()`**: Reads all lines and returns them as a list of strings.
- **`readline()`**: Reads one line at a time.
- **Closing the File**: It is important to close the file after you are done with it using `file.close()` or use the `with` statement to ensure the file is closed automatically.

### Writing to Files

To write to a file, you need to open it in write or append mode:

*Example:*

```python
# Open the file in write mode
file = open('hello.txt', 'w')
# Write to the file
file.write('Hello world!\n')
file.close()

# Open the file in append mode
file = open('hello.txt', 'a')
file.write('Bacon is not a vegetable.\n')
file.close()
```

**Explanations, breakdown of the example:**

- **Write Mode (`'w'`)**: Overwrites the existing file or creates a new one if it does not exist.
- **Append Mode (`'a'`)**: Appends to the end of the existing file or creates a new one if it does not exist.
- **Adding Newline Characters**: You need to add newline characters (`\n`) manually when writing to the file.

### Using the `with` Statement

The `with` statement ensures that the file is properly closed after use, even if an exception occurs:

*Example:*

```python
with open('hello.txt', 'r') as file:
    content = file.read()
    print(content)

with open('hello.txt', 'w') as file:
    file.write('Hello world!\n')
```

**Explanations, breakdown of the example:**

- The `with` statement creates a runtime context that ensures the file is closed automatically when the block is exited, regardless of whether an exception occurred.

### Memory Aid

- **Open**: Think of opening a file like opening a door.
- **Read/Write**: Reading is like taking information out, writing is like putting information in.
- **Close**: Closing the file is like closing the door to ensure resources are released.

### Real-Life Analogy

- Opening a file is like opening a book to read or write in it. You need to specify how you want to interact with the book (read, write, or both), and when you're done, you close the book to keep it safe and organized.

## JSON Data Format

**Definition**

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write. It is a popular format for exchanging data between web servers, web applications, and mobile apps.

### Basic Syntax

JSON data is represented as a collection of key-value pairs, where each key is a string and each value can be a string, number, boolean, array, or object.

*Example:*

```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

**Explanations, breakdown of the example:**

- **Keys**: Strings that identify the values in the JSON object.
- **Values**: Can be strings, numbers, booleans, arrays, or objects.

### Reading JSON Data in Python

To read JSON data in Python, you can use the `json` module.

*Example:*

```python
import json

json_data = '{"name": "John", "age": 30, "city": "New York"}'
python_data = json.loads(json_data)
print(python_data)
```

**Explanations, breakdown of the example:**

- **`json.loads()`**: Converts a JSON string to a Python object.

### Writing JSON Data in Python

To write JSON data in Python, you can use the `json` module.

*Example:*

```python
import json

python_data = {"name": "John", "age": 30, "city": "New York"}
json_data = json.dumps(python_data)
print(json_data)
```

**Explanations, breakdown of the example:**

- **`json.dumps()`**: Converts a Python object to a JSON string.

### Memory Aid

- **JSON**: Think of JSON as a lightweight data interchange format that is easy to read and write.

### Real-Life Analogy

- **JSON**: Think of JSON as a simple way to exchange data between different systems, like a common language that everyone can understand.

## The sys Module

**Definition**

The `sys` module in Python provides access to some variables used or maintained by the interpreter and to functions that interact strongly with the interpreter. It allows your Python script to interact with the underlying operating system.

### Basic Syntax

To use the `sys` module, you need to import it:

*Example:*

```python
import sys
```

**Explanations, breakdown of the example:**

- **`import sys`**: Imports the `sys` module, allowing you to access its attributes and functions.

### Commonly Used Attributes

Some of the commonly used attributes in the `sys` module include:

*Example:*

```python
print(sys.argv)      # Command-line arguments
print(sys.platform) # Current platform
print(sys.version)  # Python version
```

**Explanations, breakdown of the example:**

- **`sys.argv`**: A list of command-line arguments passed to the Python script.
- **`sys.platform`**: A string identifying the current platform.
- **`sys.version`**: A string containing the version number of the Python interpreter.

### Commonly Used Functions

The `sys` module also provides several useful functions:

*Example:*

```python
sys.exit(1)   # Exit the Python interpreter
sys.stderr.write("Error message\n") # Write to standard error
sys.stdin.read()  # Read from standard input
```

**Explanations, breakdown of the example:**

- **`sys.exit()`**: Exits the Python interpreter with the specified exit code.
- **`sys.stderr`**: Provides access to the standard error stream.
- **`sys.stdin`**: Provides access to the standard input stream.

### Memory Aid

- **`sys`**: Think of the `sys` module as a way to interact with the system your Python script is running on.

### Real-Life Analogy

- **`sys`**: Imagine the `sys` module as a bridge between your Python script and the underlying operating system, allowing you to access information about the system and perform system-level tasks.

## Author

Anne-Cécile Besse (Arc)