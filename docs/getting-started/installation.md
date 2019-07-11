---
id: installation
title: Installation
---

## Prerequisites

- Docker: 18.0 or greater
- Node 8.10.0 or greater.

## Cloning the project

```bash
git clone https://github.com/boyney123/mockit.git
```

## Running the project

```bash
cd mockit && docker-compose up -d
```

## Viewing the dashboard, server and api

Once Docker is running you have three applications running on the machine.

1. The client: [http://localhost:5000](http://localhost:5000)
2. The client server: [http://localhost:4000](http://localhost:4000)
3. The MockIt API (this is the server that runs your API): [http://localhost:3000](http://localhost:3000)

If you want to view the dashboard to get started go to [http://localhost:5000](http://localhost:5000).

If you want to interact with your new API go to [http://localhost:3000](http://localhost:3000).

For example if you have a `/user` route setup, go to [http://localhost:3000/user](http://localhost:3000/user) to view the data.
