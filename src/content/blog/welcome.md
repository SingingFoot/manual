---
title: Create API documentation with Postman
description: Create API documentation with Postman
published: 2023-01-21
---

## Step 1: Set up Postman
1. Install Postman from [the official website](https://www.postman.com/downloads/).
2. Launch Postman and create a new workspace for your API documentation.

## Step 2: Create a Postman Collection
1. In Postman, click on the "New" button to create a new collection.
2. Give your collection a name and description to provide context for your API.
3. Click on "Save" to create the collection.

## Step 3: Add Requests to the Collection
1. Click on the newly created collection to open it.
2. Click on the "Add request" button to add a new request to the collection.
3. Provide a name and description for the request.
4. Specify the HTTP method, URL, and any required headers or parameters.
5. Optionally, include a request body if applicable.
6. Click on "Save" to add the request to the collection.

### Example Request

- Name: Get User
- Description: Retrieve user information.
- Method: GET
- URL: `https://api.example.com/users/{userId}`
- Headers:
  - `Content-Type: application/json`
- Parameters:
  - `userId: 12345`

## Step 4: Define Request Examples and Responses
1. Within each request, add examples to illustrate the expected request payload and response.
2. Click on the "Examples" tab and add an example for a successful request.
3. Specify the example's name, description, request payload, and expected response.
4. Repeat this process for any additional examples or different response scenarios.

### Example Request

- Name: Get User
- Description: Retrieve user information.
- Method: GET
- URL: `https://api.example.com/users/{userId}`
- Headers:
  - `Content-Type: application/json`
- Parameters:
  - `userId: 12345`

#### Example Request Payload
Empty

#### Example Response
Status: 200 OK
Body:
```json
{
  "id": 12345,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

## Step 5: Organize Requests into Folders
1. Create folders within the collection to group related requests together.
2. Right-click on the collection and select "Add Folder" to create a new folder.
3. Give the folder a name and description.
4. Drag and drop requests into the appropriate folders to organize them.

## Step 6: Add Documentation and Publish
1. Click on the "Add documentation" button in the collection view.
2. Provide a title and description for your documentation.
3. Use the Markdown editor to add formatted text, tables, or images to document your API.
4. Once you're satisfied with the documentation, click on "Publish" to generate a public link.
