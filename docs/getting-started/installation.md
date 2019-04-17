---
id: installation
title: Installation
---

## Prerequisites

- Docker: 18.0 or greater
- Node 8.10.0 or greater.

## Cloning the project

```bash
git clone git@github.com:boyney123/mockit.git
```

## Running the project

```
	cd mockit && sh build-and-start.sh
```

The `build-and-start` script will build all docker containers on your machine and then use `docker-compose` to launch all containers.

#### Permissions

If you have some permission issues running the file, so you might need to chmod it.

```
chmod +x build-and-start.sh && ./build-and-start.sh
```

## Viewing the dashboard

Go [http://localhost:5000](http://localhost:5000) to see the dashboard.
