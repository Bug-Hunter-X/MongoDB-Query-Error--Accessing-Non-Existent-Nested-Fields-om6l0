# MongoDB Query Error: Handling Missing Nested Fields

This repository demonstrates a common error when querying MongoDB documents and accessing nested fields.  The code attempts to access nested fields within a MongoDB document without first checking for their existence, leading to potential errors if those fields are missing.

The `bug.js` file shows the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

Accessing nested fields like `user.address.street` directly can throw an error if the `address` or `street` fields are not present in the document.  This can lead to unexpected crashes or incorrect results.

## Solution

The solution involves adding checks to ensure each nested field exists before attempting to access it.  This prevents errors and makes the code more robust.

## How to Run

1.  Ensure you have Node.js and npm installed.
2.  Clone this repository.
3.  Run `npm install` to install any necessary dependencies (if any).
4.  Run `node bug.js` to see the error.
5.  Run `node bugSolution.js` to see the corrected code in action.