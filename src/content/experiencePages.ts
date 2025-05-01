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
    className: 'text-center'
    },
  ],
},
  {
    id: 2,
    title: "Table of Quests",
    texts: [{
      src : `Prologue - In the Taverne's Shadows\n
\n
Part I - Guild of Business Managers\n
\n
Chapter I - The Academy\n
Chapter II – The First Assignment\n
Chapter III – The Assistant’s Path\n
Chapter IV – The Architect of Learning\n
Chapter V – Between Two Worlds\n
Chapter VI – The Captain’s Role\n
\n  
Part II - Guild of Developers\n
\n
Chapter VII – The New Apprenticeship\n
Chapter VIII – Awaiting the Call`
, 
      className: 'text-center',
    },
  ],
  },
  {
    id: 3,
 title: `Prologue :  
 \n In the Taverne's Shadows`,
    texts: [
      {
        src: ``, 
        className: 'text-justify',  
  },
],
images: [
  { src: "/assets/prologue_img_waitress.png", className: "prologue-img-right" }, 
]

},
  {
    id: 4,

  

  },
  {
    id: 5,
    title: "Conclusion",
   
  },
];
