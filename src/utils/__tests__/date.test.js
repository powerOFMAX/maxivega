import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { calculateExperienceYears } from "../date"

describe("calculateExperienceYears", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2023-06-15"))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("returns correct years for a recent start date", () => {
    const startDate = new Date("2020-01-01")
    expect(calculateExperienceYears(startDate)).toBe(3)
  })

  it("returns zero for the same year", () => {
    const startDate = new Date("2023-03-15")
    expect(calculateExperienceYears(startDate)).toBe(0)
  })

  it("returns correct years for an older start date", () => {
    const startDate = new Date("2010-05-20")
    expect(calculateExperienceYears(startDate)).toBe(13)
  })
})
