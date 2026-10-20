const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const output = ts.transpileModule(fs.readFileSync("src/lib/eventStatus.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const exported = {};
vm.runInNewContext(output, { exports: exported, Date });
const { isUpcomingEvent } = exported;
const event = { checkinOpensAt: "2026-10-22T16:00:00-07:00", checkinClosesAt: "2026-10-22T19:00:00-07:00" };
const end = Date.parse(event.checkinClosesAt);
assert.equal(isUpcomingEvent(event, Date.parse(event.checkinOpensAt) - 1), true);
assert.equal(isUpcomingEvent(event, end - 1), true, "ongoing events remain upcoming");
assert.equal(isUpcomingEvent(event, end), false, "events expire exactly at their end");
assert.equal(isUpcomingEvent(event, end + 1), false);
const now = Date.parse("2026-10-19T12:00:00-07:00");
assert.equal(isUpcomingEvent({ checkinOpensAt: "2026-10-02T16:00:00-07:00", checkinClosesAt: "2026-10-04T21:00:00-07:00" }, now), false, "expired hackathon is excluded");
assert.equal(isUpcomingEvent({ ...event, checkinClosesAt: null }, now), true);
assert.equal(isUpcomingEvent({ ...event, checkinClosesAt: null }, end), false);
assert.equal(isUpcomingEvent({ ...event, checkinClosesAt: "invalid" }, now), false);
assert.equal(isUpcomingEvent({ checkinOpensAt: null, checkinClosesAt: null }, now), false);
assert.equal(isUpcomingEvent({ ...event, checkinClosesAt: "2026-10-23T02:00:00Z" }, end), false, "UTC and Pacific end times agree");
console.log("PASS: upcoming, ongoing, expired, boundary, timezone, and unscheduled events");
