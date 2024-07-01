# opentelemetry-nodejs

### 概要

OpenTelemetry で計装した Node.js アプリケーションのサンプル

OpenTelemetry Collector へテレメトリデータ（Traces）を送ることを想定している

[OpenTelemetry の Getting Started](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/) を参考にしている

### ローカルでの起動方法

```sh
npx ts-node --require ./instrumentation.ts app.ts
```
