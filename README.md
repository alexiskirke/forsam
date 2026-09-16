# forsam

A tiny zero-dependency Node server that says hello to Sam in the browser.

## Run locally

```sh
npm start
```

Then open http://localhost:3000.

## Deploy to Railway

The repo is Railway-ready — `railway.json` sets the build and start command, and
the server binds `0.0.0.0` on `$PORT`.

1. In Railway: **New Project → Deploy from GitHub repo → alexiskirke/forsam**
2. Pick this branch, then **Settings → Networking → Generate Domain**

## Routes

- `/` — the Hello Sam page
- `/health` — JSON health check used by Railway's healthcheck
