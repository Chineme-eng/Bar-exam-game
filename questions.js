/**
 * questions.js — Order in the Court
 *
 * TO ADD A QUESTION: copy any object, paste before the closing ],
 * and fill in all fields. No rule field — just topic, difficulty,
 * question, choices, answer (0-3 index), explanation, funFact.
 *
 * explanation: 2-3 sentences max.
 * funFact: 1 punchy sentence.
 */

const QUESTIONS = [

  /* ── TORTS ─────────────────────────────── */

  {
    topic: "Torts",
    difficulty: "easy",
    question: "Marcus walks up behind his coworker and slaps him on the back of the head as a joke. The coworker is not hurt but is furious. What tort has Marcus most likely committed?",
    choices: ["Assault", "Battery", "Intentional infliction of emotional distress", "No tort — it was just a joke"],
    answer: 1,
    explanation: "Battery is intentional harmful or offensive contact with another person. A slap on the head without consent is offensive contact regardless of intent to joke. No physical injury is required.",
    funFact: "You can be sued for battery for spitting on someone — no bruise required."
  },

  {
    topic: "Torts",
    difficulty: "easy",
    question: "Dana points a realistic-looking toy gun at a stranger and yells 'Don't move!' The stranger believes it is real and freezes in fear. No contact occurs. What has Dana most likely committed?",
    choices: ["Battery", "Assault", "False imprisonment", "Nothing — no contact occurred"],
    answer: 1,
    explanation: "Assault is intentionally causing reasonable apprehension of imminent harmful contact. The stranger reasonably feared being shot. No contact is needed — fear alone is enough.",
    funFact: "Assault and battery are two separate torts — you can commit one without the other."
  },

  {
    topic: "Torts",
    difficulty: "easy",
    question: "A customer slips on a freshly mopped floor in a grocery store. There was no wet floor sign. She breaks her wrist. What is the most likely claim?",
    choices: ["Products liability", "Negligence", "Battery", "Trespass to land"],
    answer: 1,
    explanation: "Negligence requires duty, breach, causation, and damages. The store owed a duty of care to customers, breached it by failing to warn of the wet floor, and that breach caused the injury.",
    funFact: "Grocery stores are one of the top defendants in slip-and-fall lawsuits in America."
  },

  {
    topic: "Torts",
    difficulty: "easy",
    question: "A security guard grabs a shopper by the arm, drags her to a back office, and locks the door for 30 minutes based on a mistaken belief she stole something. She did not steal. What has the guard most likely committed?",
    choices: ["Assault", "Battery only", "False imprisonment", "Both battery and false imprisonment"],
    answer: 3,
    explanation: "Battery occurred when the guard grabbed her arm — offensive physical contact. False imprisonment occurred when she was locked in the room — intentional confinement without consent or legal justification. Both apply.",
    funFact: "Stores have a 'shopkeeper's privilege' to detain suspects, but only briefly, reasonably, and with actual suspicion."
  },

  {
    topic: "Torts",
    difficulty: "medium",
    question: "A driver runs a red light and hits another car. The other driver has an unknown pre-existing spine condition and suffers catastrophic injuries that a healthy person would not have. Who bears responsibility for the full extent of the injuries?",
    choices: [
      "The injured driver — they assumed the risk of driving with a condition.",
      "The negligent driver — you take your victim as you find them.",
      "Both equally — damages are split based on the pre-existing condition.",
      "Neither — unforeseeable outcomes break the chain of causation."
    ],
    answer: 1,
    explanation: "The 'eggshell skull' rule holds that a negligent defendant is liable for all harm caused, even if dramatically worsened by the plaintiff's pre-existing condition. You take your victim as you find them.",
    funFact: "The eggshell skull rule means a light tap that kills someone with a paper-thin skull makes you liable for their death."
  },

  {
    topic: "Torts",
    difficulty: "medium",
    question: "A pharmaceutical company sells a painkiller that causes liver failure in some users. The company followed all FDA regulations and exercised maximum care. A patient who suffered liver failure sues. Under strict products liability, what is the likely result?",
    choices: [
      "Company wins — they followed all regulations and weren't negligent.",
      "Patient wins — strict liability doesn't require proof of negligence.",
      "Patient wins — but only if she proves the company knew of the risk.",
      "Company wins — FDA approval is a complete defense."
    ],
    answer: 1,
    explanation: "Strict products liability does not require negligence. If the product was defective and caused harm during foreseeable use, the manufacturer is liable regardless of how much care they took.",
    funFact: "The strict products liability doctrine was essentially invented by one California judge in a 1944 Coca-Cola bottle case."
  },

  {
    topic: "Torts",
    difficulty: "medium",
    question: "A debt collector calls a debtor 20 times a day, threatens her children, and sends graphic threatening letters for two weeks. She develops a documented anxiety disorder. What is her strongest claim?",
    choices: [
      "Assault — she feared imminent harm.",
      "Defamation — the letters damaged her reputation.",
      "Intentional infliction of emotional distress.",
      "Negligence — the collector breached a duty of care."
    ],
    answer: 2,
    explanation: "IIED requires extreme and outrageous conduct intentionally causing severe emotional distress. Threatening children and relentless harassment clearly qualifies. No physical injury is required — a documented anxiety disorder is sufficient.",
    funFact: "IIED wasn't recognized as a standalone tort until the mid-20th century — courts initially feared fake emotional harm claims."
  },

  {
    topic: "Torts",
    difficulty: "hard",
    question: "In a pure comparative fault state, a jury finds the defendant 65% at fault and the plaintiff 35% at fault. Total damages are $200,000. How much does the plaintiff recover?",
    choices: ["$200,000", "$130,000", "$70,000", "$0 — plaintiff was partly at fault"],
    answer: 1,
    explanation: "In a pure comparative fault jurisdiction, the plaintiff's recovery is reduced by their percentage of fault. $200,000 × 65% = $130,000. Pure comparative fault allows recovery even if plaintiff is 99% at fault.",
    funFact: "A handful of states still use contributory negligence — if you're even 1% at fault, you recover nothing."
  },

  {
    topic: "Torts",
    difficulty: "hard",
    question: "A construction company negligently leaves a manhole uncovered. A cyclist swerves to avoid it, crashes into a fire hydrant, which breaks and floods a basement, destroying $400,000 in rare art. Is the construction company the proximate cause of the art loss?",
    choices: [
      "Yes — but-for the manhole, the art would be safe.",
      "Yes — the company is the actual cause, which equals proximate cause.",
      "No — flooding a basement and destroying art is not a foreseeable result of an uncovered manhole.",
      "No — the cyclist's action is a superseding cause."
    ],
    answer: 2,
    explanation: "Proximate cause asks whether the harm was foreseeable from the negligent act. The chain here — cyclist swerves, hydrant breaks, basement floods, rare art destroyed — is too remote and unforeseeable. Courts cut off liability at some reasonable point.",
    funFact: "Palsgraf v. Long Island Railroad (1928) is the most famous proximate cause case — falling fireworks knocked scales onto Mrs. Palsgraf 30 feet away, and the railroad was held not liable."
  },

  /* ── CONTRACTS ──────────────────────────── */

  {
    topic: "Contracts",
    difficulty: "easy",
    question: "Uncle promises his niece: 'I'll give you my car because you're my favorite.' She does nothing in response. He later changes his mind. Is there an enforceable contract?",
    choices: [
      "Yes — it was a clear, sincere promise.",
      "Yes — family promises are legally binding.",
      "No — there is no consideration.",
      "No — oral car transfers are never enforceable."
    ],
    answer: 2,
    explanation: "A valid contract requires offer, acceptance, and consideration — something bargained-for in exchange. A gift promise has no consideration because the niece gave nothing in return. Without consideration, it's unenforceable.",
    funFact: "Courts have enforced promises for $1 — even when the dollar was never actually paid. Consideration can be nominal."
  },

  {
    topic: "Contracts",
    difficulty: "easy",
    question: "On Monday, Seller mails an offer to Buyer. Wednesday, Buyer mails an acceptance. Thursday, Seller mails a revocation. Both arrive Friday. Is there a contract?",
    choices: [
      "No — the revocation arrived the same day as the acceptance.",
      "Yes — acceptance was effective when mailed on Wednesday.",
      "No — Seller revoked before the acceptance was received.",
      "It depends on who opened their mail first."
    ],
    answer: 1,
    explanation: "Under the mailbox rule, acceptance is effective upon dispatch — the moment Buyer mailed it on Wednesday. The contract was already formed before Seller's Thursday revocation, which came too late.",
    funFact: "The mailbox rule dates to 1818 England, invented when delayed mail created a dispute over wool."
  },

  {
    topic: "Contracts",
    difficulty: "medium",
    question: "Seller offers to sell 100 widgets for $500. Buyer responds: 'I accept, but I want delivery by Friday.' Under common law, has a contract been formed?",
    choices: [
      "Yes — Buyer accepted the essential terms.",
      "No — Buyer's response is a counteroffer, not an acceptance.",
      "Yes — delivery date is a minor term that doesn't change the deal.",
      "No — offers for goods must be in writing."
    ],
    answer: 1,
    explanation: "Under common law's mirror image rule, acceptance must match the offer exactly. Adding any new term (delivery by Friday) makes the response a counteroffer, not an acceptance, which simultaneously rejects the original offer.",
    funFact: "The UCC softened this rigid rule for merchants — businesses routinely swap conflicting form contracts, and strict mirror-image would mean few deals are ever legally formed."
  },

  {
    topic: "Contracts",
    difficulty: "medium",
    question: "A company tells an employee at a retirement party: 'We'll pay you $1,000 a month pension when you retire.' He retires, turns down other jobs, and the company refuses to pay. What is his strongest legal theory?",
    choices: [
      "Express contract — the promise was clear.",
      "Implied contract — employment creates pension rights.",
      "Promissory estoppel — he reasonably relied on the promise to his detriment.",
      "Unjust enrichment — the company benefited from his years of work."
    ],
    answer: 2,
    explanation: "No classic contract exists — past work is not consideration for a future promise. But promissory estoppel enforces a promise when the promisee reasonably relied on it to their detriment and injustice would result without enforcement.",
    funFact: "Promissory estoppel was essentially invented in 1932 to rescue pension promises that failed for lack of consideration."
  },

  {
    topic: "Contracts",
    difficulty: "hard",
    question: "A hardware company sends a signed written offer to sell 500 steel beams, stating: 'This offer is firm until September 1.' The offer is sent June 1. On July 15 they send a revocation. July 20, Buyer accepts. Is there a contract?",
    choices: [
      "No — the revocation was sent before the acceptance.",
      "Yes — UCC firm offer rules made the offer irrevocable until September 1.",
      "Yes — but only if Buyer relied on the offer before the revocation.",
      "No — firm offers over 90 days require consideration."
    ],
    answer: 1,
    explanation: "Under UCC §2-205, a merchant's signed written firm offer is irrevocable for the stated period (max 90 days) without consideration. The June-to-September period is within 90 days, making the July revocation ineffective. The acceptance formed a valid contract.",
    funFact: "At common law, you had to pay money — even $1 — to make an offer irrevocable. The UCC eliminated that formality for merchants."
  },

  {
    topic: "Contracts",
    difficulty: "hard",
    question: "A buyer orders 500 red widgets for a holiday display. Seller ships 500 orange ones, calling them 'close enough.' Buyer rejects the entire shipment. Under the UCC, is the rejection valid?",
    choices: [
      "No — only material breaches allow rejection under the UCC.",
      "Yes — the UCC's perfect tender rule allows rejection if goods fail in any respect.",
      "No — Buyer must first give Seller a chance to cure before rejecting.",
      "Yes — but Buyer must pay for the goods before returning them."
    ],
    answer: 1,
    explanation: "Under UCC §2-601, the perfect tender rule lets a buyer reject a delivery if it fails in any respect. Orange instead of red is a clear nonconformity, especially for a holiday display where color is material. The initial rejection is valid.",
    funFact: "The UCC perfect tender rule is much stricter than common law's 'substantial performance' standard — one small defect can void the whole deal."
  },

  /* ── CRIMINAL LAW ───────────────────────── */

  {
    topic: "Criminal Law",
    difficulty: "easy",
    question: "Jake takes a bicycle from a rack, rides it home, and decides to keep it. He had no permission. What crime has Jake most likely committed?",
    choices: ["Robbery", "Burglary", "Larceny", "Embezzlement"],
    answer: 2,
    explanation: "Larceny is the trespassory taking and carrying away of another's property with intent to permanently deprive. All elements are met. Robbery requires force or threat. Burglary requires entering a building. Embezzlement requires lawful initial possession.",
    funFact: "Moving stolen property even a fraction of an inch technically satisfies the 'carrying away' element of larceny."
  },

  {
    topic: "Criminal Law",
    difficulty: "easy",
    question: "During a heated argument, Marcus grabs a lamp and strikes Victor once, killing him. Marcus claims he never planned to kill Victor. What is the most likely charge?",
    choices: ["First-degree murder", "Second-degree murder", "Voluntary manslaughter", "Involuntary manslaughter"],
    answer: 1,
    explanation: "First-degree murder requires premeditation and deliberation — Marcus acted impulsively. Voluntary manslaughter requires adequate legal provocation (a verbal argument usually doesn't qualify). An intentional killing without premeditation is second-degree murder.",
    funFact: "Courts have held that premeditation can form in seconds — but 'heat of passion' in the moment can also bring a charge down to manslaughter."
  },

  {
    topic: "Criminal Law",
    difficulty: "easy",
    question: "Sam reasonably believes Carl is about to punch him and punches Carl first. Carl was not actually going to attack — it was a misunderstanding. Sam is charged with battery. What happens?",
    choices: [
      "Sam is guilty — you can't use preemptive self-defense.",
      "Sam is not guilty — reasonable belief of imminent threat is enough.",
      "Sam is guilty — the threat must be real, not just believed.",
      "Sam is not guilty only if he tried to retreat first."
    ],
    answer: 1,
    explanation: "Self-defense is based on the defendant's reasonable belief, not whether the threat was real. If Sam reasonably believed Carl was about to attack, he is entitled to defend himself even if mistaken. The key word is 'reasonably.'",
    funFact: "About half of U.S. states have 'Stand Your Ground' laws eliminating the duty to retreat before using self-defense in public."
  },

  {
    topic: "Criminal Law",
    difficulty: "easy",
    question: "A man breaks into his ex's house at 2 a.m. with the intent to confront her. She is not home. What crime has he most likely committed?",
    choices: ["Trespass only", "Burglary", "Attempted assault", "Breaking and entering — not burglary since no crime occurred inside"],
    answer: 1,
    explanation: "At common law, burglary is breaking and entering the dwelling of another at nighttime with intent to commit a felony inside. The felony doesn't need to actually happen — intent at the time of entry is enough. All elements are met here.",
    funFact: "Modern statutes have expanded burglary far beyond the old common law — many states now include any building, any time of day."
  },

  {
    topic: "Criminal Law",
    difficulty: "medium",
    question: "A driver, texting while driving, runs a red light and kills a pedestrian. She did not intend to harm anyone. What is the most appropriate charge?",
    choices: [
      "First-degree murder",
      "Second-degree murder",
      "Voluntary manslaughter",
      "Involuntary manslaughter"
    ],
    answer: 3,
    explanation: "Involuntary manslaughter is an unintentional killing caused by criminal negligence or recklessness. Texting while driving shows gross disregard for human life — enough for involuntary manslaughter, but not the intent required for murder.",
    funFact: "In most states, a DUI-related killing is charged as 'vehicular manslaughter,' a separate statute with its own penalties."
  },

  {
    topic: "Criminal Law",
    difficulty: "medium",
    question: "Dan plans to rob a bank. He drives there, parks, loads his gun, puts on a mask, and walks toward the entrance — then panics and drives away. What is he most likely guilty of?",
    choices: [
      "Nothing — he didn't enter or threaten anyone.",
      "Attempted robbery — he took a substantial step.",
      "Attempted robbery, but he has a complete defense of voluntary abandonment.",
      "Conspiracy to commit robbery only."
    ],
    answer: 1,
    explanation: "Under the MPC, attempt requires a substantial step strongly corroborating criminal intent. Loading a gun, masking up, and walking toward the bank clearly qualifies. Abandonment out of fear is not truly voluntary under the MPC, so that defense fails.",
    funFact: "Attempt was not recognized as a crime in early English common law — you had to actually commit the offense."
  },

  {
    topic: "Criminal Law",
    difficulty: "medium",
    question: "A woman is charged with shoplifting an expensive watch. She claims she was so intoxicated she forgot she was wearing it when she left. Voluntary intoxication — can she use it as a defense?",
    choices: [
      "No — voluntary intoxication is never a defense.",
      "Yes — if she lacked the intent to steal, intoxication negates the mens rea.",
      "Yes — intoxication is a complete defense to any crime.",
      "No — shoplifting is a strict liability offense so intent doesn't matter."
    ],
    answer: 1,
    explanation: "Voluntary intoxication can be a defense to specific intent crimes — like larceny, which requires intent to permanently deprive. If she genuinely lacked that intent due to intoxication, it negates the required mental state. This is a limited defense, not a free pass.",
    funFact: "Voluntary intoxication is never a defense to general intent crimes — you can't drink your way out of a battery charge."
  },

  {
    topic: "Criminal Law",
    difficulty: "hard",
    question: "Victor believes his neighbor is a demon sent to destroy humanity and kills him. A psychiatrist confirms Victor knew it was legally prohibited but couldn't stop himself due to an irresistible impulse. Under the M'Naghten test, is he legally insane?",
    choices: [
      "Yes — he couldn't control his conduct.",
      "No — he knew the act was legally prohibited.",
      "Yes — the mental disease caused the killing.",
      "No — schizophrenia is not recognized under M'Naghten."
    ],
    answer: 1,
    explanation: "M'Naghten tests only cognition: did the defendant know the nature of the act, or know it was wrong? Victor knew it was legally prohibited. M'Naghten has no volitional prong — inability to control yourself is irrelevant under this test. The irresistible impulse test (in some states) would reach a different result.",
    funFact: "M'Naghten rules were created in 1843 after a Scotsman shot the British Prime Minister's secretary, believing he was being persecuted by the government."
  },

  {
    topic: "Criminal Law",
    difficulty: "hard",
    question: "Alice and Bob agree to rob a bank. Alice recruits Carol as getaway driver. Bob is arrested before the robbery. Alice and Carol carry it out alone. Are all three guilty of conspiracy?",
    choices: [
      "Only Alice and Carol — Bob was arrested before the robbery.",
      "All three — the conspiracy was formed when Bob and Alice agreed, and Carol joined it.",
      "Only Alice — she was the one who recruited both parties.",
      "Bob is not guilty — he never agreed with Carol."
    ],
    answer: 1,
    explanation: "Conspiracy is complete upon agreement plus an overt act. Alice and Bob's agreement formed the conspiracy. Carol joined the existing conspiracy when she agreed to participate. Bob's arrest doesn't undo his role. Under Pinkerton, all conspirators are liable for crimes committed in furtherance of the plan.",
    funFact: "Under Pinkerton doctrine, one conspirator can be convicted for crimes committed by their partner while they were in jail — it's one reason prosecutors love conspiracy charges."
  },

  /* ── CONSTITUTIONAL LAW ─────────────────── */

  {
    topic: "Constitutional Law",
    difficulty: "easy",
    question: "A city ordinance bans all political speeches in the town square on Sundays. A speaker is arrested for violating it. The ordinance is best challenged as:",
    choices: [
      "A valid time, place, and manner restriction.",
      "An unconstitutional content-based restriction on speech.",
      "A valid regulation of conduct, not speech.",
      "An unconstitutional prior restraint."
    ],
    answer: 1,
    explanation: "A law targeting 'political speeches' regulates speech based on content. Content-based restrictions face strict scrutiny — the government needs a compelling interest served by narrowly tailored means, which is extremely hard to satisfy. A content-neutral time/place/manner restriction would face a much lower bar.",
    funFact: "Town squares and public sidewalks are 'traditional public forums' where the government has the least power to restrict speech."
  },

  {
    topic: "Constitutional Law",
    difficulty: "easy",
    question: "Police stop a car for speeding and smell marijuana. Without a warrant, they search the entire car and find drugs in a locked glove compartment. Constitutional?",
    choices: [
      "No — they needed a warrant to search a locked compartment.",
      "Yes — the automobile exception allows warrantless searches with probable cause.",
      "No — the smell of marijuana alone isn't probable cause.",
      "Yes — any traffic stop gives police the right to search."
    ],
    answer: 1,
    explanation: "Under the automobile exception, police may search a car without a warrant if they have probable cause. The smell of marijuana is probable cause. This exception extends to all areas of the car, including locked compartments, if probable cause supports looking there.",
    funFact: "The automobile exception has existed since 1925 — courts have always treated cars as less private than homes."
  },

  {
    topic: "Constitutional Law",
    difficulty: "medium",
    question: "Congress passes a law making it a federal crime to possess a firearm within 1,000 feet of a school. Under Supreme Court precedent, this law is most likely:",
    choices: [
      "Constitutional — Congress has broad Commerce Clause power.",
      "Unconstitutional — gun possession near schools doesn't substantially affect interstate commerce.",
      "Constitutional — gun manufacturers engage in interstate commerce.",
      "Unconstitutional — only states can regulate education."
    ],
    answer: 1,
    explanation: "This is United States v. Lopez (1995). The Supreme Court struck down the identical Gun-Free School Zones Act, holding that gun possession near schools is not an economic activity and has no substantial effect on interstate commerce.",
    funFact: "Lopez was the first time since 1937 that the Supreme Court struck down a federal law for exceeding the Commerce Clause — it shocked constitutional scholars."
  },

  {
    topic: "Constitutional Law",
    difficulty: "medium",
    question: "A public high school lets students vote on whether to include prayer at graduation. Students vote yes. A student-written prayer is delivered over the PA. Is this constitutional?",
    choices: [
      "Yes — students chose the content, not the school.",
      "Yes — graduation attendance is technically voluntary.",
      "No — school-sponsored prayer at graduation violates the Establishment Clause.",
      "No — any prayer at a government-sponsored event is per se unconstitutional."
    ],
    answer: 2,
    explanation: "Lee v. Weisman (1992) held that school-sponsored prayer at public graduation violates the Establishment Clause. The school's involvement in arranging the format creates impermissible state sponsorship, and the graduation context creates coercive pressure even if attendance is 'voluntary.'",
    funFact: "School prayer has been unconstitutional since 1962 — the Engel v. Vitale ruling generated more angry letters to the Supreme Court than almost any other decision."
  },

  {
    topic: "Constitutional Law",
    difficulty: "hard",
    question: "State A bans all out-of-state waste from its landfills, claiming environmental protection. Out-of-state waste companies sue. The law is most likely:",
    choices: [
      "Constitutional — valid police power to protect public health.",
      "Unconstitutional — facial discrimination against interstate commerce is virtually per se invalid.",
      "Constitutional — waste disposal is a local concern.",
      "Unconstitutional only if the companies can prove discriminatory intent."
    ],
    answer: 1,
    explanation: "Philadelphia v. New Jersey (1978) struck down an identical law. Under the Dormant Commerce Clause, laws that facially discriminate against interstate commerce are nearly always invalid. The state must use non-discriminatory means to achieve environmental goals.",
    funFact: "Justice Rehnquist argued in dissent that garbage is different — it carries real health hazards. The majority disagreed, but the debate has never fully died."
  },

  {
    topic: "Constitutional Law",
    difficulty: "hard",
    question: "A state environmental law prohibits all construction on a beachfront lot, rendering it economically worthless. The owner sues for compensation. What is the most likely outcome?",
    choices: [
      "No taking — environmental regulations are always valid police power.",
      "A regulatory taking requiring just compensation — all economic value was destroyed.",
      "A partial taking — compensation only for losses exceeding 50%.",
      "No taking — the owner can still use the land for non-construction purposes."
    ],
    answer: 1,
    explanation: "Lucas v. South Carolina Coastal Council (1992) held that when a regulation destroys all economically beneficial use of land, it is a per se regulatory taking requiring just compensation — unless the restriction merely enforces background principles of nuisance law.",
    funFact: "David Lucas paid $975,000 for his lots, got $1.5 million in a settlement — then the state sold the lots to private developers for less."
  },

  /* ── EVIDENCE ───────────────────────────── */

  {
    topic: "Evidence",
    difficulty: "easy",
    question: "At trial, a witness testifies: 'I heard John say at a bar that he hated the victim and wanted to kill him.' This is offered to show John had motive. Is it hearsay?",
    choices: [
      "No — it is offered for motive, not to prove the truth of what John said.",
      "Yes — any out-of-court statement is hearsay.",
      "No — party admissions are never hearsay.",
      "Yes — but it's admissible as a present sense impression."
    ],
    answer: 0,
    explanation: "Hearsay is an out-of-court statement offered to prove the truth of the matter asserted. This statement is offered to show John's state of mind (motive), not to prove he actually killed anyone. It is not hearsay and is admissible.",
    funFact: "The hearsay rule has over 30 exceptions — so many that law professors joke it's a rule that swallows itself."
  },

  {
    topic: "Evidence",
    difficulty: "easy",
    question: "An executive tells the company's lawyer in a meeting with 10 other employees: 'We need to hide these records.' The lawyer is subpoenaed to testify about this. Is it protected by attorney-client privilege?",
    choices: [
      "Yes — it was said to an attorney.",
      "No — the communication was not confidential; it was made in front of third parties.",
      "Yes — legal discussions with executives are always privileged.",
      "No — it concerned illegal activity."
    ],
    answer: 1,
    explanation: "Attorney-client privilege requires confidentiality. Making a statement in front of 10 non-attorney employees destroys that confidentiality. The presence of unnecessary third parties waives the privilege entirely.",
    funFact: "Attorney-client privilege is the oldest evidentiary privilege in common law — it dates to 16th century England."
  },

  {
    topic: "Evidence",
    difficulty: "medium",
    question: "A defendant is charged with bank fraud. The prosecution wants to introduce evidence he committed similar fraud three years earlier. The defendant objects. The court should:",
    choices: [
      "Exclude it — prior bad acts are never admissible in criminal trials.",
      "Admit it — if offered to show knowledge, plan, or absence of mistake.",
      "Admit it automatically — fraud involves dishonesty.",
      "Exclude it — character evidence is never admissible."
    ],
    answer: 1,
    explanation: "FRE 404(b) bars prior bad acts to prove character conformity. But prior acts are admissible for specific non-character purposes: knowledge, plan, absence of mistake, identity. Prior similar fraud is strong evidence he knew what he was doing and didn't make an innocent mistake.",
    funFact: "Juries find prior bad acts extremely persuasive — which is exactly why courts are careful about when they're admitted."
  },

  {
    topic: "Evidence",
    difficulty: "medium",
    question: "After a customer slips on a wet floor, the store installs non-slip mats everywhere. At trial, the plaintiff offers this as evidence the floor was dangerous. The store objects. How should the court rule?",
    choices: [
      "Admit it — the fix proves the store knew the floor was dangerous.",
      "Exclude it — subsequent remedial measures cannot be used to prove negligence.",
      "Admit it — the store waived the objection by making the change publicly.",
      "Exclude it — it's irrelevant to what happened before the accident."
    ],
    answer: 1,
    explanation: "FRE 407 bars evidence of subsequent remedial measures to prove negligence. The policy: we want people to fix dangerous conditions. If fixing a problem became evidence of prior fault, no one would fix anything. It may still be admissible to show feasibility or ownership if disputed.",
    funFact: "Judges call this one of the clearest cases where policy deliberately overrides logical relevance in evidence law."
  },

  {
    topic: "Evidence",
    difficulty: "hard",
    question: "Paula is shot and tells the nurse: 'Ray shot me, I know I'm going to die.' She unexpectedly survives and refuses to testify at Ray's murder trial. Can the nurse testify about what Paula said?",
    choices: [
      "Yes — dying declarations don't require the declarant to have actually died.",
      "No — dying declarations require actual death of the declarant.",
      "Yes — it qualifies as an excited utterance instead.",
      "No — the Confrontation Clause bars this because Paula is alive and available."
    ],
    answer: 3,
    explanation: "Dying declarations don't require actual death, but they do require the declarant to be unavailable. Paula is alive. Under Crawford v. Washington (2006), testimonial statements are barred unless the declarant is unavailable AND the defendant had a prior chance to cross-examine. Neither condition is met — the Confrontation Clause bars admission.",
    funFact: "The dying declaration exception assumes a person who believes they're dying won't lie — a surprisingly religious assumption baked into secular evidence law."
  },

  /* ── PROPERTY ───────────────────────────── */

  {
    topic: "Property",
    difficulty: "easy",
    question: "A deed conveys land 'to Bob and his heirs.' What estate does Bob hold?",
    choices: ["Life estate", "Fee tail", "Fee simple determinable", "Fee simple absolute"],
    answer: 3,
    explanation: "'To Bob and his heirs' is the classic language of a fee simple absolute — the largest ownership interest in land. It lasts forever, can be sold, inherited, or left by will, with no conditions attached.",
    funFact: "The 'and his heirs' language was historically required to create fee simple — without it, courts would grant only a life estate."
  },

  {
    topic: "Property",
    difficulty: "easy",
    question: "For 12 years, a neighbor uses a fence that encroaches 2 feet onto Owner's land without permission. The statutory period for adverse possession is 10 years. Who owns the 2-foot strip?",
    choices: [
      "Owner — a fence isn't 'actual' possession.",
      "Neighbor — all elements of adverse possession are met.",
      "Owner — can eject the neighbor at any time since there was no permission.",
      "Neighbor — but only after paying fair market value."
    ],
    answer: 1,
    explanation: "Adverse possession requires actual, open, hostile, and continuous possession for the statutory period. A fence clearly satisfies all elements: it's physical, visible, without permission, and 12 years exceeds the 10-year statute. Neighbor owns the strip. No payment required.",
    funFact: "Adverse possession mostly applies to boundary disputes today — not squatters taking entire properties, as TV often portrays."
  },

  {
    topic: "Property",
    difficulty: "medium",
    question: "Alice and Bob own land as joint tenants. Without telling Bob, Alice conveys her interest to Carol. What does Carol hold?",
    choices: [
      "A joint tenancy with Bob — Carol steps into Alice's shoes.",
      "Nothing — Alice cannot unilaterally convey a joint tenancy interest.",
      "A tenancy in common with Bob — the conveyance severed the joint tenancy.",
      "A life estate — joint tenancy interests aren't fully transferable."
    ],
    answer: 2,
    explanation: "A joint tenant can unilaterally sever the joint tenancy by conveying their interest — no consent needed. But the conveyance destroys the unity of time and title between Carol and Bob, converting them into tenants in common with no right of survivorship.",
    funFact: "Joint tenancy is called the 'poor man's will' — property passes automatically to the survivor without probate."
  },

  {
    topic: "Property",
    difficulty: "medium",
    question: "A landlord's heating system breaks in January. The tenant gives written notice; nothing is fixed for 6 weeks. The tenant withholds rent. In a state recognizing the implied warranty of habitability, the landlord sues for unpaid rent. What is the tenant's strongest defense?",
    choices: [
      "Constructive eviction — the conditions forced her to effectively leave.",
      "Breach of the implied warranty of habitability, justifying rent withholding.",
      "Independent covenants — rent and repairs are unrelated obligations.",
      "Actual eviction — the landlord removed her access to the premises."
    ],
    answer: 1,
    explanation: "The implied warranty of habitability requires landlords to maintain livable conditions. A broken heating system in winter is a clear breach. The tenant can withhold rent (or pay into escrow) as a remedy. Constructive eviction requires actually vacating — she hasn't left.",
    funFact: "Before 1970, courts required tenants to pay rent even if landlords violated every obligation — the Javins case changed that in a landmark 1970 decision."
  },

  {
    topic: "Property",
    difficulty: "hard",
    question: "Owner sells the back half of his property to Buyer. The deed is silent about a dirt road crossing the back portion that Owner has always used to reach his house. Owner claims an implied easement. Buyer disagrees. Who prevails?",
    choices: [
      "Buyer — easements must be in writing to be enforceable.",
      "Owner — an easement by implication arises from prior use that was apparent and reasonably necessary.",
      "Buyer — the Statute of Frauds requires all easements to be written.",
      "Owner — but only if there is absolutely no other way to access his house."
    ],
    answer: 1,
    explanation: "An easement by implication requires prior common ownership, a quasi-easement that was apparent and continuous, and reasonable necessity at the time of severance. All three are met — the road was visible, continuously used, and reasonably necessary. It arises by operation of law without a written instrument.",
    funFact: "Strict necessity is only required for easements by necessity — implied easements only need to be reasonably, not absolutely, necessary."
  },

  {
    topic: "Property",
    difficulty: "hard",
    question: "Owner conveys land in 1990 to Alice on January 1; Alice doesn't record. Owner then conveys the same land to Bob on February 1; Bob knows about Alice's deed. Bob records February 2. Alice records February 10. Under a race-notice statute, who prevails?",
    choices: [
      "Bob — he recorded first.",
      "Alice — her deed was first in time.",
      "Alice — Bob had actual notice of her deed and is not a bona fide purchaser.",
      "Bob — under race-notice, only recording order matters."
    ],
    answer: 2,
    explanation: "A race-notice statute requires a subsequent purchaser to BOTH record first AND take without notice of the prior conveyance. Bob recorded first but had actual knowledge of Alice's deed — he fails the notice requirement. Alice prevails as the first grantee.",
    funFact: "Only North Carolina still uses a pure race statute — whoever records first wins, even if they knew about a prior deed."
  }

];
