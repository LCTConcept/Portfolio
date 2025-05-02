export interface ExperiencePage {
  id: number;
  title?: string;
  texts?: {
    src : string;
    className?: string;
    alt?: string;
  }[];
  images?: {
    src: string;
    alt?: string;
    className?: string;
  }[];

}


/* Pages of the Experience Book :
id 1 : Introduction
id 2 : Table of Quests
id 3 : Prologue text
id 4 : Prologue image
id 5 : Part I : The guild of Business Managers
id 6 : Chapter 1 : The Academy 
id 7 : Chapter 2 : The First Assignment
id 8 : Chapter 2 : The First Assignment image
id 9 : Chapter 3 : The Assistant's Path image
id 10 : Chapter 3 : The Assistant's Path text
*/


export const experiencePages: ExperiencePage[] = [
  {
    id: 1,
    title: "",
    texts: [{
      src : `Dear reader,
      \nYou may have heard of this hero,
      \nand that’s what drew you to pick up this book. 
      \n Or perhaps you haven’t,
      \n and you were simply curious.
      \n Either way, you’re about to discover 
      \n the journey she’s been on. 
      \n The quests she faced.
      \n The experience she gained.
      \n And when you finally close this book,
      \n  you’ll know her story a little better.`,
    className: 'text-quotation'
    },
  ],
},
  {
    id: 2,
    title: "Table of Quests",
    texts: [{
      src : `Prologue - In the Taverne's Shadows\n
Part I - Guild of Business Managers\n
Chapter I - The Academy\n
Chapter II – The First Assignment\n
Chapter III – The Assistant’s Path\n
Chapter IV – The Architect of Learning\n
Chapter V – Between Two Worlds\n
Chapter VI – The Captain’s Role\n
Part II - Guild of Developers\n
Chapter VII – The New Apprenticeship\n
Chapter VIII – Awaiting the Call`, 
      className: 'text-fullpage',
    },  
  ],
  },

  {
    id: 3,
 title: `Prologue : In the Taverne's Shadows`,
    texts: [
      {
        src: `When she was younger, Léa dreamed of living many lives : a scientist, a forensic expert, a doctor, a librarian, an author…\n
Her heart wandered far, but never settled.\n
So, when she graduated at seventeen, she left her hometown behind to understand what it meant to work, to live, to choose, and found herself in a quiet tavern, tucked away in a distant town.\n
It wasn’t a quest of glory, but of self-discovery.\n
She was curious, generous, attentive... The kind of soul who made strangers feel seen.\n
Day after day, she listened. She served warmth in every mug, and gathered tales with every smile.\n
And in those ordinary moments, something awakened. A spark, a calling, the first steps toward a greater path.\n
One that would lead her to the Guild of Business Managers.`, 
        className: 'text-fullpage',  
  },
],

},
  {
    id: 4,
    images: [
      { src: "/assets/prologue_img_waitress.png", className: "prologue-img" }, 
    ]

  },
  {
    id: 5,
    title: "Part I : The Guild of Business Managers",
    texts: [
      {
        src: `"We are the kingdom’s advisors. \n
Here to analyse, interpret, and adjust." \n`
, 
        className: 'text-quotation',  
  },
  {
        src: `Initiation vows of the Guild of Business Managers\n`, 
        className: 'text-quotesource',
  
  }
],
  },
  {
    id: 6,
 title: `Chapter I : The Academy`,
    texts: [
      {
        src: `The day Léa sent her application to the Guild of Business Managers, she was nervous but determined.\n
When she was accepted, her ambition only grew bigger.\n
She filled her mind with knowledge and practice, learning new ways and mastering skills she had only heard of before.\n
In the span of two years, she proved her will as a Quest Manager.\n
She even led a quest designed to help others like her set out on their own journeys.\n
Then came the time to seek an apprenticeship.\n
What was meant to only last two moons, actually lasted longer. \n
It became her first official quest for the Guild and earned her the title of Training Quest Advisor.`
, 
        className: 'text-fullpage',  
  },
],
  },

{
  id: 7,
title: `Chapter II : The First Assignment`,
  texts: [
    {
      src: `Her letter of apprenticeship was sealed with the mark of the Chamber of Commerce.\n
There, she was entrusted with a complex yet valuable mission : to help rebuild paths for those who had lost theirs.\n
Unemployed souls. Wanderers in search of purpose. Those seeking a second chance.\n
She quickly applied all she had learned to conquer the task  : She tracked every name, charted every plan, adjusted every scroll.\n
From finance to scheduling, from contracts to attestations, she watched over more than ninety new beginnings.\n
Of course, her quest was to guide, but not just that. It was the Chamber of Commerce, after all.\n
So, within a single cycle of seasons, she launched six full training quests across different domains and filled the Chamber’s coffers with nine hundred thousand gold coins.`

, 
      className: 'text-fullpage',  
},
],
},
{
  id: 8,
  images: [
    { src: "/assets/QuestReport_CCI.png", className: "questreport-img" }, 
  ]

},

{
  id: 9,
  images: [
    { src: "/assets/QuestReport_Rectif.png", className: "questreport-img" }, 
  ]
},
{
  id: 10,
title: `Chapter III : The Assistant's Path`,
  texts: [
    {
      src: `Then the Guild assigned her to a new quest to a merchant deep within the industrial lands. There was no place for softness, guidance, or warmth.\n
Only precision, excellence and steel.\n
It was her first time as the sole Guild member there. Not for lack of recruitment, but of retention. Over the two and a half years she spent there, she saw many of her own come and go. Not everyone was fit for this cold environment.
Nonetheless, she stayed.\n
She grew thicker skin, wore it like armor. And as hard as it was, Léa knew she was stronger for it.\n
She uncovered new trades, new codes, new systems. When public tenders arose, she wrote the merchant's answers. When the moons turned, she prepared the pay scrolls. When taxes came due, she counted and delivered them.\n
\n
In time, she gained the merchant’s trust.\n
So when the Guild summoned her for her next mission, she left with no regrets. For she had walked and completed the Assistant’s path.`

, 
      className: 'text-fullpage',  
},
],
},






  //End of the map
];
