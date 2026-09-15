#!/usr/bin/env python3
import json, os, subprocess, pathlib, urllib.request, time

KEY = os.environ["XAI_API_KEY"]
VOICES = {"DESK": "atlas", "RATES": "rigel"}
ROOT = pathlib.Path("/tmp/enrich-eps")

EXTRA = {
"02": [
("DESK", "Read the room with prints, not narratives. PMI versus fifty. Breakeven versus realised prices. Slope of two-tens. That combination is a reading."),
("RATES", "Stage five does not send a diary invite. That is why the fire brigade is already on the payroll while the tape is still Stage three."),
("DESK", "A confirmed stage change needs three questions, twice. A headline does not qualify. Neither does a friend."),
],
"03": [
("DESK", "VWRP holds thousands of names. Breadth can widen and the engine still pays. Breadth can narrow and the engine still pays. Do not confuse a factor run inside the index with a new job."),
("RATES", "Theme tickets that eat the same surprise as VWRP are costumes. Semis and industrials still live in equity weather. Caps exist so the engine is not cloned six times."),
("DESK", "Rebalance toward the engine when it is hated. Rebalance away when it has eaten the pie. That rule has to exist before a good year begs you to enlarge it."),
],
"04": [
("DESK", "VAGS at seventeen in the lock and fifteen in the live book is the honest drag. A paper trim to fourteen improves today's Sharpe and sells deflation cover while the overlay is live."),
("RATES", "The house does not trim by selling. It routes new cash. If VAGS drifts through its floor on its own, the next contribution routes back. That is the floor doing its job."),
("DESK", "Sterling-hedged investment grade is a rates-and-credit job, not an FX job. Do not inherit a dollar trade and call it defensive."),
],
"05": [
("DESK", "Gold's short clock is the real-yield tax. Gold's long clock is the debt cycle. Trimming the watchman because Tuesday was red is the error the classroom exists to prevent."),
("RATES", "A breakeven well below realised consumer prices means the market is selling inflation insurance cheap versus the fire that is already lit."),
("DESK", "ICOM wins both current boxes and the house still will not chase it. The third of October is the tool. Discretionary top-ups are how caps die."),
],
"06": [
("DESK", "Powder is what makes limit orders possible on small tickets when spreads are wide. A book with no bay has no option on the next contribution."),
("RATES", "Green light on the fire brigade is a teaching watch, not an action. Long yield through five, purchasing managers rolling over. Neither is the tape tonight."),
("DESK", "Do not add long duration because yields might fall. That is a Stage three error wearing a Stage five costume."),
("RATES", "Cash-like loses a quiet goldilocks year by two or three points versus equities. That is the correct price for the option."),
],
"07": [
("DESK", "Twelve correlation groups in a twenty-line sketch is a later-book idea. At nine hundred and fifty pounds it is costume. Seven uncorrelated jobs beat eighteen tickers that eat the same surprise."),
("RATES", "Listed real estate prints a high beta to equities. Size it as income, not as a fifth weather. Silver is a hybrid, not a second gold."),
("DESK", "When stocks and bonds print a fifty percent correlation, sixty-forty is a single-factor equity bet with a bond drag. The answer is regime coverage, not another ticker."),
],
"08": [
("DESK", "Question six is the honest one. What is priced versus what is printed. A breakeven at two three five versus PCE at three seven is the market selling the optimistic path."),
("RATES", "Question seven names the residual. Tonight the fire brigade is the residual. Do not promote it because a meeting might surprise."),
("DESK", "Write the answers. A desk that does not write will improvise in Stage four. Improvisation is how lock files die."),
],
"09": [
("DESK", "Cost should be minimised. Each classroom line is a cheap UCITS expression of a job. A single cheaper tracker saves a little and deletes the inflation team."),
("RATES", "A starter book does not need less analysis. It needs the same habits. Seven questions. No improvisation. Contribution on a date."),
("DESK", "Prime is the design lock. The live ISA is still fourteen lines. Do not flatten the ticket pad because a briefing was persuasive."),
],
"10": [
("DESK", "Monte Carlo fans from a classroom mean are teaching objects. They do not invent unprecedented tails. Change the contribution and the gate dates move. Change the mix every Tuesday and the fan is a lie."),
("RATES", "Case two prints four million and wants eight thousand a month by year twenty. That is a wage path, not a portfolio path."),
("DESK", "Flat two hundred is the schedule that already exists. Honour it before you honour a spreadsheet."),
],
"11": [
("DESK", "Two thousand nine through twenty twenty-one paid the engine. That is why it is the largest line. Not because someone predicted the decade."),
("RATES", "Twenty twenty-one and twenty twenty-two paid goods. Twenty twenty-five paid metal. Healthcare paid when themes were under pressure. That is XDWH's brief."),
("DESK", "Uranium can print the best satellite Sharpe and still go nowhere for a year. A one percent line is a ticket. Keep it tiny."),
("RATES", "Name the year. If the year is only a narrative, fire the line before it fires you."),
],
"12": [
("DESK", "IWVL at ten thousand is the only data-supported upgrade in the original gate list. SEML is correlation, not beauty. INXG failed its own drawdown history."),
("RATES", "Scale does not rewrite a regime residual. Do not fatten long Treasuries because the book got bigger. Do not fatten gold because a year was kind."),
("DESK", "The twenty-line sketch cuts gold to seven. That is a different religion. Hold the tension on LAB TWENTY. Do not import it into the live ISA this week."),
],
"13": [
("DESK", "The 20-year chart is not a verdict against Prime. It is a warning against confusing sentences with returns."),
("RATES", "Verify COPA versus COPG before the third. Walk-back first. Then drift. Then the default split."),
("DESK", "Fifteen sentences. Two sleeves. Two hundred on the third. That is the whole remaining craft."),
],
}

def tts(text, voice, dest):
    payload = json.dumps({"text": text, "voice_id": voice, "language": "en"}).encode()
    req = urllib.request.Request(
        "https://api.x.ai/v1/tts",
        data=payload,
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {KEY}"},
        method="POST",
    )
    last = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=120) as res:
                dest.write_bytes(res.read())
                return
        except Exception as e:
            last = e
            time.sleep(1.2 * (attempt + 1))
    raise last

def rebuild(code, extra):
    d = ROOT / code
    existing = sorted(d.glob("[0-9][0-9].mp3"))
    start = len(existing)
    parts = list(existing)
    for i, (who, text) in enumerate(extra):
        p = d / f"{start + i:02d}.mp3"
        tts(text, VOICES[who], p)
        print("ok", code, start + i, who, flush=True)
        parts.append(p)
    lst = d / "list.txt"
    lst.write_text("".join(f"file '{p}'\n" for p in parts))
    raw = d / "raw.mp3"
    out = pathlib.Path(f"/workspace/public/audio/ep{code}.mp3")
    subprocess.check_call(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy", str(raw)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    subprocess.check_call(["ffmpeg", "-y", "-i", str(raw), "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "48000", "-b:a", "192k", str(out)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    probe = subprocess.run(["ffmpeg", "-i", str(out)], capture_output=True, text=True)
    for line in probe.stderr.splitlines():
        if "Duration:" in line:
            print("built", code, line.split("Duration:")[1].split(",")[0].strip(), flush=True)
            break

if __name__ == "__main__":
    for code, extra in EXTRA.items():
        rebuild(code, extra)
    print("done")
