import * as opentelemetry from "@opentelemetry/sdk-node";
import { Resource } from "@opentelemetry/resources";
import {
  SEMRESATTRS_SERVICE_NAME,
  SEMRESATTRS_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import "dotenv/config";

const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({
    [SEMRESATTRS_SERVICE_NAME]: "otel-nodejs",
    [SEMRESATTRS_SERVICE_VERSION]: "1.0",
  }),
  traceExporter: new OTLPTraceExporter({
    url: process.env.OTEL_COLLECTER_URL || "http://127.0.0.1:4317/v1/traces",
  }),
});

console.log({
  OTEL_COLLECTER_URL: process.env.OTEL_COLLECTER_URL,
});

sdk.start();
