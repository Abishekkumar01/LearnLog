# 🚀 Complete Class Notes: NumPy Random Generation & Slicing

Welcome to the NumPy deep dive! This document is structured exactly as you should present it: starting from the absolute basics, slowly introducing concepts, and finally blowing their minds with 3D array slicing! 

**Note to Instructor:** The examples in these notes are taken directly from your personal Jupyter Notebook practice. 

---

## Part 1: The Basics (Why do we need this?)

Start by explaining why we are learning NumPy instead of just using standard Python lists. 

**Instructor Script:** *"Imagine you have a list of a million numbers. Python lists are great, but they are slow and take up a lot of memory. NumPy is a library written in C that handles large amounts of data incredibly fast."*

```python
import numpy as np
```

---

## Part 2: Generating Random Data 🎲 (Getting our test data)

We need data to practice slicing. Instead of typing it manually, let's use NumPy's powerful `random` module.

### Level 1: 1D Arrays (A simple list)
Let's generate 10 random numbers between 1 and 50. Let's pretend these are the scores of 10 students.

```python
# Syntax: np.random.randint(low, high, size)
# From your notebook: np.random.randint(1,50,10)
scores = np.random.randint(1, 50, 10)
print("Student Scores:", scores)
```
* **Key point to teach:** The upper bound (`50`) is not included.

### Level 2: 2D Arrays (A Data Table / Spreadsheet)
Data in real life is usually in tables (Rows and Columns). Let's generate a dataset of 10 students (rows) and their scores in 5 subjects (columns). The numbers will be between 2 and 12.

```python
# From your notebook: np.random.randint(2,12,(10,5))
data_table = np.random.randint(2, 12, (10, 5))
print("Data Table (10 rows, 5 columns):\n", data_table)
```
* **Key point to teach:** The `(10, 5)` shape means 10 rows and 5 columns. Show them `data_table.shape` to verify.

---

## Part 3: Basic Indexing (Finding a needle in the haystack) 📍

Before we can slice big chunks, we need to know how to grab just one specific number.

### 1D Indexing
```python
print("The very first score is:", scores[0])
print("The last score is:", scores[-1]) # Negative indexing is handy!
```

### 2D Indexing
For 2D tables, we need two coordinates: `[row_index, column_index]`.
```python
# Find the score of the 1st student (row 0) in their 2nd subject (col 1)
print("Student 1, Subject 2 score:", data_table[0, 1])
```

---

## Part 4: 1D Slicing (The Essentials) 🔪

**The Golden Rule to write on the whiteboard:** `[start : stop : step]`

Let's use our 1D `scores` array.
```python
print("All Scores:", scores)

# 1. Grab from index 2 up to (but not including) index 5
# From your notebook: arr[2:5]
print("Scores index 2 to 4:", scores[2:5])

# 2. Grab everything from index 7 to the very end
# From your notebook: arr[7:]
print("Scores from index 7 onwards:", scores[7:])

# 3. The Magic Trick: Reversing the array using negative step!
print("Reversed Scores:", scores[::-1])
```

---

## Part 5: 2D Slicing (Intermediate Data Extraction) 🔥

This is where data analysis happens. The syntax is `[row_slice, column_slice]`. 
Let's use our `data_table` (10 rows, 5 columns).

```python
print("Full Table:\n", data_table)

# Example 1: Grab the top-left corner (First 10 rows, first 2 columns)
# From your notebook: arr[0:10,0:2]
print("\nFirst 10 rows, First 2 columns:\n", data_table[0:10, 0:2])

# Example 1.1: A cleaner way to write the exact same thing!
# From your notebook: arr[:,:2]
print("\nAll rows, First 2 columns (Cleaner syntax!):\n", data_table[:, :2])

# Example 2: Extract a specific block in the middle
# Rows 3, 4, 5 (index 3 to 6) AND Columns from index 2 to the end
# From your notebook: arr[3:6,2:]
print("\nMiddle Block (Rows 3-5, Cols 2-end):\n", data_table[3:6, 2:])
```

### The "Step" Challenge in 2D
Let's combine everything. We want every alternate row, starting from the beginning, but only for the columns from index 2 onwards.

```python
# From your notebook: arr[0::2,2:]
# Step of 2 in rows, standard slice in columns
print("\nEvery alternate row, Columns 2 onwards:\n", data_table[0::2, 2:])
```
* **Instructor Note:** Pause here. Ask the students if they understand why the output looks the way it does. Walk through the indices on the board.

---

## Part 6: 3D Slicing (The Mind Bender! 🤯)

Once they are comfortable with 2D, tell them data isn't just flat tables. Imagine 5 different spreadsheets stacked on top of each other! This is a 3-Dimensional array.

### Step 1: Generate a 3D Array
Let's generate 5 spreadsheets. Each spreadsheet has 10 rows and 5 columns.
```python
# From your notebook: np.random.randint(2,50,(5,10,5))
cube_data = np.random.randint(2, 50, (5, 10, 5))
print("Shape of our 3D Data:", cube_data.shape) # (Depth, Rows, Columns)
```

### Step 2: Slice the 3D Array
How do we extract the very last row (index 9) from ALL 5 spreadsheets, for all columns?
The syntax becomes: `[depth_slice, row_slice, column_slice]`.

```python
# From your notebook: arr2[:,9:,:]
# Meaning: All Depths, Row index 9 to end, All Columns
print("\nLast row from every spreadsheet:\n", cube_data[:, 9:, :])
```
* **Instructor Note:** When you show them this, they will truly understand the power of NumPy. What would take a complex nested `for-loop` in normal Python takes just one line in NumPy.
