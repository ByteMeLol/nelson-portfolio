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

The container listens on `127.0.0.1:8080`, so it is only reachable locally on the server. In Nginx Proxy Manager, create a Proxy Host for your domain and forward it to `127.0.0.1:8080`. Configure HTTPS in Nginx Proxy Manager rather than inside this application container.
