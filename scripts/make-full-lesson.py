#!/usr/bin/env python3
import json, os, subprocess, pathlib, urllib.request, time

KEY = os.environ["XAI_API_KEY"]
VOICES = {"DESK": "atlas", "RATES": "rigel"}
OUT = "/workspace/public/audio/full-lesson.mp3"
TMP = pathlib.Path("/tmp/full-lesson")
TMP.mkdir(exist_ok=True)

LINES = [
    ("DESK", "ALLWX desk. This is the full lesson. Not a forecast. Not Bridgewater Associates. Not the All Weather fund. A teaching terminal inspired by Ray Dalio's four rooms, built for a sterling ISA."),
    ("RATES", "The useful question is not what the economy will do next. It is what you own if you are wrong. Everything else in this briefing is implementation of that sentence."),
    ("DESK", "Three clocks. Productivity — output per hour, the reason residual claims compound over decades. The short-term debt cycle — credit expanding and contracting over five to eight years. The long-term debt cycle — debt building until the old servicing method breaks."),
    ("RATES", "If you cannot name which clock a print sits on, you are reading a story."),
    ("DESK", "Inside the short cycle, two surprises do the work. Growth hotter or colder than priced. Inflation hotter or colder than priced. Two signs. Two directions. Four rooms."),
    ("DESK", "Goldilocks. Growth up, inflation down. Equities and quality nominal bonds are paid. Gold and commodities look unemployed. That unemployment is the premium you pay for the other three rooms."),
    ("RATES", "Reflation. Both up. Equities and goods inflation are paid. Long nominal duration is taxed. Gold is mixed. Rising real yields tax the metal."),
    ("DESK", "Stagflation. Growth down, inflation up. The exam sixty-forty was not built for. Equities lose in real terms. Nominal duration is destroyed. Gold, commodities, and linkers are the team. Nobody wins stagflation. The honest mix loses less."),
    ("RATES", "Disinflation. Both down. Demand crash. Equities and commodities fined. Long quality duration and cash-like begin to pay. Gold wobbles, then often pays when the system itself is in question."),
    ("DESK", "No liquid asset owns all four rooms. That is the argument for a team. If two lines are paid by the same surprise, you do not have two employees. You have one employee in two uniforms."),
    ("RATES", "That is how sixty-forty looks diversified on a pie and concentrated in twenty twenty-two."),
    ("DESK", "Seven jobs. The classroom object. Weights exist so seven engines can be heard. They are not sacred, not optimal, not personalised. Thirty, eighteen, fifteen, fourteen, ten, seven, six."),
    ("DESK", "One. World equities. Thirty. VWRP. The growth engine. A residual claim on thousands of firms. Hired to compound productivity. Not hired as insurance. A bad decade is not a fired employee."),
    ("RATES", "Future wages are already a growth asset. Stacking one hundred percent listed equity on a cyclical labour market is how sequence risk arrives early. Thirty is a job. It is not the firm."),
    ("DESK", "Two. Global investment-grade duration. Eighteen. VAGS. Sterling-hedged. The stabiliser. A promise of currency, not a request that a company become more valuable. A yield is a price. Duration is the transmission."),
    ("RATES", "Tonight VAGS has the worst one-year Sharpe in the live book. That is correct behaviour in reflation. Insurance looks unemployed until the room changes. The house does not sell the deflation engine because this week's ten-year is loud."),
    ("DESK", "Three. Gold. Fifteen. SGLN. The night watchman. No coupon is the point. Absence of a promise is a different animal. Do not judge the watchman by a sunny Tuesday. Miners are not the metal."),
    ("RATES", "Teaching floor: fifteen, never below ten. Prime prints nine point six. That is a breach. Name it. Do not move the floor because a pie looks finished."),
    ("DESK", "Four. Linkers. Fourteen. ITPS. The bodyguard. Principal steps with an index. The mark is still a real-rate duration machine. Last month's CPI is not a scoreboard."),
    ("RATES", "US TIPS and UK index-linked gilts are different bodyguards. Different index, different currency, different curve. INXG was vetoed in the lab on a five-year wreck and a fifty percent drawdown. Prime hires it at three point eight as probation. The veto is not silently retired."),
    ("DESK", "Five. Broad commodities. Ten. ICOM. The shock absorber. Paid when a supply shock fines both equities and nominal bonds. The only classroom line that can be paid in both current boxes. Cap stays at ten. Do not chase last year's forty-four."),
    ("RATES", "Volatility is not permanent loss. A single oil ticket is a trade. A broad basket is a regime hedge."),
    ("DESK", "Six. Cash-like. Seven. CSH2. The parking bay. Near-overnight sterling plus a call on rebalancing. Emergency cash for the boiler sits outside the mix."),
    ("RATES", "Seven. Very long Treasuries. Six. IDTL. The fire brigade. Paid when Stage 5 arrives and policy goes to the floor. Six percent is not a view that deflation is imminent. Buying after the pivot is late."),
    ("DESK", "Thirty residual claims is not a goldilocks bet. Thirty-nine real assets is not an inflation bet. Thirty-one defensive is not a recession bet. Together they are a bet that the cycle continues."),
    ("RATES", "Seven questions. Every morning. Cycle stage. Central bank. Room. Curve. Dollar. Priced versus printed. Which principle is live."),
    ("DESK", "Tonight's teaching read. Stage 3 late expansion. Reflation primary. Stagflation overlay. PMI fifty-four six. Two-tens still positive. Sixteen September FOMC is a live meeting. Observe. Update the questions. Do not pre-position."),
    ("RATES", "Walk-back is off. Both triggers must fire together. PMI under fifty, and two-tens inverted. Then satellites get zero. Not the base case. The rule exists because the base case is sometimes wrong."),
    ("DESK", "Two thousand eight. Demand crash. Painful. Survivable. Smaller than a tracker or sixty-forty. Gold wobbled then paid. Long Treasuries paid. Do not invent a religion."),
    ("RATES", "Two thousand thirteen. Honest cost. Gold wrecked in sterling. Classroom still positive, miles behind a tracker. Insurance looks unemployed in goldilocks. That is the premium."),
    ("DESK", "Twenty twenty-two. Inflation exam. Sixty-forty's two employees fined together. Commodities carried the architecture. The gilt crisis wrecked long sterling linkers. Theory survived. That ticker did not."),
    ("RATES", "Twenty twenty-five. Gold's sterling year. A fifteen percent watchman can still move the pie when its weather arrives."),
    ("DESK", "Twenty-year classroom proxy versus a world tracker: the tracker compounds more. The last two decades rarely visited the rooms equity does not own. Whether the premium was cheap depends on the next two decades, not the last."),
    ("RATES", "Three books. Do not confuse them. The classroom is seven lines. Always. That is how you learn the rooms."),
    ("DESK", "The live ISA is fourteen lines at about nine hundred and fifty pounds. Core seven, plus an alt, plus six satellite tickets. Next cash: the third of October."),
    ("RATES", "Invictus Prime is the design lock. Fifteen lines. Adds short gilts and UK linkers. Drops managed futures. Gold nine point six. INXG on probation."),
    ("DESK", "Twenty-year proxy. Prime one hundred pounds becomes three three nine. One-Pie becomes three five three. Extra sentences did not win the compounding. Complexity is not a return."),
    ("RATES", "A twenty-instrument sketch exists. The listed eighteen-line table summed to ninety-one percent. Silver and REITs were duplicated on one run. At nine hundred and fifty pounds, eighteen tickets are costume."),
    ("DESK", "Maximus is a high-growth experiment. It is not the house. A pie that sums to one hundred and seventy is not diversification. It is a broken weight vector."),
    ("RATES", "Satellites are residual claims in costume. Defence. Semis. Copper miners. Industrials. Healthcare. Uranium. Still equity weather. Caps exist so the house does not become Maximus by accident."),
    ("DESK", "If you cannot name the year only that line could have paid, you do not have a job. You have a costume."),
    ("RATES", "Weight adjustments are the machine running. Instrument additions are the machine being upgraded. The machine runs on a monthly clock. Upgrades run on a multi-year clock, triggered by book size, not by a loud week."),
    ("DESK", "Hard caps. Walk-back. Drift. Contribution split. Satellite collective cap. No hero trades. No editing the lock because of a speech, a strait, or one CPI print. No moving the AutoInvest date."),
    ("RATES", "The most dangerous moment is a good year, when the working sleeves beg to be enlarged. The machine rebalances away from winners. That rule has to exist before the temptation."),
    ("DESK", "Phase zero: seven jobs. Contribute. Do not decorate. Phase one, about ten thousand: value tilt eligible, not mandatory. After a hundred thousand: no new lines. The bay grows."),
    ("RATES", "This week's calendar. Treasury reopen. CPI. ECB. Then the FOMC binary. Sentences do not change on one meeting."),
    ("DESK", "The third of October is the only action date. Two hundred pounds. Walk-back first. Then core drift. Then satellite drift. Verify the copper wrapper. At nine hundred and fifty pounds, three points is about twenty-eight pounds. Cheaper to close with new cash than with a sale."),
    ("RATES", "Contributions are the engine. Flat two hundred for twenty-five years. Sixty thousand in. About one hundred and ninety-three thousand out. This is the schedule that already exists."),
    ("DESK", "Case four. Step for ten years, then a fixed elevated debit to fifty-five. About seven hundred and twelve thousand, entirely inside the ISA. The decision is whether the extra thousand from year eleven is boring."),
    ("RATES", "Case five. Ramp five years, then fill the allowance. About one point six two million at year thirty. Most ISA-efficient."),
    ("DESK", "Case two prints four and a half million and wants eight thousand a month by year twenty. Do not print that headline without printing year-twenty income. That is a wage-growth assumption wearing a portfolio label."),
    ("RATES", "The fridge. Diversify by economic function, not ticker count. Drag lines are features. Correlations lie when the room changes. If you cannot say the sentence, you should not hold the line. Editing the lock file is how all-weather dies."),
    ("DESK", "One answer. The economy moves through four rooms. Nobody can reliably name the next one or the date. Own all four at once, sized so one room cannot own the household. Everything else is implementation inside a UCITS ISA."),
    ("RATES", "Fifteen lines or seven. Contribution on a date. Walk-back. No hero trades."),
    ("DESK", "ALLWX desk. Out."),
]

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
            time.sleep(1.5 * (attempt + 1))
    raise last

parts = []
for i, (who, text) in enumerate(LINES):
    p = TMP / f"{i:03d}.mp3"
    if p.exists() and p.stat().st_size > 2000:
        print("skip", i, flush=True)
    else:
        tts(text, VOICES[who], p)
        print("ok", i, who, p.stat().st_size, flush=True)
    parts.append(p)

lst = TMP / "list.txt"
lst.write_text("".join(f"file '{p}'\n" for p in parts))
raw = "/tmp/full-lesson-raw.mp3"
subprocess.check_call(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy", raw])
subprocess.check_call([
    "ffmpeg", "-y", "-i", raw,
    "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
    "-ar", "48000", "-b:a", "192k", OUT,
])
print("wrote", OUT, "bytes", pathlib.Path(OUT).stat().st_size, flush=True)
