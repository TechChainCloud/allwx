#!/usr/bin/env python3
"""Regenerate longer two-desk audio for EP 01-13."""
import json, os, subprocess, pathlib, urllib.request, time

KEY = os.environ["XAI_API_KEY"]
VOICES = {"DESK": "atlas", "RATES": "rigel"}
ROOT = pathlib.Path("/tmp/enrich-eps")
ROOT.mkdir(exist_ok=True)

EPS = {
"01": [
("DESK", "ALLWX desk. Episode one, richer cut. The machine, not the forecast. This is a teaching terminal inspired by Ray Dalio and Bridgewater. It is not their fund. It is not a tip."),
("RATES", "Most books are staffed to win a year. All Weather is staffed to survive the year that wins you. That is a different design problem."),
("DESK", "Stop asking what the economy will do next. Ask what you own if you are wrong. That question travels from an institutional risk-parity book to a stocks and shares ISA without becoming a slogan."),
("RATES", "Three clocks. Productivity growth — output per hour. That is why residual claims compound over decades. The short-term debt cycle — credit expanding and contracting over five to eight years. The long-term debt cycle — debt building until the old servicing method breaks."),
("DESK", "Every print sits on one of those clocks. Purchasing managers. Payrolls. Consumer prices. The two-year. The ten-year. The dollar. If you cannot name the clock, you are reading a story."),
("RATES", "Open Eco for the surprise versus consensus. Open G C for the curve. Those are instruments, not decoration."),
("DESK", "Inside the short cycle, two surprises do the work. Growth hotter or colder than priced. Inflation hotter or colder than priced. Two signs. Two directions. Four rooms."),
("RATES", "Goldilocks. Growth up, inflation down. Reflation. Both up. Stagflation. Growth down, inflation up. Disinflation. Both down. No liquid asset owns all four. That is the argument for a team."),
("DESK", "Classroom object. Thirty world equities. Eighteen global investment grade. Fifteen gold. Fourteen linkers. Ten broad commodities. Seven cash-like. Six very long Treasuries. The numbers are a teaching object. The job descriptions are the durable thing."),
("RATES", "If two lines are paid by the same surprise, you do not have two employees. You have one employee in two uniforms. That is how sixty-forty looks diversified on a pie chart and concentrated in a stagflation."),
("DESK", "They are supposed to disagree. Score a sleeve against its contract, not against the winner of the year. Rebalance. Write the principle. Pain plus reflection equals progress."),
("RATES", "A young sterling household already owns growth through wages. Stacking a hundred percent tracker on that labour market is how sequence risk arrives early. Thirty is a job. It is not the firm."),
("DESK", "Next: four rooms as a function, not a vibe. What do you own if you are wrong. That is the only question that matters on this desk."),
],
"02": [
("DESK", "ALLWX desk. Episode two. Four rooms, three forces. Regime identification is a function, not a vibe."),
("RATES", "Goldilocks. Growth surprise up, inflation surprise down. Equities and quality nominal bonds are paid. Gold and commodities look unemployed. That unemployment is the premium."),
("DESK", "Reflation. Both surprises up. Equities and goods inflation are paid. Long nominal duration is taxed. Gold is mixed because real yields can rise while growth is fine."),
("RATES", "Stagflation. Growth down, inflation up. Sixty-forty's two employees are fined together. Gold, commodities and linkers are the team. Nobody wins this room. The honest mix loses less."),
("DESK", "Disinflation. Both down. Demand crash. Equities and commodities fined. Long quality duration and cash-like begin to pay. Gold wobbles, then often pays when the system itself is in question."),
("RATES", "The machine does not forecast the room. It reads the tape and keeps a team that can survive being wrong about the room."),
("DESK", "Stage three late expansion is not a personality. It is PMI above fifty, a still-normal curve, inflation sticky, policy tightening but not yet punishing. That is tonight's teaching read."),
("RATES", "A headline is not a room. Hormuz is not a regime. A Warsh speech is not a lock-file edit. Update the seven questions. Do not rebuild the pie."),
("DESK", "If the reading is wrong, the design still holds. Reflation into stagflation: gold and goods still have a brief. Stagflation into a demand crash: duration and cash begin to work. No single transition is allowed to zero the book."),
("RATES", "That is why the real-asset block is not a token ten percent. Insurance that cannot be heard is decoration."),
],
"03": [
("DESK", "ALLWX desk. Episode three. Residual claims. World equities as a job, not a religion."),
("RATES", "A share is a residual claim. Everyone else gets paid first. Lenders, staff, the tax authority. What is left is the productivity clock showing up in a price."),
("DESK", "Hire them to compound output per hour. Do not hire them as insurance. They are fined in a long recession and in a violent rise in the discount rate."),
("RATES", "A bad decade is not a fired employee. Firing the engine because a year was ugly is how households miss the only sustainable return."),
("DESK", "Thirty percent in the classroom. Twenty-five in the live house. Twenty-three eight in Prime. The number moves with scale. The job does not."),
("RATES", "Concentration inside the index is real. A handful of AI-capex names can dominate the mark. That is not a reason to fire the engine. It is a reason not to stack theme tickets that eat the same weather."),
("DESK", "Human capital is already equity-like. A twenty-five-year-old with a cyclical wage who owns only VWRP has one factor and thinks they have a plan."),
("RATES", "Score the engine against expanding profits and falling discount rates, not against last Tuesday."),
],
"04": [
("DESK", "ALLWX desk. Episode four. Duration as a weapon. Bonds are not one animal."),
("RATES", "A yield is a price. Duration is the transmission. Name the animal before you hire it."),
("DESK", "Overnight sterling is not a ten-year aggregate. A ten-year aggregate is not a twenty-plus Treasury. Treating them as the same word bond is how books get surprised."),
("RATES", "VAGS is the deflation engine. Sterling-hedged global investment grade. Paid when growth and inflation fall and policy eases. Fined when the whole curve lifts."),
("DESK", "It will look unemployed in reflation. That is the job working. The house does not sell insurance after the storm has started, and it does not sell it because this week's Sharpe is ugly."),
("RATES", "IDTL is the cut-cycle stub. Convexity lives at the long end when Stage 5 arrives. Six percent in the classroom is an option premium, not a forecast that deflation is imminent."),
("DESK", "IGLS, in Prime, is the short-gilt rung. Carry without long-end term premium. A ladder, not a second religion."),
("RATES", "Currency is a decision. A sterling household that inherits unhedged dollar duration has made a bet without writing it down."),
],
"05": [
("DESK", "ALLWX desk. Episode five. Three animals in the inflation team. Gold, linkers, commodities."),
("RATES", "They are not interchangeable. If they were, you would own one line and call it real assets."),
("DESK", "Gold is the night watchman. No coupon is the point. Paid when paper promises wobble or real yields fall. Fined in calm expansions. Miners are not the metal."),
("RATES", "Teaching floor fifteen, never below ten. Prime prints nine point six. Name the breach. Do not move the floor because a pie looks finished."),
("DESK", "Linkers step the principal with an index. The mark is still a real-rate duration machine. Last month's CPI is not a scoreboard. Rising real yields drop the price regardless of the print."),
("RATES", "US TIPS and UK linkers are different contracts. Different index, different currency, different curve. INXG failed its own five-year history. Prime hires it at three point eight as probation. Written kill rule. Not a cleared gate."),
("DESK", "Commodities are the shock absorber. A broad basket, not a single oil ticket. Paid when a supply shock fines equities and nominal bonds together. Cap stays. Do not chase last year's forty-four."),
("RATES", "Together they are thirty-nine percent of the classroom. That is not an inflation bet. It is the team sixty-forty never hired."),
],
"06": [
("DESK", "ALLWX desk. Episode six. Powder and the brigade. Cash-like and very long duration."),
("RATES", "CSH2 is not dead cash. It is near-overnight sterling plus a call on the next contribution. Vol near zero. The line that lets you act without selling a winner."),
("DESK", "In a hiking cycle the carry rises. In a break the powder is worth more than the carry. Emergency cash for the boiler sits outside the mix."),
("RATES", "IDTL is the fire brigade. Duration about fifteen years. A hundred basis points down in the long yield is about fifteen percent up in price. Paid in two thousand eight and two thousand twenty."),
("DESK", "Tonight the long end is in the penalty box. Fiscal issuance. Term premium. That is not a reason to fire the brigade in Stage 3. Buying after the pivot is late."),
("RATES", "The pair is the point. When the growth engine bleeds, the brigade is supposed to work. If both are silent, you have mis-hired one of them."),
],
"07": [
("DESK", "ALLWX desk. Episode seven. Correlations lie. Diversification is the number of uncorrelated streams, not the number of tickers."),
("RATES", "When inflation is boring, stocks and bonds look like two employees. When inflation is the shock, they become one. Twenty twenty-two sat that exam in public."),
("DESK", "Gold's correlation with equities can print near zero for years and then spike in a crisis. That is not a broken thesis. That is the watchman arriving late to a fire he was hired for."),
("RATES", "Oil can print a negative correlation with both stocks and bonds in a supply shock. That is ICOM's job in the current overlay."),
("DESK", "Satellites are residual claims in costume. Defence, semis, copper miners, industrials, healthcare, uranium. Six stories. Still equity weather. Caps exist so the house does not become Maximus."),
("RATES", "A hundred and seventy percent pie is not more diversification. It is a broken weight vector. Confirm. Then hire."),
],
"08": [
("DESK", "ALLWX desk. Episode eight. Seven questions. The morning operating system."),
("RATES", "One. Cycle stage. Two. What is the central bank doing, not saying. Three. Which room is the tape in. Four. What is the curve doing."),
("DESK", "Five. What is the dollar doing to the unhedged block. Six. What is priced versus what is printed. Seven. Which principle is live, and which sleeve is the residual."),
("RATES", "Run them before you touch a weight. A headline is not an answer. A friend is not an answer. A red Tuesday is not an answer."),
("DESK", "Walk-back is a two-key lock. PMI under fifty and two-tens inverted. Then satellites get zero. Historical frequency about six percent of months. Not the base case."),
("RATES", "The contribution date is the only action date. Observe the FOMC. Update questions two and three. Do not pre-position."),
("DESK", "Discipline compounds on any size. Habits built at nine hundred pounds are the same habits that stop a Stage-four sale when the drawdown is five figures."),
],
"09": [
("DESK", "ALLWX desk. Episode nine. If you are wrong. The defence manual."),
("RATES", "A sceptic will ask why not just own a world tracker. Because a tracker is a single-regime bet. It is paid in goldilocks. It is fined in stagflation. Thirty percent is the correct growth instrument. It is not the firm."),
("DESK", "Why not sixty-forty. Because that mix fails the two rooms where equities and nominal bonds are fined together. The classroom holds real assets specifically to break that correlation."),
("RATES", "Why gold if it pays no income. The wage is not the job. Do not confuse a one-day real-yield tax with a multi-year debasement brief."),
("DESK", "All Weather lagged a simple equity index over the last decade. True. The question is not who wins the sunny decade. It is who is still holding after the decade that is not sunny."),
("RATES", "Memorise the structure, not the script. The one answer: own all four rooms, sized so one room cannot own the household."),
],
"10": [
("DESK", "ALLWX desk. Episode ten. Honest numbers. The classroom versus a world tracker on this tape."),
("RATES", "In a reflation the machine lags. That is the design. Insurance looks expensive when residual claims are the paying job."),
("DESK", "Three-year gold can print a triple while the engine compounds. Both sentences can be true. Score each sleeve against its contract."),
("RATES", "Twenty-year classroom proxy. Lower annual return than a tracker. Lower worst year. That gap is the premium for rooms the last two decades rarely visited."),
("DESK", "At a three-figure book, spreads eat precision. Contribution direction is the rebalance. The framework is the rehearsal for a larger book."),
("RATES", "Do not use a one-year Sharpe to fire the deflation engine. VAGS looking ugly in reflation is the job working."),
],
"11": [
("DESK", "ALLWX desk. Episode eleven. Years that paid. Each job needs a year only it could have earned."),
("RATES", "Two thousand eight. Duration and the watchman. Two thousand thirteen. The honest cost of insurance. Twenty twenty-two. Goods and the inflation team. Twenty twenty-five. Gold in sterling."),
("DESK", "If you cannot name the year, you do not have a job. You have a costume."),
("RATES", "Prime writes a best-case card for every line. That is teaching, not a promise the year will repeat."),
("DESK", "The single best case for the whole machine was a year when rooms paid together. Already staffed. Not predicted."),
],
"12": [
("DESK", "ALLWX desk. Episode twelve. Phases and floors. Book size opens lines. Markets do not."),
("RATES", "Phase zero is seven jobs. Contribute. Do not decorate. Phase one, ten thousand. Value tilt eligible, not mandatory. INXG stays vetoed unless a kill rule is written."),
("DESK", "Three floors that do not move. Gold at fifteen, never below ten. Commodities hard-capped at ten. Long Treasuries six until Stage four or five confirms."),
("RATES", "Prime sits gold at nine point six and hires INXG at three point eight. Those are design choices. Name them. Do not pretend the classroom moved."),
("DESK", "After a hundred thousand there are no new lines. The bay grows. The protocol is denominated in pounds."),
],
"13": [
("DESK", "ALLWX desk. Episode thirteen, richer cut. Fifteen sentences. Invictus Prime is a design lock. It is not tonight's ticket pad."),
("RATES", "Classroom seven still teaches the rooms. The live sterling book is still fourteen lines at nine hundred and fifty pounds."),
("DESK", "Prime adds two sterling rates tickets. Short gilts as the ladder rung. UK linkers as a CPI contract TIPS cannot write. It drops managed futures. That is a different animal, not a fifth weather."),
("RATES", "INXG is the argument. Twenty twenty-two sterling inflation ran hotter than the US print. That is the job. The five-year wreck is the veto. Three point eight so a second gilt crisis cannot own the household. Probation."),
("DESK", "Gold prints nine point six. The classroom floor is ten. Name the breach."),
("RATES", "Satellites stay six tickets and about twelve percent. A fifty percent wipe in the sleeve is painful. It is not structural."),
("DESK", "Twenty-year proxy. Prime one hundred pounds becomes three three nine. One-Pie becomes three five three. Complexity is not a return."),
("RATES", "Do not rebuild the live book this week. Third of October still routes the book you actually hold. Fifteen lines or seven. Contribution on a date. Walk-back. No hero trades. ALLWX desk. Out."),
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

def build(code, lines):
    d = ROOT / code
    d.mkdir(exist_ok=True)
    parts = []
    for i, (who, text) in enumerate(lines):
        p = d / f"{i:02d}.mp3"
        if not (p.exists() and p.stat().st_size > 2000):
            tts(text, VOICES[who], p)
            print("ok", code, i, who, p.stat().st_size, flush=True)
        parts.append(p)
    lst = d / "list.txt"
    lst.write_text("".join(f"file '{p}'\n" for p in parts))
    raw = d / "raw.mp3"
    out = pathlib.Path(f"/workspace/public/audio/ep{code}.mp3")
    subprocess.check_call(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy", str(raw)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    subprocess.check_call(["ffmpeg", "-y", "-i", str(raw), "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "48000", "-b:a", "192k", str(out)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    # duration via ffmpeg stderr
    probe = subprocess.run(["ffmpeg", "-i", str(out)], capture_output=True, text=True)
    dur = "?"
    for line in probe.stderr.splitlines():
        if "Duration:" in line:
            dur = line.split("Duration:")[1].split(",")[0].strip()
            break
    print("built", code, dur, out.stat().st_size, flush=True)
    return dur

if __name__ == "__main__":
    for code, lines in EPS.items():
        build(code, lines)
    print("done")
