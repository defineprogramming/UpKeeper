# Configuration

This folder contains the configuration files for UpKeeper.

## Getting Started

1. Copy config.sample.json to config.json.
2. Update the values in config.json with your own settings.

## Configuration Options

- database: Database connection settings.
- host: Database host.
- port: Database port.
- user: Database user.
- password: Database password.
- database: Database name.

- server: Server settings.
- port: Port on which the server will run.

- email: Email settings for sending notifications.
- service: Email service provider (e.g., ‘gmail’).
- user: Email address.
- password: Email password.

- monitoring: Monitoring settings.
- interval: Time interval (in minutes) between monitoring checks.

- jwt: JSON Web Token settings.
- secret: Secret key for signing tokens.
- expiresIn: Token expiration time.
