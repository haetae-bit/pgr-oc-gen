import { z } from "astro/zod";

// reference: https://ideonomy.mit.edu/essays/traits.html
export const negative = z.enum([
  "Abrasive",
  "Abrupt",
  "Agonizing",
  "Aimless",
  "Airy",
  "Aloof",
  "Amoral",
  "Angry",
  "Anxious",
  "Apathetic",
  "Arbitrary",
  "Argumentative",
  "Arrogantt",
  "Artificial",
  "Asocial",
  "Assertive",
  "Astigmatic",
  "Barbaric",
  "Bewildered",
  "Bizarre",
  "Bland",
  "Blunt",
  "Biosterous",
  "Brittle",
  "Brutal",
  "Calculating",
  "Callous",
  "Cantakerous",
  "Careless",
  "Cautious",
  "Charmless",
  "Childish",
  "Clumsy",
  "Coarse",
  "Cold",
  "Colorless",
  "Complacent",
  "Complaintive",
  "Compulsive",
  "Conceited",
  "Condemnatory",
  "Conformist",
  "Confused",
  "Contemptible",
  "Conventional",
  "Cowardly",
  "Crafty",
  "Crass",
  "Crazy",
  "Criminal",
  "Critical",
  "Crude",
  "Cruel",
  "Cynical",
  "Decadent",
  "Deceitful",
  "Delicate",
  "Demanding",
  "Dependent",
  "Desperate",
  "Destructive",
  "Devious",
  "Difficult",
  "Dirty",
  "Disconcerting",
  "Discontented",
  "Discouraging",
  "Discourteous",
  "Dishonest",
  "Disloyal",
  "Disobedient",
  "Disorderly",
  "Disorganized",
  "Disputatious",
  "Disrespectful",
  "Disruptive",
  "Dissolute",
  "Dissonant",
  "Distractible",
  "Disturbing",
  "Dogmatic",
  "Domineering",
  "Dull",
  "Easily Discouraged",
  "Egocentric",
  "Enervated",
  "Envious",
  "Erratic",
  "Escapist",
  "Excitable",
  "Expedient",
  "Extravagant",
  "Extreme",
  "Faithless",
  "False",
  "Fanatical",
  "Fanciful",
  "Fatalistic",
  "Fawning",
  "Fearful",
  "Fickle",
  "Fiery",
  "Fixed",
  "Flamboyant",
  "Foolish",
  "Forceful",
  "Forgetful",
  "Fraudulent",
  "Frightening",
  "Frivolous",
  "Gloomy",
  "Graceless",
  "Grand",
  "Greedy",
  "Grim",
  "Gullible",
  "Hateful",
  "Haughty",
  "Hedonistic",
  "Hesitant",
  "Hidebound",
  "High-handed",
  "Hostile",
  "Ignorant",
  "Imitative",
  "Impatient",
  "Impractical",
  "Imprudent",
  "Impulsive",
  "Inconsiderate",
  "Incurious",
  "Indecisive",
  "Indulgent",
  "Inert",
  "Inhibited",
  "Insecure",
  "Insensitive",
  "Insincere",
  "Insulting",
  "Intolerant",
  "Irascible",
  "Irrational",
  "Irresponsible",
  "Irritable",
  "Lazy",
  "Libidinous",
  "Loquacious",
  "Malicious",
  "Mannered",
  "Mannerless",
  "Mawkish",
  "Mealymouthed",
  "Mechanical",
  "Meddlesome",
  "Melancholic",
  "Meretricious",
  "Messy",
  "Miserable",
  "Miserly",
  "Misguided",
  "Mistaken",
  "Money-minded",
  "Monstrous",
  "Moody",
  "Morbid",
  "Muddle-headed",
  "Naive",
  "Narcissistic",
  "Narrow",
  "Narrow-minded",
  "Natty",
  "Negativistic",
  "Neglectful",
  "Neurotic",
  "Nihilistic",
  "Obnoxious",
  "Obsessive",
  "Obvious",
  "Odd",
  "Offhand",
  "One-dimensional",
  "One-sided",
  "Opinionated",
  "Opportunistic",
  "Oppressed",
  "Outrageous",
  "Overimaginative",
  "Paranoid",
  "Passive",
  "Pedantic",
  "Perverse",
  "Petty",
  "Pharissical",
  "Phlegmatic",
  "Plodding",
  "Pompous",
  "Possessive",
  "Power-hungry",
  "Predatory",
  "Prejudiced",
  "Presumptuous",
  "Pretentious",
  "Prim",
  "Procrastinating",
  "Profligate",
  "Provocative",
  "Pugnacious",
  "Puritanical",
  "Quirky",
  "Reactionary",
  "Reactive",
  "Regimental",
  "Regretful",
  "Repentant",
  "Repressed",
  "Resentful",
  "Ridiculous",
  "Rigid",
  "Ritualistic",
  "Rowdy",
  "Ruined",
  "Sadistic",
  "Sanctimonious",
  "Scheming",
  "Scornful",
  "Secretive",
  "Sedentary",
  "Selfish",
  "Self-indulgent",
  "Shallow",
  "Shortsighted",
  "Shy",
  "Silly",
  "Single-minded",
  "Sloppy",
  "Slow",
  "Sly",
  "Small-thinking",
  "Softheaded",
  "Sordid",
  "Steely",
  "Stiff",
  "Strong-willed",
  "Stupid",
  "Submissive",
  "Superficial",
  "Superstitious",
  "Suspicious",
  "Tactless",
  "Tasteless",
  "Tense",
  "Thievish",
  "Thoughtless",
  "Timid",
  "Transparent",
  "Treacherous",
  "Trendy",
  "Troublesome",
  "Unappreciative",
  "Uncaring",
  "Uncharitable",
  "Unconvincing",
  "Uncooperative",
  "Uncreative",
  "Uncritical",
  "Unctuous",
  "Undisciplined",
  "Unfriendly",
  "Ungrateful",
  "Unhealthy",
  "Unimaginative",
  "Unimpressive",
  "Unlovable",
  "Unpolished",
  "Unprincipled",
  "Unrealistic",
  "Unreflective",
  "Unreliable",
  "Unrestrained",
  "Unself-critical",
  "Unstable",
  "Vacuous",
  "Vague",
  "Venal",
  "Venomous",
  "Vindictive",
  "Vulnerable",
  "Weak",
  "Weak-willed",
  "Well-meaning",
  "Willful",
  "Wishful",
  "Zany",
]);

export const neutral = z.enum([
  "Absentminded",
  "Aggressive",
  "Ambitious",
  "Amusing",
  "Artful",
  "Ascetic",
  "Authoritarian",
  "Big-thinking",
  "Boyish",
  "Breezy",
  "Businesslike",
  "Busy",
  "Casual",
  "Crebral",
  "Chummy",
  "Circumspect",
  "Competitive",
  "Complex",
  "Confidential",
  "Conservative",
  "Contradictory",
  "Crisp",
  "Cute",
  "Deceptive",
  "Determined",
  "Dominating",
  "Dreamy",
  "Driving",
  "Droll",
  "Dry",
  "Earthy",
  "Effeminate",
  "Emotional",
  "Enigmatic",
  "Experimental",
  "Familial",
  "Folksy",
  "Formal",
  "Freewheeling",
  "Frugal",
  "Glamorous",
  "Guileless",
  "High-spirited",
  "Huried",
  "Hypnotic",
  "Iconoclastic",
  "Idiosyncratic",
  "Impassive",
  "Impersonal",
  "Impressionable",
  "Intense",
  "Invisible",
  "Irreligious",
  "Irreverent",
  "Maternal",
  "Mellow",
  "Modern",
  "Moralistic",
  "Mystical",
  "Neutral",
  "Noncommittal",
  "Noncompetitive",
  "Obedient",
  "Old-fashined",
  "Ordinary",
  "Outspoken",
  "Paternalistic",
  "Physical",
  "Placid",
  "Political",
  "Predictable",
  "Preoccupied",
  "Private",
  "Progressive",
  "Proud",
  "Pure",
  "Questioning",
  "Quiet",
  "Religious",
  "Reserved",
  "Restrained",
  "Retiring",
  "Sarcastic",
  "Self-conscious",
  "Sensual",
  "Skeptical",
  "Smooth",
  "Soft",
  "Solemn",
  "Solitary",
  "Stern",
  "Stoiid",
  "Strict",
  "Stubborn",
  "Stylish",
  "Subjective",
  "Surprising",
  "Soft",
  "Tough",
  "Unaggressive",
  "Unambitious",
  "Unceremonious",
  "Unchanging",
  "Undemanding",
  "Unfathomable",
  "Unhurried",
  "Uninhibited",
  "Unpatriotic",
  "Unpredicatable",
  "Unreligious",
  "Unsentimental",
  "Whimsical",
]);

export const positive = z.enum([
  "Accessible",
  "Active",
  "Adaptable",
  "Admirable",
  "Adventurous",
  "Agreeable",
  "Alert",
  "Allocentric",
  "Amiable",
  "Anticipative",
  "Appreciative",
  "Articulate",
  "Aspiring",
  "Athletic",
  "Attractive",
  "Balanced",
  "Benevolent",
  "Brilliant",
  "Calm",
  "Capable",
  "Captivating",
  "Caring",
  "Challenging",
  "Charismatic",
  "Charming",
  "Cheerful",
  "Clean",
  "Clear-headed",
  "Clever",
  "Colorful",
  "Companionly",
  "Compassionate",
  "Conciliatory",
  "Confident",
  "Conscientious",
  "Considerate",
  "Constant",
  "Contemplative",
  "Cooperative",
  "Courageous",
  "Courteous",
  "Creative",
  "Cultured",
  "Curious",
  "Daring",
  "Debonair",
  "Decent",
  "Decisive",
  "Dedicated",
  "Deep",
  "Dignified",
  "Directed",
  "Disciplined",
  "Discreet",
  "Dramatic",
  "Dutiful",
  "Dynamic",
  "Earnest",
  "Ebullient",
  "Educated",
  "Efficient",
  "Elegant",
  "Eloquent",
  "Empathetic",
  "Energetic",
  "Enthusiastic",
  "Esthetic",
  "Exciting",
  "Extraordinary",
  "Fair",
  "Faithful",
  "Farsighted",
  "Felicific",
  "Firm",
  "Flexible",
  "Focused",
  "Forgiving",
  "Forthright",
  "Freethinking",
  "Friendly",
  "Fun-loving",
  "Gallant",
  "Generous",
  "Gentle",
  "Genuine",
  "Good-natured",
  "Gracious",
  "Hardworking",
  "Healthy",
  "Hearty",
  "Helpful",
  "Herioc",
  "High-minded",
  "Honest",
  "Honorable",
  "Humble",
  "Humorous",
  "Idealistic",
  "Imaginative",
  "Impressive",
  "Incisive",
  "Incorruptible",
  "Independent",
  "Individualistic",
  "Innovative",
  "Inoffensive",
  "Insightful",
  "Insouciant",
  "Intelligent",
  "Intuitive",
  "Invulnerable",
  "Kind",
  "Knowledge",
  "Leaderly",
  "Leisurely",
  "Liberal",
  "Logical",
  "Lovable",
  "Loyal",
  "Lyrical",
  "Magnanimous",
  "Many-sided",
  "Masculine  (Manly)",
  "Mature",
  "Methodical",
  "Maticulous",
  "Moderate",
  "Modest",
  "Multi-leveled",
  "Neat",
  "Nonauthoritarian",
  "Objective",
  "Observant",
  "Open",
  "Optimistic",
  "Orderly",
  "Organized",
  "Original",
  "Painstaking",
  "Passionate",
  "Patient",
  "Patriotic",
  "Peaceful",
  "Perceptive",
  "Perfectionist",
  "Personable",
  "Persuasive",
  "Planful",
  "Playful",
  "Polished",
  "Popular",
  "Practical",
  "Precise",
  "Principled",
  "Profound",
  "Protean",
  "Protective",
  "Providential",
  "Prudent",
  "Punctual",
  "Pruposeful",
  "Rational",
  "Realistic",
  "Reflective",
  "Relaxed",
  "Reliable",
  "Resourceful",
  "Respectful",
  "Responsible",
  "Responsive",
  "Reverential",
  "Romantic",
  "Rustic",
  "Sage",
  "Sane",
  "Scholarly",
  "Scrupulous",
  "Secure",
  "Selfless",
  "Self-critical",
  "Self-defacing",
  "Self-denying",
  "Self-reliant",
  "Self-sufficent",
  "Sensitive",
  "Sentimental",
  "Seraphic",
  "Serious",
  "Sexy",
  "Sharing",
  "Shrewd",
  "Simple",
  "Skillful",
  "Sober",
  "Sociable",
  "Solid",
  "Sophisticated",
  "Spontaneous",
  "Sporting",
  "Stable",
  "Steadfast",
  "Steady",
  "Stoic",
  "Strong",
  "Studious",
  "Suave",
  "Subtle",
  "Sweet",
  "Sympathetic",
  "Systematic",
  "Tasteful",
  "Teacherly",
  "Thorough",
  "Tidy",
  "Tolerant",
  "Tractable",
  "Trusting",
  "Uncomplaining",
  "Understanding",
  "Undogmatic",
  "Unfoolable",
  "Upright",
  "Urbane",
  "Venturesome",
  "Vivacious",
  "Warm",
  "Well-bred",
  "Well-read",
  "Well-rounded",
  "Winning",
  "Wise",
  "Witty",
  "Youthful",
]);