# opentelemetry-nodejs

### 概要

OpenTelemetry で計装した Node.js アプリケーションのサンプル

OpenTelemetry Collector へテレメトリデータを送ることを想定している

### ローカルでの起動方法

```sh
npx ts-node --require ./instrumentation.ts app.ts
```
