## to start in dev mode:
# npm start

## to build & serve locally
# npm install   # only if dependencies changed or not installed
# npm run serve-local

#!/usr/bin/env bash
set -euo pipefail

echo "Stopping any previous local servers (server.js / processes on port 5000)..."

# Kill processes running server.js (if any)
if command -v pgrep >/dev/null 2>&1; then
  server_pids=$(pgrep -f "server.js" || true)
  if [ -n "${server_pids}" ]; then
    echo "Killing server.js processes: ${server_pids}"
    kill ${server_pids} || true
  fi
fi

# If lsof is available, find processes listening on 5000 and kill them
if command -v lsof >/dev/null 2>&1; then
  port_pids=$(lsof -ti tcp:5000 || true)
  if [ -n "${port_pids}" ]; then
    echo "Killing processes listening on port 5000: ${port_pids}"
    kill ${port_pids} || true
  fi
else
  echo "lsof not available — skipping port-based process kill."
fi

echo "Switching to project folder and building..."
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "node_modules not found — running npm install (this may take a moment)..."
  npm install
fi

echo "Running build..."
npm run build

echo "Starting local server (serve-local)..."
npm run serve-local
