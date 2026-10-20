type ScheduledEvent = {
  checkinOpensAt: string | null;
  checkinClosesAt: string | null;
};

/** Keep ongoing events visible until their end; unscheduled events stay hidden. */
export function isUpcomingEvent(event: ScheduledEvent, now: number): boolean {
  if (event.checkinClosesAt) {
    const end = Date.parse(event.checkinClosesAt);
    return Number.isFinite(end) && end > now;
  }
  const start = event.checkinOpensAt ? Date.parse(event.checkinOpensAt) : NaN;
  return Number.isFinite(start) && start > now;
}
