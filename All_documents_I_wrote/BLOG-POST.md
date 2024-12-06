# Everything is an object!

## Summary
- [Everything is an object!](#everything-is-an-object)
  - [Summary](#summary)
  - [Introduction](#introduction)
  - [What is an "object"?](#what-is-an-object)
    - [1. `id` and `type` in Python](#1-id-and-type-in-python)
      - [1.1 When to Use Them](#11-when-to-use-them)
      - [1.2 Short Definition](#12-short-definition)
      - [1.3 Key Points](#13-key-points)
      - [1.4 Basic Syntax](#14-basic-syntax)
      - [1.5 Examples](#15-examples)
        - [1.5.1 Tracking Object Identity](#151-tracking-object-identity)
        - [1.5.2 Checking Object Type](#152-checking-object-type)
    - [2. Mutable Objects](#2-mutable-objects)
      - [2.1 When to Use Them](#21-when-to-use-them)
      - [2.2 Short Definition](#22-short-definition)
      - [2.3 Key Points](#23-key-points)
      - [2.4 Full List of Mutable Objects](#24-full-list-of-mutable-objects)
      - [2.5 Basic Syntax](#25-basic-syntax)
      - [2.6 Examples](#26-examples)
        - [2.6.1 Modifying a Mutable Object](#261-modifying-a-mutable-object)
        - [2.6.2 Memory Scheme for Mutable Objects](#262-memory-scheme-for-mutable-objects)
    - [3. Immutable Objects](#3-immutable-objects)
      - [3.1 When to Use Them](#31-when-to-use-them)
      - [3.2 Short Definition](#32-short-definition)
      - [3.3 Key Points](#33-key-points)
      - [3.4 Full List of Immutable Objects](#34-full-list-of-immutable-objects)
      - [3.5 Special Cases:](#35-special-cases)
        - [3.5.1 Tuple](#351-tuple)
        - [3.5.2 Frozenset](#352-frozenset)
        - [3.5.3 `NSMALLPOSINTS` and `NSMALLNEGINTS`](#353-nsmallposints-and-nsmallnegints)
      - [3.6 Basic Syntax](#36-basic-syntax)
      - [3.7 Examples](#37-examples)
        - [3.7.1 Immutability in Strings](#371-immutability-in-strings)
        - [3.7.2 Memory Optimization with `NSMALLPOSINTS` and `NSMALLNEGINTS`](#372-memory-optimization-with-nsmallposints-and-nsmallnegints)
    - [Memory Scheme to understand Mutable object and Immutable object](#memory-scheme-to-understand-mutable-object-and-immutable-object)
    - [4. Why It Matters](#4-why-it-matters)
      - [4.1 Key Differences Between Mutable and Immutable](#41-key-differences-between-mutable-and-immutable)
      - [4.2 Python’s Treatment of Objects](#42-pythons-treatment-of-objects)
      - [4.3 Explaining Assignment vs Referencing](#43-explaining-assignment-vs-referencing)
    - [Key Difference:](#key-difference)
    - [5. How arguments are passed to functions](#5-how-arguments-are-passed-to-functions)
      - [5.1 Short Definition](#51-short-definition)
      - [5.2 Key Points](#52-key-points)
      - [5.3 Examples](#53-examples)
        - [5.3.1 Passing Immutable Objects](#531-passing-immutable-objects)
        - [5.4.2 Passing Mutable Objects](#542-passing-mutable-objects)
      - [5.4 Memory Scheme to illustrate how arguments are passed to functions](#54-memory-scheme-to-illustrate-how-arguments-are-passed-to-functions)
      - [5.3 Memory Scheme to illustrate how arguments are passed to functions](#53-memory-scheme-to-illustrate-how-arguments-are-passed-to-functions)


## Introduction

From numbers to `lists`, `strings` to `dictionaries `- if you're coding in Python, you're living in a world where everything is an object. But how these objects behave -` mutable` or `immutable `- can make all the difference in your code's logic.
T
his blog post is brought to you by me, Arc, a student of the Holberton School as part of my school work. So, let's dive into Python's object model and uncover the "**how**" and "**why**" behind its design!

But, first thing first:

## What is an "object"?

In Python, objects are entities that contain both **data** and **code**.
Variables are **references** to these objects, acting as **labels** that point to the **objects** in memory.

Understanding how variables reference objects is crucial for efficient data management and manipulation in Python.

### 1. `id` and `type` in Python

#### 1.1 When to Use Them

- Use `id` and `type` to inspect the **identity** and **type** of objects during debugging or to verify how Python manages objects in memory.

#### 1.2 Short Definition

- **`id`**: Returns the **unique** identifier (**memory address**) of an object.  
- **`type`**: Returns the **data type** or **class** of an object.  

#### 1.3 Key Points

- `id` provides a way to check if two variables **refer** to the **same object**.  
- `type` ensures an object matches the expected data type.  

#### 1.4 Basic Syntax

```python
x = 42
print(id(x))       # Outputs: unique ID of the object
print(type(x))     # Outputs: <class 'int'>
```

#### 1.5 Examples

##### 1.5.1 Tracking Object Identity

```python
example_var = "hello"
y = example_var

print(id(example_var))  # Unique identifier for "example_var"
print(id(y))  # Same as "example_var" since "y" references the same object
```
**Breakdown:**
- `id(example_var)` and `id(y)` are the same because `y` is a reference to `example_var`.  
- Both variables point to the same memory location.

##### 1.5.2 Checking Object Type

```python
example_list = [1, 2, 3]
if type(example_list) is list:
    print("example_list is a list")
```
**Breakdown:**
- `type(example_list)` checks the type of `example_list`.  
- The `is` operator confirms if `example_list` is of type `list`.

---

### 2. Mutable Objects

#### 2.1 When to Use Them

Use mutability for objects that require in-place modifications or dynamic data structures, like `list` or `dict`.

#### 2.2 Short Definition

**Mutable objects** can have their content modified **after** creation without changing their identity (`id` or **memory adress**).  

#### 2.3 Key Points

- Common examples: `list`, `dict`, `set`.  
- Modifying a mutable object affects **all references** to that object.  
- Mutability is efficient for operations that involve frequent updates.

#### 2.4 Full List of Mutable Objects

- `list`
- `dict`
- `set`
- `bytearray`
- `User-defined classes` (if not **specifically** designed as immutable)

#### 2.5 Basic Syntax

```python
example_list = [1, 2, 3]
example_list.append(4)
print(example_list)  # Outputs: [1, 2, 3, 4]
```

#### 2.6 Examples

##### 2.6.1 Modifying a Mutable Object

```python
example_list = [1, 2, 3]
y = example_list
y.append(4)

print(example_list)  # Outputs: [1, 2, 3, 4]
print(id(example_list) == id(y))  # Outputs: True
```
**Breakdown:**
- Both `example_list` and `y` reference the same list.  
- Changes to `y` are reflected in `example_list` since they share the same identity.

##### 2.6.2 Memory Scheme for Mutable Objects
Imagine a `list` with elements `[1, 2, 3]`.  

- **Step 1:** Variable `example_list` points to the memory address of the list.  
- **Step 2:** Variable `y` references the same memory address.  
- **Step 3:** Modifications via `y` affect the shared list.  

---

### 3. Immutable Objects

#### 3.1 When to Use Them

Use **immutability** to ensure objects remain **unchanged**, even when shared across functions or scopes.  

#### 3.2 Short Definition

**Immutable objects** cannot be modified after their creation. Any operation that seems to modify them **creates a new object**.  

#### 3.3 Key Points

- Common examples: `int`, `float`, `str`, `tuple`.  
- Immutable objects are **safe** from **unintended** changes, enhancing predictability.  
- Python optimizes memory usage by reusing small immutable integers (`NSMALLPOSINTS` and `NSMALLNEGINTS`).  

#### 3.4 Full List of Immutable Objects

- `int`
- `float`
- `str`
- `tuple`
- `frozenset`
- `bytes`

#### 3.5 Special Cases: 

##### 3.5.1 Tuple

- **Tuple:** Immutable but can contain mutable elements.  
 
  ```python
  example_tuple = ([1, 2], 3)
  example_tuple[0].append(4)
  print(example_tuple)  # Outputs: ([1, 2, 4], 3)
  ```
  
  The tuple is **immutable** but the list inside of it isn't so it can be changed.

##### 3.5.2 Frozenset

- **Frozenset:** Immutable version of `set`.
  
    Same as a `set` but... frozen. (and not *"Let it go"*)

##### 3.5.3 `NSMALLPOSINTS` and `NSMALLNEGINTS`

`NSMALLPOSINTS` and `NSMALLNEGINTS` are internal constants used by CPython (the most common implementation of Python) to define the range of small integers that Python caches for performance optimization.

- **`NSMALLPOSINTS`**: Specifies the number of small **positive integers** (starting from 0) that are cached. By default, this includes integers from `0` to `256`.

- **`NSMALLNEGINTS`**: Specifies the number of small **negative integers** (starting from `-1` and going downward) that are cached. By default, this includes integers from `-1` to `-5`.

**Why is this done?**
Caching these frequently used integers saves memory and speeds up execution because Python reuses the same object instead of creating new ones every time such integers are referenced.

#### 3.6 Basic Syntax

```python
example_str = "hello"
y = example_str + " world"

print(example_str)  # Outputs: "hello"
print(y)  # Outputs: "hello world"
```

#### 3.7 Examples

##### 3.7.1 Immutability in Strings

```python
example_str = "immutable"
y = example_str

example_str += " string"
print(example_str)  # Outputs: "immutable string"
print(y)  # Outputs: "immutable"
print(id(example_str) == id(y))  # Outputs: False
```
**Breakdown:**
- A new string is created when `example_str` is updated.  
- The identity of `example_str` changes, while `y` remains unchanged.

##### 3.7.2 Memory Optimization with `NSMALLPOSINTS` and `NSMALLNEGINTS`

```python
example_small_integer = 5
y = 5
print(id(example_small_integer) == id(y))  # Outputs: True, small integers are reused

example_big_integer = 300
w = 300

print(id(example_big_integer) == id(w))  # NORMALY False but there is an exception (see below)
```
**Breakdown:**
- Python caches small integers (`-5` to `256` by default in CPython).  
- Larger integers are created as **new objects**.
  
:warning: NOTE: There may be **ONE EXCEPTION**!! if the big integer is reused right after creation, in the same snippet of code. They can share the same `id`
Here for exemple, it could be `True` since in the same block. But in every other situation theses large integers create a new object and then a new `id`

---

### Memory Scheme to understand Mutable object and Immutable object

```python
Mutable Object (list)     |     Immutable Object (string)
                          |
Variable    Memory        |     Variable    Memory
--------    -------       |     --------    -------
            +--------+    |                 +--------+
a --------->| [1,2,3] |   |     x --------->| "hello" |
            | ID:1000 |   |                 | ID:2000 |
            +--------+    |                 +--------+
     ^                    |
     |                    |                 +----------+
b ----                    |     y --------->| "hello!" |
                          |                 | ID:3000  |
                          |                 +----------+
```

### 4. Why It Matters

#### 4.1 Key Differences Between Mutable and Immutable

- **Mutable objects** can be modified in place, while **immutable objects** cannot.  
- Immutable objects ensure data integrity in multi-threaded applications or shared scopes.  

#### 4.2 Python’s Treatment of Objects

- Python **reuses** immutable objects to optimize memory and performance.  
- Mutable objects allow **dynamic** modifications but require careful handling to avoid unintended side effects.  

#### 4.3 Explaining Assignment vs Referencing

- **Assignment:** When you assign a variable to another, you're simply creating a **new reference** to the same object in memory. No new object is created; both variables point to the same location.
  
- **Referencing:** This refers to when two variables point to the **same object** in memory. They don’t need explicit assignment but are implicitly referencing the same data (e.g., through functions or data structures like lists).

 

```python
example_list = [1, 2, 3]
y = example_list # Assignment, both 'example_list' and 'y' reference the same list object

print(id(example_list)) # Outputs: same memory id for both print(id(y)) # Outputs: same memory id for both
```

**Breakdown:**  
- After `y = example_list`, `example_list` and `y` both **reference** the same list object in memory. Any changes to one will reflect in the other, as they are just two names for the same object.
- In **referencing**, no new object is created. Both variables refer to the same object in memory.

---

### Key Difference:
- **Assignment** simply means that a **new name** is assigned to the same object.
- **Referencing** means that **multiple names** (or **variables**) are **pointing** to the **same object**.

---

### 5. How arguments are passed to functions

#### 5.1 Short Definition

Python uses **object references** to pass arguments.  
Mutable objects allow changes within functions, while immutable objects do not.  

#### 5.2 Key Points

- Passing mutable objects allows in-place modification.  
- Passing immutable objects protects the original data from unintended changes.  

#### 5.3 Examples

##### 5.3.1 Passing Immutable Objects

```python
def modify_string(example_param: str) -> str:
    example_param += " world"
    return example_param

ex_first_string = "hello"
ex_modified_string = modify_string(ex__first_string)

print(ex_first_string)  # Outputs: "hello"
print(ex_modified_string)  # Outputs: "hello world"
```

**Breakdown:**
- `ex_first_string` remains unchanged because strings are **immutable**.  
- `modify_string` returns a new object.

##### 5.4.2 Passing Mutable Objects

```python
def modify_list(example_param: list) -> None:
    example_param.append(4)

example_list = [1, 2, 3]
modify_list(example_list)

print(example_list)  # Outputs: [1, 2, 3, 4]
```
**Breakdown:**  
- The `modify_list` function alters `example_list` in-place because `lists` are **mutable**.

#### 5.4 Memory Scheme to illustrate how arguments are passed to functions

#### 5.3 Memory Scheme to illustrate how arguments are passed to functions


```python
+------------------------------------------------------------------------------+
|                       Passing Arguments to Functions                         |
+------------------------------------------------------------------------------+
|                                                                              |
|  Before Function Call                 |  During Function Execution           |
|                                       |                                      |
|  Main Memory                          |  Function's Local Memory             |
|  +-------------------------+          |  +-------------------------+         |
|  | Immutable (str)         |          |  | Immutable (str)         |         |
|  |   +-------------------+ |          |  |   +-------------------+ |         |
|  |   | "hello"           | |          |  |   | "hello"           | |         |
|  |   | ID: 1000          | |          |  |   | ID: 1000          | |         |
|  |   +-------------------+ |          |  |   +-------------------+ |         |
|  | example_str --------→   |          |  | param_str --------→     |         |
|  |                         |          |  |                         |         |
|  | Mutable (list)          |          |  | Mutable (list)          |         |
|  |   +-------------------+ |          |  |   +-------------------+ |         |
|  |   | [1, 2, 3]         | |          |  |   | [1, 2, 3]         | |         |
|  |   | ID: 2000          | |          |  |   | ID: 2000          | |         |
|  |   +-------------------+ |          |  |   +-------------------+ |         |
|  | example_list -------→   |          |  | param_list -------→     |         |
|  +-------------------------+          |  +-------------------------+         |
|                                       |                                      |
|  Function Calls:                      |  Function Definitions:               |
|  modify_string(example_str)           |  def modify_string(param_str):       |
|  modify_list(example_list)            |  def modify_list(param_list):        |
|                                       |                                      |
+------------------------------------------------------------------------------+
|                                                                              |
|  After Function Execution                                                    |
|                                                                              |
|  Main Memory                                                                 |
|  +-------------------------+          +-------------------------+            |
|  | Immutable (str)         |          | Mutable (list)          |            |
|  |   +-------------------+ |          |   +-------------------+ |            | 
|  |   | "hello"           | |          |   | [1, 2, 3, 4]      | |            |
|  |   | ID: 1000          | |          |   | ID: 2000          | |            |
|  |   +-------------------+ |          |   +-------------------+ |            |
|  | example_str --------→   |          | example_list -------→   |            |
|  |                         |          |                         |            |
|  |   +-------------------+ |          | (example_list is still  |            |
|  |   | "hello world"     | |          |  the same object)       |            |
|  |   | ID: 3000          | |          |                         |            |
|  |   +-------------------+ |          |                         |            |
|  | (new string created)    |          |                         |            |
|  +-------------------------+          |+------------------------+            |
|                                                                              |
+------------------------------------------------------------------------------+
```