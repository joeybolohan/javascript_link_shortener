# URL Shortener with Node.js and Express.js

This is a basic URL shortener built with Node.js and Express.js. The application logs details about the requests to the shortened URLs in a text file. These details include the date, time, country, operating system, and IP address of the client.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the following installed on your local machine:

* Node.js and npm
* MongoDB

### Installation 

Create a new directory for your project, and initialize it as a Node.js project by running npm init -y.

Install the necessary Node.js packages by running: npm install express mongoose shortid geoip-lite ua-parser-js ejs


1. Clone this repository

git clone https://github.com/joeybolohan/javascript_link_shortener
  
2. Navigate into the cloned repository

cd url-shortener
  
3. Install the dependencies

npm install

4. Start the MongoDB service. The method for this may vary depending on your operating system.

5. Run the application

 node server.js
  
  
Now, open your web browser and navigate to `http://localhost:5000`. You should see a form where you can enter a URL to be shortened.

## Usage

Enter a URL in the form and submit it. The application will generate a shortened URL. When this shortened URL is accessed, the application will redirect to the original URL and log details about the request in a `log.txt` file in the project's root directory.

## Contributing

Contributions are welcome. Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
