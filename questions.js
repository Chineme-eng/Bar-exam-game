/**
 * questions.js — Bar Exam Quiz Question Bank
 *
 * HOW TO ADD MORE QUESTIONS:
 * Copy any object below, paste it at the end of the array (before the closing ]),
 * and fill in your fields. Every field is required.
 *
 * Fields:
 *   topic     : "Torts" | "Contracts" | "Criminal Law" | "Constitutional Law" | "Evidence" | "Property"
 *   difficulty: "easy" | "medium" | "hard"
 *   rule      : One-sentence statement of the core legal rule being tested
 *   question  : The fact pattern / question text
 *   choices   : Array of exactly 4 strings (the answer options)
 *   answer    : Index (0–3) of the correct choice
 *   explanation: Why that answer is correct (and why others are wrong)
 *   funFact   : A fun, surprising, or memorable legal fact related to this question
 */

const QUESTIONS = [

  /* ─────────────────────────────────────────
     TORTS — EASY
  ───────────────────────────────────────── */
  {
    topic: "Torts",
    difficulty: "easy",
    rule: "Negligence requires duty, breach, causation, and damages.",
    question: "Dana is driving and runs a red light, hitting Paul's car. Paul breaks his arm. Which element of negligence is MOST clearly satisfied by the fact that Dana ran a red light?",
    choices: [
      "Duty",
      "Breach",
      "Actual causation",
      "Damages"
    ],
    answer: 1,
    explanation: "Running a red light is the breach — it's the failure to meet the standard of care that a reasonable driver would observe. Duty already existed (all drivers owe a duty to other road users), and causation and damages are established by the collision and the broken arm. The specific act of running the red light is the breach.",
    funFact: "The concept of the 'reasonable person' standard dates back to an 1837 English case, Vaughan v. Menlove, where a man was held liable for a fire even though he genuinely believed his haystack was safe. The court decided objective reasonableness, not subjective good faith, was the standard."
  },

  {
    topic: "Torts",
    difficulty: "easy",
    rule: "Battery is an intentional harmful or offensive contact with another person.",
    question: "While walking past Karen, Tom intentionally flicks water from his cup onto her face as a prank. Karen is not physically hurt but is furious. Has Tom committed battery?",
    choices: [
      "No, because Karen was not physically injured.",
      "No, because Tom only intended a prank, not harm.",
      "Yes, because the contact was offensive and intentional.",
      "Yes, but only if Karen can prove she feared the contact beforehand."
    ],
    answer: 2,
    explanation: "Battery requires an intentional act causing harmful OR offensive contact — physical injury is not required. Flicking water on someone's face without consent is clearly offensive contact. Tom intended the act (it was deliberate), so battery is satisfied. The 'prank' intent is irrelevant; you cannot escape battery liability by claiming you meant it as a joke.",
    funFact: "Under the original common law, even a surgeon who performed a life-saving operation without consent could be liable for battery. Informed consent doctrine in medicine grew directly out of this tort principle."
  },

  {
    topic: "Torts",
    difficulty: "easy",
    rule: "Landowners owe a higher duty of care to invitees than to licensees or trespassers.",
    question: "Maria enters a grocery store to shop. She slips on a wet floor that the store staff knew about but had not yet marked with a warning sign. Maria is best classified as:",
    choices: [
      "A trespasser, so the store owes her no duty.",
      "A licensee, so the store must warn of known dangers.",
      "An invitee, so the store must reasonably inspect and maintain the premises.",
      "A social guest, with the same status as a licensee."
    ],
    answer: 2,
    explanation: "A customer in a store open to the public is a business invitee — someone invited onto the property for the owner's commercial benefit. Invitees receive the highest duty: the landowner must not only warn of known dangers but also reasonably inspect for unknown ones. Because the store knew about the wet floor and failed to warn, this is strong evidence of breach.",
    funFact: "The common law three-tier system (invitee, licensee, trespasser) has been abolished in several states, replaced with a single 'reasonable care under the circumstances' standard. California led this change in Rowland v. Christian (1968)."
  },

  /* ─────────────────────────────────────────
     TORTS — MEDIUM
  ───────────────────────────────────────── */
  {
    topic: "Torts",
    difficulty: "medium",
    rule: "Under strict products liability, a manufacturer is liable for defective products that cause harm, regardless of negligence.",
    question: "Anna buys a blender from a store. The blender's blade detaches during normal use and cuts her hand. The manufacturer exercised all possible care in making the blender. Anna sues under strict products liability. What is the most likely outcome?",
    choices: [
      "Anna loses, because the manufacturer was not negligent.",
      "Anna wins, because strict liability does not require proof of negligence.",
      "Anna loses, because she assumed the risk of using a blender.",
      "Anna wins only if she can show the manufacturer knew of the defect."
    ],
    answer: 1,
    explanation: "Strict products liability (Restatement Second §402A) makes manufacturers liable for defective products regardless of care taken. The key elements are: (1) the product was defective, (2) the defect existed when it left the manufacturer, and (3) the defect caused the plaintiff's injury during foreseeable use. The manufacturer's due care is irrelevant. A blade detaching during normal use is a manufacturing defect.",
    funFact: "Strict products liability as a legal doctrine was largely created by one judge — Roger Traynor of the California Supreme Court — in Escola v. Coca-Cola Bottling Co. (1944). His influential concurrence laid the groundwork that the full court eventually adopted in Greenman v. Yuba Power Products (1963)."
  },

  {
    topic: "Torts",
    difficulty: "medium",
    rule: "Proximate cause (legal cause) limits liability to foreseeable harms that flow from the defendant's negligence.",
    question: "A construction company negligently leaves a manhole uncovered. A cyclist swerves to avoid the manhole and collides with a fire hydrant, which breaks and floods a nearby basement, destroying rare artworks worth $500,000. Is the construction company the proximate cause of the artwork damage?",
    choices: [
      "Yes, because but-for the open manhole, the damage would not have occurred.",
      "Yes, because the company is the actual cause, and actual cause equals proximate cause.",
      "No, because the flooding of a basement and destruction of rare art is not a foreseeable consequence of leaving a manhole uncovered.",
      "No, because the cyclist's action was an intervening cause that breaks the chain entirely."
    ],
    answer: 2,
    explanation: "Actual cause ('but-for') is necessary but not sufficient. Proximate cause asks whether the harm was a foreseeable type of injury resulting from the negligent act. While some property damage from a manhole accident is foreseeable, the specific chain — cyclist swerves → hydrant breaks → basement floods → rare art destroyed — is likely too remote and unforeseeable to impose liability on the construction company for the art loss. Courts use foreseeability to cut off liability at some reasonable point.",
    funFact: "The most famous proximate cause case is Palsgraf v. Long Island Railroad (1928). A man jumping onto a train was helped by guards, dropped fireworks, which exploded, knocking scales that fell on Mrs. Palsgraf. Judge Benjamin Cardozo held the railroad owed her no duty — she was outside the 'zone of danger.' It remains the most cited torts case in American law."
  },

  {
    topic: "Torts",
    difficulty: "medium",
    rule: "Defamation requires a false statement of fact published to a third party that damages the plaintiff's reputation.",
    question: "A newspaper publishes an editorial saying 'Senator Smith is a corrupt politician who takes bribes.' Senator Smith is a public figure. What must Smith prove to win a defamation claim?",
    choices: [
      "Only that the statement was false and damaged his reputation.",
      "That the statement was false and published with negligence.",
      "That the statement was false and made with actual malice — knowledge of falsity or reckless disregard for truth.",
      "Nothing — elected officials cannot be defamed."
    ],
    answer: 2,
    explanation: "Under New York Times v. Sullivan (1964), public officials (and later, public figures) must prove 'actual malice' — that the defendant knew the statement was false or acted with reckless disregard for its truth or falsity. This heightened standard protects robust debate about public figures. Negligence alone is insufficient for a public figure plaintiff.",
    funFact: "New York Times v. Sullivan arose from a civil rights-era ad. Montgomery, Alabama officials sued the Times over an ad supporting MLK. The Supreme Court unanimously reversed a $500,000 verdict, recognizing that allowing such suits would silence press coverage of the civil rights movement — and created the actual malice standard in the process."
  },

  /* ─────────────────────────────────────────
     TORTS — HARD
  ───────────────────────────────────────── */
  {
    topic: "Torts",
    difficulty: "hard",
    rule: "Under comparative fault, a plaintiff's recovery is reduced by their percentage of fault (or barred entirely in contributory negligence jurisdictions).",
    question: "In a pure comparative fault jurisdiction, a jury finds: Defendant 70% at fault, Plaintiff 30% at fault. Plaintiff's total damages are $100,000. Plaintiff also had a pre-existing back condition that made the injury more severe. The jury values the aggravation of the pre-existing injury at $40,000 of the total. How much does plaintiff recover?",
    choices: [
      "$70,000 — 70% of the total damages.",
      "$70,000, but the defendant argues the eggshell skull rule doesn't apply to economic losses.",
      "$70,000, because the eggshell skull rule makes the defendant liable for the full aggravated amount, reduced only by plaintiff's 30% fault.",
      "$42,000 — 70% of only the non-pre-existing portion ($60,000)."
    ],
    answer: 2,
    explanation: "The 'eggshell skull' (thin skull) rule provides that a defendant takes the plaintiff as they find them — defendants are liable for the full extent of harm, even if aggravated by a pre-existing condition, as long as the type of harm was foreseeable. So the defendant owes the full $100,000 (including the $40,000 aggravation). In a pure comparative fault system, this is then reduced by the plaintiff's 30% fault: $100,000 × 70% = $70,000.",
    funFact: "The 'eggshell skull' rule gets its name from a hypothetical: if you tap someone lightly on the head and they die because their skull is as thin as an eggshell, you're liable for their death — not just a light tap. The rule ensures victims with vulnerabilities aren't left uncompensated just because a healthy person would have suffered less."
  },

  /* ─────────────────────────────────────────
     CONTRACTS — EASY
  ───────────────────────────────────────── */
  {
    topic: "Contracts",
    difficulty: "easy",
    rule: "A valid contract requires offer, acceptance, and consideration.",
    question: "Uncle Bob tells his niece Lisa: 'I promise to give you my car because you are my favorite niece.' Lisa does nothing in response. Later Bob changes his mind. Is there an enforceable contract?",
    choices: [
      "Yes, because Bob made a clear promise.",
      "Yes, because Lisa is a family member and family promises are binding.",
      "No, because there is no consideration — Lisa gave nothing in exchange.",
      "No, because oral contracts about cars are not enforceable."
    ],
    answer: 2,
    explanation: "Consideration is a required element of a contract — it is the bargained-for exchange. A gift promise, even if sincere, is not supported by consideration because Lisa gave nothing (no act, forbearance, or return promise) in exchange for Uncle Bob's promise. Without consideration, the promise is unenforceable as a contract. Note: the Statute of Frauds (writing requirement for car sales) is a separate issue and not the primary problem here.",
    funFact: "The 'moral obligation' doctrine is an exception in some states: if someone makes a promise to compensate another for a past benefit received, some courts will enforce it even without classic consideration. This doctrine is narrow and hotly debated among contracts scholars."
  },

  {
    topic: "Contracts",
    difficulty: "easy",
    rule: "The mirror image rule requires acceptance to match the offer exactly.",
    question: "Seller offers to sell 100 widgets for $500. Buyer responds: 'I accept, but I want delivery by Friday.' Has a contract been formed under the common law?",
    choices: [
      "Yes, because the buyer accepted the essential terms.",
      "No, because the buyer's response is a counteroffer, not an acceptance.",
      "Yes, because the delivery date is a minor term that doesn't affect the core deal.",
      "No, because offers involving goods must be in writing."
    ],
    answer: 1,
    explanation: "Under common law's mirror image rule, an acceptance must match the offer exactly. Adding a new term (delivery by Friday) makes the response a counteroffer, not an acceptance — it simultaneously rejects the original offer and proposes new terms. The original offeror (Seller) can then accept or reject the counteroffer. Note: UCC Article 2 (for goods between merchants) has a different 'battle of the forms' rule under §2-207.",
    funFact: "The mirror image rule is ancient and rigid under common law, but the UCC deliberately softened it for commercial reality. The UCC recognized that businesses routinely swap form contracts with conflicting boilerplate terms — strict mirror-image would mean almost no contracts between merchants are ever actually formed."
  },

  /* ─────────────────────────────────────────
     CONTRACTS — MEDIUM
  ───────────────────────────────────────── */
  {
    topic: "Contracts",
    difficulty: "medium",
    rule: "Under the doctrine of promissory estoppel, a promise is enforceable if the promisee reasonably and detrimentally relied on it.",
    question: "Employer tells Employee: 'When you retire, we will pay you a $1,000/month pension.' Employee relies on this, declines other job offers, and retires. The employer then refuses to pay. Employee sues. What is the strongest basis for recovery?",
    choices: [
      "Express contract, because the employer's statement was a clear promise.",
      "Implied contract, because employment creates pension obligations.",
      "Promissory estoppel, because the employee detrimentally relied on the promise.",
      "Unjust enrichment, because the employer received years of work."
    ],
    answer: 2,
    explanation: "There is no classic contract here — there was likely no consideration (the employee's existing job performance is past consideration, not bargained-for). However, promissory estoppel (Restatement §90) allows enforcement when: (1) there was a clear promise, (2) the promisor should have expected reliance, (3) the promisee actually and reasonably relied, and (4) injustice can only be avoided by enforcement. All four elements are met here. This is the classic promissory estoppel scenario.",
    funFact: "Promissory estoppel was essentially created by Williston and the first Restatement of Contracts in 1932. Before that, courts struggled to enforce pension-type promises. The doctrine allowed courts to do justice without distorting the consideration doctrine — it became one of the most litigated contract principles in the 20th century."
  },

  {
    topic: "Contracts",
    difficulty: "medium",
    rule: "Mutual mistake as to a material fact existing at the time of contracting may void a contract.",
    question: "Buyer and Seller contract for the sale of a painting both believe to be by a minor artist, for $500. Before delivery, it is discovered the painting is a lost Rembrandt worth $2 million. Seller refuses to deliver. Buyer sues for breach. What is the most likely result?",
    choices: [
      "Seller must deliver — the contract is valid and Buyer gets the windfall.",
      "The contract is voidable by Seller for mutual mistake as to the painting's identity.",
      "The contract is voidable by Buyer for mutual mistake.",
      "The contract is void for unconscionability."
    ],
    answer: 1,
    explanation: "Mutual mistake applies when both parties are mistaken about a basic assumption of fact that materially affects the contract's value. Here, both parties assumed the painting was by a minor artist — a basic assumption. The true identity of the painter is material (it changes the value by 4,000x). Under the mutual mistake doctrine (Restatement §152), the adversely affected party (Seller) can void the contract. This is the classic Sherwood v. Walker 'barren cow' scenario applied to art.",
    funFact: "Sherwood v. Walker (1887) — the original mutual mistake case — involved a cow sold for beef price because both parties thought she was barren. She turned out to be pregnant, worth ten times as much. The Michigan Supreme Court allowed rescission. The case is still taught in every first-year contracts class nearly 140 years later."
  },

  /* ─────────────────────────────────────────
     CONTRACTS — HARD
  ───────────────────────────────────────── */
  {
    topic: "Contracts",
    difficulty: "hard",
    rule: "Under the UCC, a merchant's written firm offer is irrevocable for up to 90 days without consideration.",
    question: "On June 1, Hardware Co., a merchant, sends a signed written offer to Builder stating: 'We offer to sell 500 steel beams at $200 each. This offer is firm and will remain open until September 1.' On July 15, Hardware Co. sends a written revocation. On July 20, Builder sends an acceptance. Has a contract been formed?",
    choices: [
      "No, because the revocation was sent before the acceptance.",
      "Yes, because the firm offer under UCC §2-205 was irrevocable until September 1.",
      "Yes, but only if Builder had already relied on the offer before the revocation.",
      "No, because 90-day firm offers require consideration to be binding."
    ],
    answer: 1,
    explanation: "Under UCC §2-205, a merchant's signed written offer stating it will remain open for a specified period is irrevocable for that period (max 90 days) — without consideration required. Hardware Co. is a merchant, the offer was signed and written, and the firm period (June 1 to Sept 1) is within 90 days of the offer. Therefore the July 15 revocation was ineffective. Builder's July 20 acceptance formed a valid contract. This is the key distinction from common law options, which require consideration.",
    funFact: "At common law, an option contract (making an offer irrevocable) always required consideration — even a nominal amount like $1. Courts would enforce '$1 paid, receipt acknowledged' even when the dollar was never actually paid. The UCC eliminated this formality for merchants because commercial reality demanded more flexibility."
  },

  /* ─────────────────────────────────────────
     CRIMINAL LAW — EASY
  ───────────────────────────────────────── */
  {
    topic: "Criminal Law",
    difficulty: "easy",
    rule: "Larceny requires a trespassory taking and carrying away of another's personal property with intent to permanently deprive.",
    question: "Jake takes a bicycle from a rack, rides it home, and decides to keep it. He had no permission. Jake has most likely committed:",
    choices: [
      "Robbery",
      "Burglary",
      "Larceny",
      "Embezzlement"
    ],
    answer: 2,
    explanation: "Larceny requires: (1) trespassory taking (without consent), (2) and carrying away (asportation — even slight movement counts), (3) of another's personal property, (4) with intent to permanently deprive. All four are met here. Robbery requires force or threat. Burglary requires breaking and entering a dwelling at nighttime with intent to commit a felony. Embezzlement requires lawful initial possession that is then converted — Jake never had lawful possession.",
    funFact: "The 'asportation' (carrying away) requirement for larceny was originally extremely literal — moving an object even a fraction of an inch satisfied it. Courts once debated whether picking up a bag and then dropping it before leaving the property was sufficient. Modern statutes have largely abandoned this hyper-technical requirement."
  },

  {
    topic: "Criminal Law",
    difficulty: "easy",
    rule: "Self-defense justifies reasonable force when the defendant reasonably believes they face imminent unlawful force.",
    question: "Sam reasonably believes Carl is about to punch him. Sam punches Carl first. Carl is not actually going to attack — it was a misunderstanding. Sam is charged with battery. He claims self-defense. What is the most likely outcome?",
    choices: [
      "Sam is guilty — you cannot use self-defense preemptively.",
      "Sam is not guilty — reasonable belief of imminent threat is enough for self-defense.",
      "Sam is guilty — self-defense requires the threat to be real, not just believed.",
      "Sam is not guilty only if he attempted to retreat first."
    ],
    answer: 1,
    explanation: "Self-defense is based on the defendant's reasonable belief, not on whether the threat was objectively real. If Sam reasonably believed Carl was about to attack him, he is entitled to defend himself even if that belief turns out to be mistaken. The key word is 'reasonable' — an unreasonable but sincere belief may support a reduced charge (imperfect self-defense) but not full acquittal. Here the belief is described as reasonable, so self-defense succeeds.",
    funFact: "About half of U.S. states have 'Stand Your Ground' laws, which eliminate the traditional duty to retreat before using self-defense in public spaces. Florida's 2005 law was the first modern version. Before Stand Your Ground, the old common law rule was simple: retreat if you safely can, before using deadly force outside your home."
  },

  /* ─────────────────────────────────────────
     CRIMINAL LAW — MEDIUM
  ───────────────────────────────────────── */
  {
    topic: "Criminal Law",
    difficulty: "medium",
    rule: "Felony murder imposes murder liability on all participants in a felony when a death occurs during its commission.",
    question: "Al and Beth plan a bank robbery. During the robbery, a police officer shoots and kills a bank guard by accident while trying to stop Al and Beth. Are Al and Beth guilty of felony murder?",
    choices: [
      "Yes, under most states' felony murder rules, deaths caused by third parties during a felony are attributable to the felons.",
      "No, because Al and Beth did not kill anyone themselves.",
      "No, because the killing was accidental and not in furtherance of the robbery.",
      "It depends on whether the shooting was foreseeable."
    ],
    answer: 0,
    explanation: "Most states apply the 'agency' theory of felony murder, but some apply a broader 'proximate cause' theory. Under the proximate cause theory (minority rule), any death causally resulting from the felony — even caused by a third party like police — is attributable to the felons. Under the agency theory (majority rule), felony murder applies only to killings committed by the felons or their co-conspirators. The answer in most modern states would depend on jurisdiction, but many bar exam questions test the broad proximate cause approach.",
    funFact: "The felony murder rule is one of the most controversial doctrines in criminal law. California modified it significantly in 2018-2019, restricting it so that only the actual killer, or someone who acted with intent to kill, can be convicted of felony murder. This was one of the largest criminal law reforms in California history."
  },

  {
    topic: "Criminal Law",
    difficulty: "medium",
    rule: "Attempt requires a specific intent to commit the target crime and a substantial step beyond mere preparation.",
    question: "Dan plans to rob a bank. He drives to the bank, parks, loads his gun, puts on a mask, and walks toward the entrance. He then gets scared and drives away without entering. Is Dan guilty of attempted robbery?",
    choices: [
      "No, because he never entered the bank or threatened anyone.",
      "No, because he voluntarily abandoned the plan.",
      "Yes, because he took a substantial step toward robbery.",
      "Yes, but he has a complete defense of voluntary abandonment."
    ],
    answer: 2,
    explanation: "Under the Model Penal Code, attempt requires: (1) purpose to commit the crime, and (2) a substantial step strongly corroborative of that purpose. Loading a gun, putting on a mask, and walking toward the bank are substantial steps. The voluntary abandonment defense under the MPC requires truly voluntary withdrawal — not abandonment caused by fear of getting caught. Fear-based withdrawal is not truly voluntary, so the defense fails. Dan is guilty of attempted robbery.",
    funFact: "The concept of 'attempt' as a crime was not recognized in early English common law — you had to actually commit the crime. Attempt was first recognized as an independent offense around 1784 in Rex v. Scofield. Today, attempt can carry almost the same sentence as the completed crime in many jurisdictions."
  },

  /* ─────────────────────────────────────────
     CRIMINAL LAW — HARD
  ───────────────────────────────────────── */
  {
    topic: "Criminal Law",
    difficulty: "hard",
    rule: "Under the MPC, insanity is established when a mental disease or defect causes the defendant to lack substantial capacity to appreciate criminality or conform conduct to the law.",
    question: "Victor, suffering from severe schizophrenia, kills his neighbor believing the neighbor is a demonic figure sent to destroy humanity. A psychiatrist testifies Victor knew the act was legally prohibited but was unable to stop himself due to an irresistible impulse. Under the M'Naghten test (NOT the MPC), is Victor legally insane?",
    choices: [
      "Yes, because he was unable to control his conduct.",
      "No, because he knew the act was legally prohibited.",
      "Yes, because a mental disease was the cause of the killing.",
      "No, because schizophrenia is not recognized as a legal insanity defense."
    ],
    answer: 1,
    explanation: "M'Naghten (1843) tests only cognitive capacity: the defendant is insane if, due to mental disease, they did not know the nature of the act OR did not know the act was wrong. Victor knew the act was legally prohibited — meaning he knew it was 'wrong' in the legal sense. M'Naghten does NOT include a volitional prong (inability to control). The irresistible impulse test (adopted in some jurisdictions) would potentially excuse Victor, but pure M'Naghten does not. This is a critical distinction on the bar exam.",
    funFact: "The M'Naghten case involved Daniel M'Naghten, who in 1843 killed the secretary to the British Prime Minister while trying to assassinate the PM himself, believing he was being persecuted. The House of Lords crafted the rules that bear his name. They remain the standard in about half of U.S. states today."
  },

  /* ─────────────────────────────────────────
     CONSTITUTIONAL LAW — EASY
  ───────────────────────────────────────── */
  {
    topic: "Constitutional Law",
    difficulty: "easy",
    rule: "The First Amendment prohibits government restrictions on speech based on its content unless a compelling interest is served by narrowly tailored means.",
    question: "A city ordinance prohibits all political speeches in the town square on Sundays. A speaker is arrested for giving a political speech there on Sunday. The ordinance is best challenged as:",
    choices: [
      "A valid time, place, and manner restriction.",
      "An unconstitutional content-based restriction on speech.",
      "A valid regulation of conduct, not speech.",
      "An unconstitutional prior restraint."
    ],
    answer: 1,
    explanation: "A law targeting 'political speeches' specifically regulates speech based on its content (political vs. non-political). Content-based restrictions receive strict scrutiny — the government must show a compelling interest served by narrowly tailored means, which is very hard to satisfy. A valid time, place, and manner restriction must be content-neutral, serve a significant interest, leave open ample alternative channels, and be narrowly tailored. This ordinance fails the content-neutral requirement.",
    funFact: "The town square is constitutionally considered a 'traditional public forum' — along with sidewalks and parks — where the government has the least power to restrict speech. The concept of public forum doctrine was developed by the Supreme Court beginning in 1939 in Hague v. CIO."
  },

  {
    topic: "Constitutional Law",
    difficulty: "easy",
    rule: "Under the Fourth Amendment, a warrant is generally required for searches, subject to established exceptions.",
    question: "Police stop a car for speeding. They smell marijuana. Without a warrant, they search the entire car and find drugs in a locked glove compartment. Is this search constitutional?",
    choices: [
      "No, because the police needed a warrant to search a locked compartment.",
      "Yes, because the automobile exception allows warrantless searches of cars with probable cause.",
      "No, because the smell of marijuana alone is not probable cause.",
      "Yes, because any traffic stop gives police the right to search the vehicle."
    ],
    answer: 1,
    explanation: "Under the automobile exception (Carroll v. United States, 1925), police may search a vehicle without a warrant if they have probable cause to believe it contains contraband or evidence of a crime. The smell of marijuana constitutes probable cause. This exception extends to all areas of the vehicle, including locked compartments, if probable cause supports searching there. A traffic stop alone does not justify a search — probable cause or consent is needed.",
    funFact: "The automobile exception exists largely because cars are mobile — by the time police obtained a warrant, the vehicle could be long gone. The Supreme Court also noted that people have a reduced expectation of privacy in their cars compared to their homes. This exception has grown significantly since 1925 and now applies equally to containers found in cars."
  },

  /* ─────────────────────────────────────────
     CONSTITUTIONAL LAW — MEDIUM
  ───────────────────────────────────────── */
  {
    topic: "Constitutional Law",
    difficulty: "medium",
    rule: "Congress's Commerce Clause power extends to activities that substantially affect interstate commerce.",
    question: "Congress passes a law making it a federal crime to possess a firearm within 1,000 feet of a school, arguing gun violence affects the national economy. Under Supreme Court precedent, this law is most likely:",
    choices: [
      "Constitutional, because Congress has broad power under the Commerce Clause.",
      "Unconstitutional, because gun possession near schools is not an economic activity that substantially affects interstate commerce.",
      "Constitutional, because gun manufacturers engage in interstate commerce.",
      "Unconstitutional, because only states can regulate education."
    ],
    answer: 1,
    explanation: "This is directly based on United States v. Lopez (1995), where the Supreme Court struck down the Gun-Free School Zones Act under exactly these facts. The Court held that gun possession near schools was not an economic activity, had no substantial effect on interstate commerce, contained no jurisdictional element limiting it to interstate commerce, and rested on no Congressional findings. Lopez was a landmark limit on Congress's Commerce Clause power after 60 years of expansive interpretation.",
    funFact: "Lopez was the first time since 1937 that the Supreme Court struck down a federal law for exceeding the Commerce Clause. The case was argued by then-future-Justice Elena Kagan's law professor at Harvard, Laurence Tribe — on the losing side. Many constitutional scholars saw Lopez as a revolution; others called it a one-off. United States v. Morrison (2000) confirmed it was not."
  },

  {
    topic: "Constitutional Law",
    difficulty: "medium",
    rule: "Under the Equal Protection Clause, classifications based on race receive strict scrutiny.",
    question: "A state university has an admissions policy giving automatic bonus points to applicants of a specific racial minority group to increase diversity. Under equal protection analysis, this policy:",
    choices: [
      "Is constitutional because promoting diversity is a compelling interest.",
      "Is unconstitutional because race-based quotas and automatic points systems are not narrowly tailored.",
      "Is constitutional because universities have academic freedom to design admissions.",
      "Is unconstitutional because any racial classification is automatically invalid."
    ],
    answer: 1,
    explanation: "Under Gratz v. Bollinger (2003), the Supreme Court held that an automatic point system based on race is not narrowly tailored and therefore fails strict scrutiny. While diversity in education is a compelling interest (Grutter v. Bollinger, same year), the means must be narrowly tailored — meaning race must be considered holistically as one factor, not through a mechanical point system. Note: Students for Fair Admissions v. Harvard (2023) further limited race-conscious admissions, effectively ending such programs.",
    funFact: "After the Supreme Court's 2023 decision ending race-conscious college admissions, universities scrambled to redesign processes. Justice Clarence Thomas wrote a 58-page concurrence arguing the Equal Protection Clause was always colorblind. Justice Sotomayor wrote a 68-page dissent calling it a 'tragedy.' It was one of the most anticipated decisions in years."
  },

  /* ─────────────────────────────────────────
     CONSTITUTIONAL LAW — HARD
  ───────────────────────────────────────── */
  {
    topic: "Constitutional Law",
    difficulty: "hard",
    rule: "Under the Dormant Commerce Clause, states may not discriminate against or unduly burden interstate commerce.",
    question: "State A passes a law requiring all waste generated in State A to be disposed of only in State A's own landfills, and bans importing waste from other states. Out-of-state waste disposal companies sue. The law is most likely:",
    choices: [
      "Constitutional as a valid exercise of the state's police power to protect public health.",
      "Unconstitutional as a facial discrimination against interstate commerce, subject to virtual per se invalidity.",
      "Constitutional because waste disposal is a local concern, not interstate commerce.",
      "Unconstitutional only if out-of-state companies can show discriminatory intent."
    ],
    answer: 1,
    explanation: "Under the Dormant Commerce Clause, a state law that facially discriminates against interstate commerce is virtually per se invalid. In Philadelphia v. New Jersey (1978), the Supreme Court struck down a nearly identical law. The Court held that states cannot protect their landfills from out-of-state waste — even for environmental reasons — by discriminating against out-of-state commerce. The state must use non-discriminatory means to achieve environmental goals. This is one of the clearest applications of the Dormant Commerce Clause.",
    funFact: "Philadelphia v. New Jersey produced one of Justice Rehnquist's most famous dissents: he argued that garbage, unlike typical commerce, carries real health hazards and states should be able to protect against it. The majority disagreed — but the debate over whether 'bad' items deserve less commerce clause protection has never fully gone away."
  },

  /* ─────────────────────────────────────────
     EVIDENCE — EASY
  ───────────────────────────────────────── */
  {
    topic: "Evidence",
    difficulty: "easy",
    rule: "Hearsay is an out-of-court statement offered to prove the truth of the matter asserted, and is generally inadmissible.",
    question: "In a murder trial, a witness testifies: 'I heard John say at the bar that he hated the victim and wanted to kill him.' This testimony is offered to show John had motive. Is this hearsay?",
    choices: [
      "No, because it is offered for motive, not to prove the truth of the statement.",
      "Yes, because it is an out-of-court statement offered to prove the truth of the matter asserted.",
      "No, because a party's own statements are never hearsay.",
      "Yes, but it is admissible as a present sense impression."
    ],
    answer: 0,
    explanation: "This is a classic non-hearsay use of an out-of-court statement. When a statement is not offered to prove the truth of what was said, but rather for its effect on the listener or as circumstantial evidence of the declarant's state of mind, it is not hearsay. Here, 'I hate him and want to kill him' is offered to show John's motive and state of mind — not to prove he actually killed anyone. Therefore it is not hearsay and is admissible.",
    funFact: "The hearsay rule has over 30 exceptions under the Federal Rules of Evidence — so many that critics joke hearsay is the rule that swallows itself. The 'excited utterance' exception (a statement made under the stress of a startling event) dates to ancient common law and is based on the idea that extreme stress prevents fabrication."
  },

  {
    topic: "Evidence",
    difficulty: "easy",
    rule: "Attorney-client privilege protects confidential communications between a client and their attorney made for the purpose of legal advice.",
    question: "During a business meeting, an executive tells the company's lawyer, in a room with 10 other employees: 'We need to hide these financial records.' The lawyer later is called to testify about this statement. Is it protected by attorney-client privilege?",
    choices: [
      "Yes, because it was made to an attorney.",
      "No, because the communication was not confidential — it was made in front of third parties.",
      "Yes, because legal matters between executives and lawyers are always privileged.",
      "No, because the statement was about illegal activity."
    ],
    answer: 1,
    explanation: "Attorney-client privilege requires that the communication be confidential. A statement made in front of 10 non-attorney employees destroys confidentiality. The presence of unnecessary third parties waives the privilege. Additionally, the crime-fraud exception might apply (communications made in furtherance of a crime are not privileged), but the confidentiality failure is the clearest reason privilege does not apply here.",
    funFact: "Attorney-client privilege is the oldest evidentiary privilege in common law — it dates back to Elizabethan England in the 16th century. Originally it was the attorney's privilege (to protect their honor from being compelled to betray clients); only later did it become the client's privilege to ensure open communication with lawyers."
  },

  /* ─────────────────────────────────────────
     EVIDENCE — MEDIUM
  ───────────────────────────────────────── */
  {
    topic: "Evidence",
    difficulty: "medium",
    rule: "Under FRE 404(b), prior bad acts are inadmissible to show character but may be admitted to show motive, intent, identity, plan, or absence of mistake.",
    question: "Defendant is charged with bank fraud. The prosecution seeks to introduce evidence that defendant committed similar bank fraud three years earlier. The defendant objects. The court should:",
    choices: [
      "Exclude it, because prior bad acts are never admissible in criminal trials.",
      "Admit it, if offered for a permissible purpose such as showing plan, knowledge, or absence of mistake.",
      "Admit it automatically because fraud is a crime involving dishonesty.",
      "Exclude it, because character evidence is never admissible in civil or criminal cases."
    ],
    answer: 1,
    explanation: "FRE 404(b) prohibits prior bad acts offered to prove character conformity (the person is a bad person who acted badly again). However, prior acts are admissible when offered for a specific non-character purpose: motive, intent, knowledge, identity, common plan/scheme, or absence of mistake. In a bank fraud case, prior similar fraud is strong evidence of knowledge of the fraudulent scheme and absence of mistake — highly probative and thus admissible for those specific purposes, subject to Rule 403 balancing.",
    funFact: "The character evidence prohibition is one of the most counterintuitive rules in evidence law. The public assumes past bad behavior is the most relevant thing about a defendant — courts exclude it precisely because research shows it's too persuasive, causing juries to convict based on who the person is rather than what they actually did in this case."
  },

  {
    topic: "Evidence",
    difficulty: "medium",
    rule: "The best evidence rule requires the original document when its contents are at issue.",
    question: "In a contract dispute, plaintiff wants to prove the terms of a written contract. She does not have the original and offers her own handwritten notes summarizing the contract. The defendant objects. How should the court rule?",
    choices: [
      "Overrule the objection — handwritten notes are sufficient proof of a contract.",
      "Sustain the objection — the best evidence rule requires the original document when proving its contents.",
      "Overrule the objection — the best evidence rule only applies in criminal cases.",
      "Sustain the objection — only certified copies are admissible when the original is unavailable."
    ],
    answer: 1,
    explanation: "Under FRE 1002 (the 'best evidence rule' or 'original writing rule'), when a party seeks to prove the contents of a document, the original must be produced. A party's own summary notes are not a duplicate — they are a secondary account. However, if the original is shown to be lost, destroyed, or unavailable through no fault of the proponent (FRE 1004), secondary evidence becomes admissible. The defendant must produce evidence of unavailability; without that, the notes alone are insufficient.",
    funFact: "Despite being called the 'best evidence rule,' it has nothing to do with ranking all evidence by quality. It applies narrowly to documents, recordings, and photographs when their contents are directly at issue. The name is misleading enough that the Federal Rules now officially call it the 'original writing rule.'"
  },

  /* ─────────────────────────────────────────
     EVIDENCE — HARD
  ───────────────────────────────────────── */
  {
    topic: "Evidence",
    difficulty: "hard",
    rule: "A dying declaration is admissible hearsay in homicide cases when the declarant believed death was imminent and the statement concerns the cause of death.",
    question: "Paula is shot and brought to the hospital. She tells the nurse: 'Ray shot me, I know I'm going to die.' Paula unexpectedly survives. At Ray's murder trial (Paula refuses to testify), the prosecution offers the nurse's testimony about Paula's statement. The defense objects. How should the court rule?",
    choices: [
      "Admit it as a dying declaration — the declarant's belief of imminent death is what matters, not actual death.",
      "Exclude it — dying declarations require the declarant to have actually died.",
      "Admit it as an excited utterance instead.",
      "Exclude it — the Confrontation Clause bars all testimonial hearsay when the declarant is available."
    ],
    answer: 1,
    explanation: "Under FRE 804(b)(2), a dying declaration requires: (1) declarant believed death was imminent, (2) statement concerns cause or circumstances of the believed impending death, and (3) offered in a homicide or civil case. Critically — the declarant need not actually die. However, the declarant must be unavailable (FRE 804(a)). Paula is alive and refusing to testify — this may or may not constitute 'unavailability' depending on the reason. Additionally, Crawford v. Washington (2006) bars testimonial statements unless the declarant is unavailable AND the defendant had prior opportunity to cross-examine. Paula's statement to a nurse is testimonial, she is available, and there was no prior cross-examination — so the Confrontation Clause likely bars admission.",
    funFact: "The dying declaration exception rests on a religious assumption: a person who believes they are dying would not dare meet their maker with a lie on their lips. As American society became more secular, scholars questioned this rationale — but courts kept the exception, now justified on reliability grounds (extreme stress + belief of imminent death = reduced motive to lie)."
  },

  /* ─────────────────────────────────────────
     PROPERTY — EASY
  ───────────────────────────────────────── */
  {
    topic: "Property",
    difficulty: "easy",
    rule: "A fee simple absolute is the largest estate in land, freely transferable and inheritable with no conditions.",
    question: "Anna conveys land 'to Bob and his heirs.' What estate does Bob hold?",
    choices: [
      "Life estate",
      "Fee tail",
      "Fee simple determinable",
      "Fee simple absolute"
    ],
    answer: 3,
    explanation: "The phrase 'to Bob and his heirs' is the classic language of a fee simple absolute — the largest possible ownership interest in land. Bob takes full ownership: it lasts forever, is freely alienable (can be sold), devisable (can be left by will), and descendible (passes to heirs intestate). 'And his heirs' was historically required to create fee simple; today most jurisdictions presume fee simple without it. A life estate would say 'for life'; a fee simple determinable uses durational language like 'so long as.'",
    funFact: "Under old English common law (Statute De Donis, 1285), a 'fee tail' forced land to pass to the grantee's lineal descendants forever — you couldn't sell it out of the family. Courts invented ways around it (the 'common recovery' and 'fine' procedures). Today, fee tail is abolished in almost every U.S. state; only Maine, Massachusetts, and Rhode Island still recognize it."
  },

  {
    topic: "Property",
    difficulty: "easy",
    rule: "Adverse possession allows a trespasser to acquire title after continuous, open, hostile, and actual possession for the statutory period.",
    question: "For 12 years, Neighbor builds and uses a fence that encroaches 2 feet onto Owner's land. Owner never gave permission. The statutory period for adverse possession is 10 years. Neighbor now claims title to the 2-foot strip. What is the likely result?",
    choices: [
      "Neighbor does not acquire title because building a fence is not 'actual' possession.",
      "Neighbor acquires title if the possession was open, hostile, actual, and continuous for the statutory period.",
      "Owner can eject Neighbor at any time since Neighbor never had permission.",
      "Neighbor must pay the fair market value of the land to acquire title."
    ],
    answer: 1,
    explanation: "Adverse possession requires: actual possession, open and notorious (visible to a reasonable owner), hostile (without permission), and continuous for the statutory period. A fence encroaching 2 feet satisfies all elements: it is actual physical use, clearly visible (open and notorious), without permission (hostile), and the 12-year period exceeds the 10-year statute. Neighbor has acquired title to the 2-foot strip by adverse possession. No payment is required.",
    funFact: "Adverse possession dates to English law as a statute of limitations that barred old, stale claims. It was never designed to give trespassers free land — it was meant to force owners to monitor their property and resolve disputes before evidence disappeared. Today it mostly applies to boundary disputes like this one rather than outright squatters."
  },

  /* ─────────────────────────────────────────
     PROPERTY — MEDIUM
  ───────────────────────────────────────── */
  {
    topic: "Property",
    difficulty: "medium",
    rule: "Under the Rule Against Perpetuities, an interest must vest, if at all, within a life in being plus 21 years.",
    question: "Testator devises land 'to my daughter for life, then to my daughter's first child to reach age 25.' Testator's daughter is alive and has no children. Is the gift to the first child to reach 25 valid under the classic Rule Against Perpetuities?",
    choices: [
      "Yes, because the daughter is a life in being and any child will reach 25 within 21 years of the daughter's death.",
      "No, because the child might not reach 25 until more than 21 years after the death of all lives in being.",
      "Yes, because the interest vests at birth of the first child.",
      "No, because contingent remainders are always invalid under the RAP."
    ],
    answer: 1,
    explanation: "The RAP requires that an interest must vest or fail within a life in being at the time of conveyance plus 21 years. The daughter is the relevant life in being. A child could be born to the daughter, the daughter then dies, and the child must wait until age 25 to vest. If the child was born 1 day before the daughter died, the child must live another 25 years — well beyond 21 years after the daughter's death. The interest MIGHT vest beyond lives in being + 21 years, so it violates the RAP and is void. Age contingencies over 21 are classic RAP violations.",
    funFact: "The Rule Against Perpetuities is considered the most difficult rule in property law. Professor W. Barton Leach of Harvard famously called it 'a technicality-ridden nightmare' and spent his career trying to reform it. Most states have now adopted the Uniform Statutory Rule Against Perpetuities, which replaces the common law rule with a 90-year wait-and-see period."
  },

  {
    topic: "Property",
    difficulty: "medium",
    rule: "A landlord's breach of the implied warranty of habitability allows a tenant to withhold rent, repair-and-deduct, or terminate the lease.",
    question: "Tenant rents an apartment. For three months, the heat has not worked despite written notice to Landlord. Winter temperatures drop to 10°F. Tenant withholds rent. Landlord sues for unpaid rent. In a jurisdiction recognizing the implied warranty of habitability, Tenant's best defense is:",
    choices: [
      "Constructive eviction, because the uninhabitable conditions forced her to leave.",
      "Breach of the implied warranty of habitability, allowing rent withholding as a remedy.",
      "The independent covenants doctrine, because rent and habitability are unrelated obligations.",
      "Actual eviction, because Landlord effectively removed her access to the premises."
    ],
    answer: 1,
    explanation: "The implied warranty of habitability (recognized in most states since Javins v. First National Realty Corp., 1970) requires landlords to maintain rental property in a livable condition. A broken heating system in a building where temperatures drop to 10°F is a clear breach. In jurisdictions recognizing this warranty, breach allows the tenant to withhold rent (and often pay into escrow), repair-and-deduct, or terminate. Constructive eviction would require the tenant to actually vacate; she has not. The independent covenants doctrine is the old common law rule that the warranty has replaced.",
    funFact: "Before 1970, most courts applied the old common law rule of 'independent covenants' — meaning a tenant had to pay rent even if the landlord violated every obligation. The Javins case changed this by analogizing residential leases to consumer contracts. Judge J. Skelly Wright wrote that 'urban tenants, both as a group and individually, lack the bargaining power to compel protection' — it was one of the most socially consequential property cases of the 20th century."
  },

  /* ─────────────────────────────────────────
     PROPERTY — HARD
  ───────────────────────────────────────── */
  {
    topic: "Property",
    difficulty: "hard",
    rule: "Under a race-notice recording statute, a subsequent bona fide purchaser prevails only if they record first AND take without notice of prior conveyances.",
    question: "Owner conveys Greenacre to Alice on January 1; Alice does not record. Owner then conveys the same land to Bob on February 1; Bob has actual knowledge of Alice's deed. Bob records on February 2. Alice records on February 10. Under a race-notice statute, who prevails?",
    choices: [
      "Bob prevails because he recorded first.",
      "Alice prevails because her deed was first in time.",
      "Alice prevails because Bob had actual notice of her prior conveyance and therefore is not a bona fide purchaser.",
      "Bob prevails because under race-notice, only recording order matters."
    ],
    answer: 2,
    explanation: "Under a race-notice statute, a subsequent purchaser prevails only if they BOTH (1) record before the prior grantee AND (2) take without notice of the prior conveyance. Bob recorded first (February 2 vs. February 10), satisfying the 'race' element. However, Bob had actual knowledge of Alice's prior deed — he is NOT a bona fide purchaser without notice. Because he fails the notice element, Bob cannot prevail under a race-notice statute. Alice, as the first grantee, prevails. Under a pure race statute, Bob would win; under a pure notice statute, Alice would also win. Race-notice requires both.",
    funFact: "Recording acts were created to solve a fundamental problem of property law: an unscrupulous seller could convey the same land to multiple buyers. The three types of recording statutes reflect different policy choices about who should win that dispute. Most U.S. states use race-notice; a handful use notice-only; only North Carolina still uses a pure race statute."
  },

  /* ─────────────────────────────────────────
     MORE TORTS
  ───────────────────────────────────────── */
  {
    topic: "Torts",
    difficulty: "easy",
    rule: "False imprisonment requires intentional confinement within a bounded area against the plaintiff's will.",
    question: "Store security detains a customer for 20 minutes in a back room, believing (incorrectly) she stole something. She did not steal anything. Is this false imprisonment?",
    choices: [
      "No, because the security guard acted in good faith.",
      "No, because 20 minutes is not long enough to constitute imprisonment.",
      "Yes, because she was intentionally confined against her will without justification.",
      "Yes, but only if she was physically restrained."
    ],
    answer: 2,
    explanation: "False imprisonment requires intentional confinement within a bounded area without consent or privilege. Good faith is not a defense — the confinement need not be malicious, only intentional. 20 minutes is sufficient; there is no minimum time. Physical restraint is not required — confinement can be accomplished by threats, authority, or barriers. Note that most states have a 'shopkeeper's privilege' allowing reasonable detention on reasonable suspicion — but unreasonable detention or unreasonable suspicion removes the privilege.",
    funFact: "The shopkeeper's privilege (also called the merchant's privilege) is a defense to false imprisonment claims. Under the Restatement, a merchant can detain someone for a reasonable time in a reasonable manner if there is reasonable cause to believe theft occurred. This balances two competing interests: the customer's liberty and the merchant's property rights."
  },

  {
    topic: "Torts",
    difficulty: "hard",
    rule: "Intentional infliction of emotional distress requires extreme and outrageous conduct intentionally or recklessly causing severe emotional distress.",
    question: "A debt collector calls a debtor 25 times per day for two weeks, threatens to hurt the debtor's children, and sends graphic threatening letters. The debtor suffers a documented panic disorder requiring psychiatric treatment. The debt collector argues the debtor cannot prove physical injury. Can the debtor recover for IIED?",
    choices: [
      "No, because IIED requires physical manifestation of emotional injury.",
      "Yes, because IIED does not require physical injury — severe emotional distress is sufficient.",
      "No, because debt collection activities are privileged commercial speech.",
      "Yes, but only for the phone calls, not the letters."
    ],
    answer: 1,
    explanation: "Intentional infliction of emotional distress (IIED) under the Restatement requires: (1) extreme and outrageous conduct — beyond all bounds of decency, (2) intent or recklessness as to causing distress, (3) causation, and (4) severe emotional distress. No physical injury is required — documented psychiatric treatment demonstrating severe emotional distress is sufficient. 25 calls per day plus threats to children almost certainly satisfies the 'extreme and outrageous' threshold. The debt collector's commercial purpose provides no privilege to engage in such conduct.",
    funFact: "IIED was not recognized as an independent tort until the 20th century. Courts were initially skeptical because emotional harm is difficult to verify and could open floodgates of litigation. The first Restatement (1934) treated it as a curiosity; by the Restatement Second (1965), it was firmly established. Today it is the primary tool against workplace harassment that doesn't fit traditional tort categories."
  },

  /* ─────────────────────────────────────────
     MORE CONTRACTS
  ───────────────────────────────────────── */
  {
    topic: "Contracts",
    difficulty: "hard",
    rule: "Under the UCC perfect tender rule, a buyer may reject goods that fail in any respect to conform to the contract.",
    question: "Buyer orders 500 red widgets for a holiday display. Seller ships 500 widgets that are orange, claiming they are 'close enough.' Buyer rejects the entire shipment. Seller argues the defect is minor. Under the UCC, is the rejection valid?",
    choices: [
      "No, because under the UCC, only material breaches allow rejection of goods.",
      "Yes, because the UCC's perfect tender rule allows rejection if goods fail in any respect.",
      "No, because the buyer must first give the seller a chance to cure.",
      "Yes, but buyer must pay for the goods before rejecting."
    ],
    answer: 1,
    explanation: "Under UCC §2-601, the perfect tender rule allows a buyer to reject an entire delivery if the goods or tender 'fail in any respect to conform to the contract.' Orange widgets when red were ordered is a clear non-conformity — color was material to a holiday display. The seller does have a right to cure (§2-508) if there is time remaining within the contract period, but the buyer's initial rejection is valid. The perfect tender rule is stricter than common law's 'substantial performance' standard.",
    funFact: "The UCC's perfect tender rule sounds harsh, but it's tempered by the cure provision and the installment contract exception. If there is a series of deliveries, a buyer can only reject an installment if the nonconformity 'substantially impairs the value of that installment' — a much more lenient standard. This exception swallows much of the perfect tender rule in long-term commercial relationships."
  },

  {
    topic: "Contracts",
    difficulty: "easy",
    rule: "Acceptance of an offer is effective upon dispatch (the 'mailbox rule') when using the same or similar medium as the offer.",
    question: "On Monday, Seller mails an offer to Buyer. On Wednesday, Buyer mails an acceptance. On Thursday, before Buyer's acceptance arrives, Seller mails a revocation. On Friday, both the acceptance and revocation arrive. Is there a contract?",
    choices: [
      "No, because Seller revoked before Buyer's acceptance was received.",
      "Yes, because acceptance was effective when mailed on Wednesday, before the revocation.",
      "No, because an offer can always be revoked before acceptance is received.",
      "It depends on who opened the mail first."
    ],
    answer: 1,
    explanation: "Under the mailbox rule (also called the postal acceptance rule), an acceptance is effective upon dispatch — the moment Buyer mails it. On Wednesday, when Buyer mailed the acceptance, the contract was formed. The revocation, mailed Thursday, came too late — Seller could not revoke after the contract was already formed. A revocation is effective upon receipt (not dispatch), so even if the revocation were mailed first, if acceptance is dispatched before receipt of revocation, the contract is formed.",
    funFact: "The mailbox rule dates to Adams v. Lindsell (1818) in England. Wool merchants mailed an offer that was delayed in transit; the offeree accepted by return mail before receiving the delayed offer. The court held the contract formed when the acceptance was sent. The rule is sometimes criticized as arbitrary but persists because it gives offerees certainty — you know you have a contract the moment you mail acceptance."
  },

  /* ─────────────────────────────────────────
     MORE CRIMINAL LAW
  ───────────────────────────────────────── */
  {
    topic: "Criminal Law",
    difficulty: "easy",
    rule: "Murder in the first degree typically requires premeditation and deliberation in addition to intent to kill.",
    question: "In a heated argument, Marcus picks up a lamp and strikes Victor, who dies. Marcus claims he did not plan to kill Victor. This most likely constitutes:",
    choices: [
      "First-degree murder, because the blow was intentional.",
      "Second-degree murder, if Marcus intended to kill or cause serious bodily harm but without premeditation.",
      "Voluntary manslaughter, because the killing was in the heat of passion.",
      "Involuntary manslaughter, because Marcus did not plan the killing."
    ],
    answer: 1,
    explanation: "The facts are ambiguous between second-degree murder and voluntary manslaughter. Second-degree murder covers intentional killings without premeditation/deliberation. Voluntary manslaughter applies when the defendant kills in the heat of passion upon adequate provocation (a legal standard — not just any anger). A verbal argument alone typically does not constitute adequate legal provocation for manslaughter. Without adequate provocation, an intentional killing without premeditation is second-degree murder. If provocation was legally adequate, it would be voluntary manslaughter.",
    funFact: "The distinction between first and second-degree murder often comes down to time and planning. Courts have held that premeditation can form in an instant — or conversely, that planning can take days without rising to premeditation if done in emotional turmoil. The doctrine is one of the most unpredictably applied in criminal law."
  },

  {
    topic: "Criminal Law",
    difficulty: "hard",
    rule: "Conspiracy requires an agreement between two or more persons to commit a crime, plus an overt act (in most jurisdictions).",
    question: "Alice and Bob agree to rob a bank. Alice then tells Carol about the plan; Carol agrees to drive the getaway car. Bob is arrested before any robbery occurs. Without Bob, Alice and Carol carry out the robbery. Are all three guilty of conspiracy?",
    choices: [
      "Only Alice and Carol conspired, because Bob was arrested before the robbery.",
      "All three — Alice, Bob, and Carol — are guilty of conspiracy once the multi-party agreement was formed.",
      "Only Alice conspired, because she was the one who recruited both parties.",
      "Bob is not guilty of conspiracy because he never agreed with Carol."
    ],
    answer: 1,
    explanation: "Conspiracy is complete upon agreement plus an overt act (in most jurisdictions). Alice and Bob formed a conspiracy when they agreed to rob the bank. When Carol joined, she entered into the existing conspiracy — and Alice's prior overt acts (planning, recruiting) are attributed to all conspirators. Bob's arrest does not retroactively undo his participation in the conspiracy that was already formed. Under the Pinkerton doctrine, co-conspirators are also liable for each other's substantive crimes committed in furtherance of the conspiracy.",
    funFact: "The Pinkerton doctrine — holding conspirators liable for crimes committed by their co-conspirators — was established in Pinkerton v. United States (1946). Walter Pinkerton went to prison for tax evasion crimes committed by his brother Daniel, even though Walter was in jail when Daniel committed them. The doctrine is very broad and is one reason federal prosecutors love conspiracy charges."
  },

  /* ─────────────────────────────────────────
     MORE EVIDENCE
  ───────────────────────────────────────── */
  {
    topic: "Evidence",
    difficulty: "hard",
    rule: "Under FRE 407, evidence of subsequent remedial measures is inadmissible to prove negligence but may be admitted for other purposes.",
    question: "After a customer slips and falls on a wet floor, a grocery store installs non-slip mats throughout the store. At trial, the plaintiff offers evidence of this installation to prove the floor was dangerous. The store objects. How should the court rule?",
    choices: [
      "Admit it — the remedial measures prove the store knew the floor was dangerous.",
      "Exclude it under FRE 407 — subsequent remedial measures are inadmissible to prove negligence or culpable conduct.",
      "Admit it — the store waived the objection by making the change publicly.",
      "Exclude it as irrelevant — what the store did after the accident doesn't relate to what happened before."
    ],
    answer: 1,
    explanation: "FRE 407 specifically bars evidence of subsequent remedial measures when offered to prove negligence, culpable conduct, defect, or need for warning. The policy rationale is important: we want to encourage defendants to make safety improvements without fear that doing so will be used against them. If fixing problems became evidence of prior fault, no one would fix anything. The evidence may be admitted for other purposes (ownership, control, feasibility of precautions if disputed, impeachment), but not to show negligence.",
    funFact: "The subsequent remedial measures rule is purely a matter of social policy — courts acknowledge that fixing a dangerous condition is extremely probative of prior danger. But the rule sacrifices relevance for social utility: we want dangerous conditions fixed, so we give a litigation incentive to fix them. Judges sometimes call it one of the most compelling examples of policy overriding logic in evidence law."
  },

  /* ─────────────────────────────────────────
     MORE CONSTITUTIONAL LAW
  ───────────────────────────────────────── */
  {
    topic: "Constitutional Law",
    difficulty: "hard",
    rule: "A government regulation that goes too far constitutes a taking requiring just compensation under the Fifth Amendment.",
    question: "A state environmental regulation prohibits all construction on a beachfront lot to protect the coastline. The landowner bought the lot to build a home. The regulation renders the lot economically worthless. The landowner sues for compensation. Under the Takings Clause, what is the most likely outcome?",
    choices: [
      "No taking — environmental regulations are always a valid exercise of police power without compensation.",
      "A regulatory taking requiring just compensation, because the regulation destroys all economic value.",
      "A partial taking requiring compensation only for the loss in value exceeding 50%.",
      "No taking — the landowner can still use the land for non-construction purposes."
    ],
    answer: 1,
    explanation: "In Lucas v. South Carolina Coastal Council (1992), the Supreme Court held that when a regulation deprives a landowner of ALL economically beneficial use of their land, it constitutes a per se regulatory taking requiring just compensation — unless the regulation merely enforces background principles of property and nuisance law. Here, the lot is rendered economically worthless; no economically productive use remains. This triggers the Lucas categorical rule. The government must compensate the owner.",
    funFact: "David Lucas paid $975,000 for his two beachfront lots in 1986. South Carolina passed the Beachfront Management Act in 1988, and suddenly his land was worth zero. After winning at the Supreme Court, Lucas ultimately received $1.5 million in a settlement — but the state sold the lots shortly afterward to private developers for $730,000. The regulation was then modified to allow construction."
  },

  {
    topic: "Constitutional Law",
    difficulty: "medium",
    rule: "Under the Establishment Clause, government may not sponsor or coerce religious activity.",
    question: "A public high school principal delivers a student-led, student-written prayer over the PA system before graduation. The school gave students the choice of whether to include prayer, and students voted in favor. Is this constitutional?",
    choices: [
      "Yes, because the students chose the content, not the school.",
      "Yes, because attendance at graduation is voluntary.",
      "No, because school-sponsored prayer at graduation violates the Establishment Clause even if student-initiated.",
      "No, because prayer at any government-sponsored event is per se unconstitutional."
    ],
    answer: 2,
    explanation: "In Lee v. Weisman (1992), the Supreme Court held that government-sponsored prayer at public school graduation ceremonies violates the Establishment Clause even if delivered by a student and attendance is technically voluntary. The graduation setting creates subtle coercive pressure — students face enormous social pressure to attend and cannot easily opt out. The school's supervisory role (the principal arranged the format) makes this state-sponsored religion. The 'student choice' element does not cure the Establishment Clause problem.",
    funFact: "The Supreme Court has repeatedly held school-sponsored prayer unconstitutional since Engel v. Vitale (1962), which sparked enormous controversy. Justice Hugo Black's majority opinion received death threats and generated tens of thousands of angry letters to the Court. Today, students may pray privately and form religious clubs, but school officials may not organize or lead religious activity."
  },

  /* ─────────────────────────────────────────
     MORE PROPERTY
  ───────────────────────────────────────── */
  {
    topic: "Property",
    difficulty: "medium",
    rule: "A joint tenancy requires four unities (time, title, interest, possession) and includes a right of survivorship.",
    question: "Alice and Bob own Blackacre as joint tenants. Without telling Bob, Alice conveys her interest to Carol. What does Carol hold?",
    choices: [
      "A joint tenancy interest with Bob, stepping into Alice's shoes.",
      "Nothing — Alice cannot convey a joint tenancy interest without Bob's consent.",
      "A tenancy in common with Bob, because the conveyance severed the joint tenancy.",
      "A life estate, because joint tenancy interests are not freely transferable."
    ],
    answer: 2,
    explanation: "A joint tenant may unilaterally sever the joint tenancy by conveying their interest to a third party — Alice's consent was not required. However, the conveyance destroys the unity of time and title between Carol and Bob (Carol acquired her interest at a different time and by a different instrument), severing the joint tenancy. Carol now holds as a tenant in common with Bob. Carol and Bob each have an undivided half interest, but with no right of survivorship between them.",
    funFact: "The right of survivorship in joint tenancy is sometimes called the 'poor man's will' — property automatically passes to the surviving co-owner without going through probate. Married couples frequently use joint tenancy for this reason. However, unlike a will, it cannot be overridden by a later testamentary gift — if you put property in joint tenancy, survivorship controls regardless of what your will says."
  },

  {
    topic: "Property",
    difficulty: "hard",
    rule: "An easement by implication arises when prior use of land was apparent, continuous, and reasonably necessary at the time of severance.",
    question: "Owner holds a single parcel and uses a dirt road across the back portion to access the front portion where his house is. Owner sells the back portion to Buyer, with the deed silent on any easement. Owner later claims an implied easement to continue using the dirt road. Buyer denies any easement exists. Who prevails?",
    choices: [
      "Buyer prevails — easements must be expressly stated in deeds to be enforceable.",
      "Owner prevails — an easement by implication arises from prior use that was apparent and reasonably necessary at severance.",
      "Buyer prevails — the Statute of Frauds requires all easements to be in writing.",
      "Owner prevails only if the easement is strictly necessary and no alternative access exists."
    ],
    answer: 1,
    explanation: "An easement by implication requires: (1) the dominant and servient estates were previously under common ownership, (2) there was prior use of a quasi-easement that was apparent and continuous, and (3) the easement is reasonably necessary. Here, Owner used the road across what is now Buyer's land — the use was apparent (visible dirt road), continuous, and reasonably necessary to access the house. At the moment Owner conveyed the back portion to Buyer, an easement by implication arose. 'Strictly necessary' is only required for easements by necessity, not easements by implication.",
    funFact: "The distinction between easement by implication and easement by necessity trips up many students. Necessity requires strict necessity (landlocked with no other access). Implication only requires reasonable necessity plus prior apparent use. Both are exceptions to the Statute of Frauds — they arise by operation of law rather than written instrument, because it would be unjust to trap someone without access to their own property."
  }

]; // ← end of QUESTIONS array
