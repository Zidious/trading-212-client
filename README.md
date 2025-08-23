# trading-212-client

A TypeScript client for the Trading212 API, designed to provide seamless access to Trading212’s endpoints for account data, equity orders, historical items, instruments metadata, personal portfolio, pies, and more.

> [!IMPORTANT]
> This library is not officially affiliated with Trading212.

## Features

- **TypeScript-first:** Strongly typed models and responses.
- **Modular API:** Access different API sections via API versioning e.g., `v0`.
- **Easy authentication:** Pass your API key and environment (`demo` or `live`).
- **Convenient methods:** For common Trading212 operations (pies, orders, account data, etc.).

## Installation

```bash
npm install trading-212-client
```

## Requirements

- Node.js >= 22

## Usage

```typescript
import Trading212 from 'trading-212-client'

const client = new Trading212({
  apiKey: 'your-api-key',
  environment: 'demo' // or 'live'
})

// Get all pies
const pies = await client.v0.pies.all()

// Get a specific pie
const pie = await client.v0.pies.get('pie-id')

// Delete a pie
await client.v0.pies.delete('pie-id')
```

## API Overview

### Initialization

```typescript
const client = new Trading212({ apiKey, environment })
```

### Available API Endpoints

- `client.v0.accountData`
- `client.v0.equityOrders`
- `client.v0.historicalItems`
- `client.v0.instrumentsMetadata`
- `client.v0.personalPortfolio`
- `client.v0.pies`

Each endpoint provides methods for interacting with the corresponding Trading212 API endpoints.

### Example: Pies

```typescript
// List all pies
await client.v0.pies.all()

// Create a new pie
await client.v0.pies.create({
  /* pie data */
})

// Update a pie
await client.v0.pies.update(pieId, {
  /* update data */
})

// Delete a pie
await client.v0.pies.delete(pieId)
```

## Types

All request and response types are exported from `V0Types`:

```typescript
import { V0Types } from 'trading-212-client'
```

## Development

- Install: `npm ci`
- Build: `npm run build`
- Format: `npx prettier --write .`
