/* Optional video links matched to specific cards. Public-index audit: see VIDEO_SOURCES.md. */
(() => {
  const entries = [
  {
    "id": "yingyutu-grammar-framework",
    "title": "一个视频说清整个英语语法体系（重塑你的语法认知框架）",
    "url": "https://www.bilibili.com/video/BV1r54y1m7gd",
    "creator": "英语兔",
    "platform": "B站",
    "focus": "先看主语、谓语和五种基本句型，认识一句话的骨架。",
    "knowledgeKeys": [
      "topic:basic-patterns",
      "lesson:skeleton"
    ],
    "sourceFile": "https://github.com/daluzhongcaoyao/english_learning/blob/main/README.md#L805",
    "sourceEvidence": "https://github.com/caipeishen/English-Note/blob/master/README.md#L1"
  },
  {
    "id": "capsule-nce1-questions",
    "title": "Are you a teacher?（新概念第一册第7课）",
    "url": "https://www.bilibili.com/video/BV1xa411J7jJ?p=11",
    "creator": "胶囊助学计划",
    "platform": "B站",
    "focus": "用 Are you a teacher? 这样的短句，练习一般疑问句和特殊疑问句。",
    "knowledgeKeys": [
      "lesson:questions"
    ],
    "sourceFile": "https://github.com/tangx/english-studying-roadmap/blob/e0f7f41f29f8322212cddba0c0bb080d5a9a3a6a/english/nce-notes-01/007.md#L10",
    "creatorSource": "https://github.com/tangx/english-studying-roadmap/blob/e0f7f41f29f8322212cddba0c0bb080d5a9a3a6a/README.md#L95"
  },
  {
    "id": "english-rabbit-yt-02",
    "title": "16种时态终极详解",
    "url": "https://www.youtube.com/watch?v=P5FrIGgyNSc",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "1:00:25",
    "focus": "内容较长，先对照一般、进行、完成三种状态，其余形式可稍后看。",
    "knowledgeKeys": [
      "topic:simple-tenses",
      "topic:progressive-tenses",
      "topic:perfect-tenses"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/02.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-03",
    "title": "英语\"虚拟语气\"就是这么简单（看完就懂！）",
    "url": "https://www.youtube.com/watch?v=-Skm12wNLa8",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "25:02",
    "focus": "从真实情况与假设情况的区别入手，再看 if 和 wish 的表达。",
    "knowledgeKeys": [
      "topic:conditionals",
      "lesson:unreal"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/03.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-04",
    "title": "英语从句到底怎么回事",
    "url": "https://www.youtube.com/watch?v=QiLSfgoe8ao",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "7:42",
    "focus": "先理解“用一个句子充当一个成分”，再分清主句与从句。",
    "knowledgeKeys": [
      "lesson:clause-basics"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/04.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-05",
    "title": "形容词从句（定语从句/关系从句）：英语从句中最难的？",
    "url": "https://www.youtube.com/watch?v=1XEKoM4mitg",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "17:09",
    "focus": "先认识被说明的名词，再看 who、which、that 如何连接后面的说明。",
    "knowledgeKeys": [
      "topic:relative",
      "lesson:relative-pronouns"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/05.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-06",
    "title": "主语从句（名词从句 #1）",
    "url": "https://www.youtube.com/watch?v=bAknXFvVcbk",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "8:02",
    "focus": "看一句话怎样放在主语的位置，以及为什么会用形式主语 it。",
    "knowledgeKeys": [
      "lesson:subject-clause"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/06.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-07",
    "title": "宾语从句（名词从句 #2）",
    "url": "https://www.youtube.com/watch?v=5tgSswDN7tU",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "8:41",
    "focus": "从宾语从句入门，重点看引导词和从句里的陈述语序。",
    "knowledgeKeys": [
      "topic:nominal",
      "lesson:objects"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/07.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-08",
    "title": "表语从句（名词从句 #3）",
    "url": "https://www.youtube.com/watch?v=RMQ-V1y67pY",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "3:18",
    "focus": "用简短例句理解：系动词后面的表语也可以是一整个从句。",
    "knowledgeKeys": [
      "lesson:predicative"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/08.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-09",
    "title": "同位语从句",
    "url": "https://www.youtube.com/watch?v=hPevpe3yEqc",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "3:28",
    "focus": "先认识同位语，再看名词后面怎样用从句补充具体内容。",
    "knowledgeKeys": [
      "lesson:appositive"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/09.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-11",
    "title": "时间状语（副词）从句",
    "url": "https://www.youtube.com/watch?v=bJKfKTFjk4A",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "5:55",
    "focus": "对照 before、when、after、until 等连接词，说明事情发生的时间。",
    "knowledgeKeys": [
      "lesson:time-connectors",
      "lesson:clause-adverbial-time"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/11.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-14",
    "title": "条件状语（副词）从句详解",
    "url": "https://www.youtube.com/watch?v=jwN1TQvPI9s",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "6:53",
    "focus": "先看真实条件句，再理解谈将来时从句为什么常用一般现在时。",
    "knowledgeKeys": [
      "lesson:real-if",
      "lesson:future-time"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/14.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-15",
    "title": "让步状语从句",
    "url": "https://www.youtube.com/watch?v=jJyS29kVUyo",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "3:34",
    "focus": "理解“虽然”和“即使”的不同，注意 although 不再与 but 搭配。",
    "knowledgeKeys": [
      "lesson:clause-adverbial-concession"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/15.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-17",
    "title": "原因状语（副词）从句",
    "url": "https://www.youtube.com/watch?v=L3w8GlPIID4",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "4:57",
    "focus": "从 because、since、as 入手，说清一件事发生的原因。",
    "knowledgeKeys": [
      "lesson:clause-adverbial-reason"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/17.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-18",
    "title": "目的状语（副词）从句",
    "url": "https://www.youtube.com/watch?v=UhuFOe0ZIYw",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "1:00",
    "focus": "用一分钟认识 so that 与 in order that 怎样表达“为了”。",
    "knowledgeKeys": [
      "lesson:clause-adverbial-purpose"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/18.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-19",
    "title": "结果状语从句",
    "url": "https://www.youtube.com/watch?v=UPSp9JiQSMs",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "2:34",
    "focus": "对照 so…that… 和 such…that…，理解“结果发生了什么”。",
    "knowledgeKeys": [
      "lesson:clause-adverbial-result"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/19.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-20",
    "title": "非谓语动词详解：不定式、动名词、现在分词、过去分词",
    "url": "https://www.youtube.com/watch?v=LhbZ4TAjgUo",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "38:08",
    "focus": "先分清谓语与非谓语，再按卡片主题看不定式、动名词或分词。",
    "knowledgeKeys": [
      "lesson:infinitive",
      "lesson:gerund",
      "lesson:participles"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/20.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-21",
    "title": "被动语态",
    "url": "https://www.youtube.com/watch?v=DxX_oqcWuO4",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "9:17",
    "focus": "用 be 加过去分词理解被动语态，重点看谁承受动作。",
    "knowledgeKeys": [
      "lesson:passive"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/21.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-22",
    "title": "倒装句",
    "url": "https://www.youtube.com/watch?v=dEIKsJTGby4",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "10:01",
    "focus": "先看正常语序与倒装语序的区别，再认识完全倒装和部分倒装。",
    "knowledgeKeys": [
      "lesson:inversion"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/22.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-24",
    "title": "英语介词攻略（看完就懂）",
    "url": "https://www.youtube.com/watch?v=VcZglLpFlRs",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "46:38",
    "focus": "内容较长，可先找 in、on、at 等时间与位置表达，结合例句理解。",
    "knowledgeKeys": [
      "topic:prepositions",
      "lesson:prepositions"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/24.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-27",
    "title": "主谓一致",
    "url": "https://www.youtube.com/watch?v=fDyVmf26Zn0",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "14:21",
    "focus": "先找真正的主语，再看语法一致、意义一致和就近一致。",
    "knowledgeKeys": [
      "lesson:agreement"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/27.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-28",
    "title": "英语冠词：不定冠词、定冠词与零冠词",
    "url": "https://www.youtube.com/watch?v=bYGVys2RdlY",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "18:53",
    "focus": "先分清 a/an、the 和不用冠词三种情况，注意 a/an 看发音。",
    "knowledgeKeys": [
      "topic:articles",
      "lesson:articles"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/28.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-29",
    "title": "名词：普通、专有、可数、不可数",
    "url": "https://www.youtube.com/watch?v=a4Z096wliHs",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "14:33",
    "focus": "先区分普通名词与专有名词，再认识可数、不可数和单复数。",
    "knowledgeKeys": [
      "topic:nouns",
      "lesson:noun-types"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/29.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-31",
    "title": "代词：完整家族",
    "url": "https://www.youtube.com/watch?v=Z5VjeR8iUJ4",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "20:25",
    "focus": "从 I、me、my、mine 的区别入手，再认识代词的常见类别。",
    "knowledgeKeys": [
      "topic:pronouns",
      "lesson:pronouns"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/31.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-37",
    "title": "你还搞不懂“系动词”？“系”到底啥意思？",
    "url": "https://www.youtube.com/watch?v=sEaq2KtYCDk",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "3:12",
    "focus": "用短例句理解“系动词把后面的信息连到主语上”。",
    "knowledgeKeys": [
      "lesson:verb-linking"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/37.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  },
  {
    "id": "english-rabbit-yt-39",
    "title": "句子成分 & 句子分类",
    "url": "https://www.youtube.com/watch?v=9j2ShKN-yTU",
    "creator": "英语兔",
    "platform": "YouTube",
    "duration": "4:51",
    "focus": "区分句子成分与词性，再认识主语、宾语、表语等常见位置。",
    "knowledgeKeys": [
      "topic:constituents",
      "lesson:sentence-elements"
    ],
    "sourceFile": "https://github.com/lucklyric/english-grammar-interactive/blob/8e563d950cc2a940b9261392b57a8e6dbf420aa9/data/lessons/39.json",
    "sourceRevision": "8e563d950cc2a940b9261392b57a8e6dbf420aa9"
  }
];
  const byKey = new Map(), empty = Object.freeze([]);
  for (const entry of entries) {
    Object.freeze(entry.knowledgeKeys);Object.freeze(entry);
    for (const key of entry.knowledgeKeys) {
      if (!byKey.has(key)) byKey.set(key, []);
      byKey.get(key).push(entry);
    }
  }
  for (const resources of byKey.values()) Object.freeze(resources);
  window.GRAMMAR_VIDEOS = Object.freeze({
    entries: Object.freeze(entries),
    forKey: key => byKey.get(key) || empty
  });
})();
