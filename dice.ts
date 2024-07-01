import { trace, Span } from "@opentelemetry/api";

const tracer = trace.getTracer("dice-lib");

function rollOnce(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function rollTheDice(rolls: number, min: number, max: number) {
  return tracer.startActiveSpan("rollTheDice", (span: Span) => {
    const result: number[] = [];
    for (let i = 0; i < rolls; i++) {
      result.push(rollOnce(min, max));
    }
    span.end();
    return result;
  });
}
