# Nelson Sauka Portfolio

React + Vite portfolio using Tailwind CSS and a production Nginx container.

## Local development

```bash
npm ci
npm run dev
```

## Production Docker

Build and run the production container locally:

```bash
docker compose up -d --build
```

The site is available at `http://localhost:8080`.

Stop it with:

```bash
docker compose down
```

## Deploying to a Linux server

After pushing the repository to GitHub, install Docker and Compose on the server, then run:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
docker compose up -d --build
```

To deploy a later change:

```bash
git pull origin main
docker compose up -d --build
```

The container listens on server port `8080`. When Nginx Proxy Manager runs in Docker, create a Proxy Host for your domain and forward it to the Azure server's private IP address on port `8080` (for example, `10.0.0.4:8080`). Configure HTTPS in Nginx Proxy Manager rather than inside this application container. Block public inbound access to port `8080` in the Azure Network Security Group so only the proxy can use it.
