```markdown
# Host RestfulAPI

Host RestfulAPI is a Node.js application that serves as a RESTful API for managing products. It allows users to retrieve products based on various query parameters such as company, name, featured status, price, and more.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ashishmisal23/Host_RestfulAPI.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    PORT=5000
    MONGO_URL=<your_mongodb_connection_string>
    ```

    Replace `<your_mongodb_connection_string>` with the connection string for your MongoDB database.

## Usage

### Starting the Server

To start the server, run:

```bash
npm start
```

### API Endpoints

- **GET /api/products**: Retrieve products based on query parameters such as company, name, featured status, price, sort criteria, select fields, and pagination.

    Example:

    ```
    GET /api/products?company=Apple&price=1000-2000&sort=price,-name&select=name,price&page=1&limit=10
    ```

- **GET /api/products/testing**: Retrieve products directly from the database without additional processing for sorting, selecting fields, or pagination.

### Example

Assuming the server is running locally on port 5000, you can access the products API endpoint at:

[http://localhost:5000/api/products](http://localhost:5000/api/products)

## Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv): For loading environment variables from a `.env` file.
- [express](https://www.npmjs.com/package/express): Web framework for Node.js.
- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB ODM library for Node.js.
- [nodemon](https://www.npmjs.com/package/nodemon): Utility to monitor changes in files and automatically restart the server.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).
```
