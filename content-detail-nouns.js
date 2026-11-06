/* Beginner explanations with everyday example words; stable lesson/question IDs retained. */
(() => {
  const entries = [
  {
    "id": "noun-common",
    "g": "parts",
    "title": "普通名词",
    "en": "Common nouns",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "cat / book / water：一类事物的名字",
    "take": "普通名词是一类人或东西的名字，比如 cat（猫）、book（书）。它说的是类别，不是像 Tom 这样取的专门名字。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "普通名词是一类人或东西的名字，比如 cat（猫）、book（书）。它说的是类别，不是像 Tom 这样取的专门名字。"
      },
      {
        "h": "和专有名词比一比",
        "t": "boy 是“男孩”这一类人的名字。Tom 是一个人的名字。boy 是普通名词，Tom 是专有名词。"
      },
      {
        "h": "再看能不能数",
        "t": "a book 是一本书，two books 是两本书。water 是水，通常不直接说 two waters；可以说 two cups of water（两杯水）。"
      },
      {
        "h": "再往下分四类",
        "t": "普通名词还可以按意思分成个体、集体、物质、抽象四类。点击下一级，用小例子分别认识它们。"
      }
    ],
    "examples": [
      {
        "en": "I have a cat.",
        "zh": "我有一只猫。",
        "note": "cat 是“猫”这一类动物的名字；a cat 表示一只猫。"
      },
      {
        "en": "Milk is good.",
        "zh": "牛奶很好。",
        "note": "milk 是奶的名字。它也是普通名词，但通常不直接按“一、二”来数。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "普通名词判断：哪一项是类别名称，而非专有名称？",
        "options": [
          "London",
          "Monday",
          "teacher",
          "China"
        ],
        "answer": 2,
        "why": "teacher 表示教师这一类人，是普通名词；其余各项在这里是特定地点或日期的名称。",
        "id": "noun-common-0"
      },
      {
        "type": "fill",
        "prompt": "Several ____ (student) are waiting outside.",
        "answer": [
          "students"
        ],
        "why": "several 后接可数名词复数；student 在这里表示多个学生个体。",
        "id": "noun-common-1"
      },
      {
        "type": "mc",
        "prompt": "关于普通名词，正确的是：",
        "options": [
          "所有普通名词都必须用复数",
          "普通名词既可能可数，也可能不可数",
          "普通名词只能表示能看见的物体",
          "the city 因有 the 就变成专有名词"
        ],
        "answer": 1,
        "why": "普通/专有讨论命名方式，可数/不可数讨论当前用法能否计数，两种分类不能混同。",
        "id": "noun-common-2"
      }
    ],
    "related": [
      "noun-proper",
      "noun-individual",
      "noun-collective",
      "noun-material",
      "noun-abstract"
    ],
    "classification": [
      "个体名词",
      "集体名词",
      "物质名词",
      "抽象名词"
    ],
    "pitfalls": [
      {
        "title": "一个老师要说 a teacher",
        "wrong": "She is teacher.",
        "right": "She is a teacher.",
        "text": "teacher 表示一位老师。这里要在前面加 a。"
      },
      {
        "title": "两个孩子要换成复数",
        "wrong": "Two child are here.",
        "right": "Two children are here.",
        "text": "这里说两个孩子。child 的复数是 children。"
      }
    ],
    "advanced": false
  },
  {
    "id": "noun-proper",
    "g": "parts",
    "title": "专有名词",
    "en": "Proper nouns",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "Tom / China / Monday：专门的名字",
    "take": "专有名词是某个人、地方等的专门名字。Tom 是人名，China 是国家名。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "专有名词是某个人、地方等的专门名字。Tom 是人名，China 是国家名。"
      },
      {
        "h": "先认名字",
        "t": "girl 是“女孩”，没有说是哪一位。Ann 是一个女孩的名字。girl 是普通名词，Ann 是专有名词。"
      },
      {
        "h": "名字通常要大写",
        "t": "Tom、China、Monday 的首字母要大写。普通名词放在句首也要大写，所以不能只看大写就判断它一定是名字。"
      },
      {
        "h": "有些名字要连着 the 记",
        "t": "通常说 China，不说 the China。有些名字本身习惯带 the，如 the United States（美国）。先把名字和它的写法一起记住。"
      }
    ],
    "examples": [
      {
        "en": "Tom is my friend.",
        "zh": "汤姆是我的朋友。",
        "note": "Tom 是人名，首字母大写；friend 的意思是朋友。"
      },
      {
        "en": "I live in China.",
        "zh": "我住在中国。",
        "note": "China 是国家名，C 要大写；这里前面不加 the。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "专有名词与冠词：哪一组普通用法自然？",
        "options": [
          "the London / China",
          "London / the United States",
          "a China / the Anna",
          "the Tuesday / a Asia"
        ],
        "answer": 1,
        "why": "London 通常不用冠词，the United States 的名称通常带 the；应按名称惯例区分。",
        "id": "noun-proper-0"
      },
      {
        "type": "fill",
        "prompt": "英国城市 london 的标准拼写应为 ____。（注意大小写）",
        "answer": [
          "London"
        ],
        "why": "城市专有名称 London 的首字母要大写。",
        "caseSensitive": true,
        "id": "noun-proper-1"
      },
      {
        "type": "mc",
        "prompt": "专有名词的合理理解是：",
        "options": [
          "永远不能带冠词",
          "所有大写词都是专有名词",
          "通常按名称惯例书写，特殊语境也可能带限定或复数",
          "所有国家名都必须加 the"
        ],
        "answer": 2,
        "why": "专有名词通常按固定名称使用，但 a Mr Brown、the Smiths 等具体结构有其意义和条件。",
        "id": "noun-proper-2"
      }
    ],
    "related": [
      "noun-common",
      "articles",
      "noun-countability-shifts"
    ],
    "classification": [
      "人名",
      "地名",
      "月份与星期",
      "带 the 的名字"
    ],
    "pitfalls": [
      {
        "title": "人名要大写",
        "wrong": "I like tom.",
        "right": "I like Tom.",
        "text": "这里的 Tom 是一个人的名字，T 要大写。"
      },
      {
        "title": "普通说法里不加 the",
        "wrong": "I live in the China.",
        "right": "I live in China.",
        "text": "这里直接说国家名 China，不加 the。"
      }
    ],
    "advanced": false,
    "extraUsage": [
      {
        "h": "再了解一点：名字也有特殊说法",
        "t": "the Smiths 常指史密斯一家。a Mr Brown 可以指一位叫布朗的人。这些是特定说法，初学时先认识常见名字就好。",
        "advanced": true
      }
    ]
  },
  {
    "id": "noun-individual",
    "g": "parts",
    "title": "个体名词",
    "en": "Individual nouns",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "a cat → two cats",
    "take": "个体名词用来表示一个个的人、动物或物品。比如 boy（男孩）、cat（猫）、book（书）。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "个体名词用来表示一个个的人、动物或物品。比如 boy（男孩）、cat（猫）、book（书）。"
      },
      {
        "h": "先看一个完整的个体",
        "t": "a cat 是一只猫，a book 是一本书。我们可以把它们当作一个个单位来数。"
      },
      {
        "h": "一个和多个用不同形式",
        "t": "一个常用 a book。两个以上通常用复数，如 two books。大多数名词在后面加 s，但有些要另外记。"
      },
      {
        "h": "和集体名词比一比",
        "t": "player 是一位球员，team 是一支队伍。team 说的是由多个人组成的一队；two teams 也可以数两支队伍。"
      }
    ],
    "examples": [
      {
        "en": "I see two dogs.",
        "zh": "我看见两只狗。",
        "note": "dog 是狗；两只要说 two dogs。"
      },
      {
        "en": "A boy opens the door.",
        "zh": "一个男孩打开门。",
        "note": "boy 表示一位男孩；door 表示一扇门。它们都能一个个数。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "传统名词分类中，哪一个最直接表示个体而非群体或物质？",
        "options": [
          "team",
          "water",
          "chair",
          "courage"
        ],
        "answer": 2,
        "why": "chair 表示一件可辨识的物体；team 表群体，water 表物质，courage 表抽象品质。",
        "id": "noun-individual-0"
      },
      {
        "type": "fill",
        "prompt": "There are two ____ (box) beside the door.",
        "answer": [
          "boxes"
        ],
        "why": "box 的规则复数为 boxes，two 表示两个可数单位。",
        "id": "noun-individual-1"
      },
      {
        "type": "mc",
        "prompt": "player 和 team 的区别，最准确的是：",
        "options": [
          "player 是个体名称，team 是群体名称；team 也能计数",
          "只有 player 能带 a",
          "team 一定是不可数名词",
          "team 永远只能配复数谓语"
        ],
        "answer": 0,
        "why": "个体/集体是意义分类；a team、two teams 都是正常的可数用法，谓语还要结合结构和意义。",
        "id": "noun-individual-2"
      }
    ],
    "related": [
      "noun-collective",
      "noun-countable-specific",
      "noun-plural-irregular"
    ],
    "classification": [
      "人",
      "动物",
      "一个个物品",
      "单位与数量"
    ],
    "pitfalls": [
      {
        "title": "一个普通名词前要有合适的词",
        "wrong": "I have cat.",
        "right": "I have a cat.",
        "text": "这里说一只猫，用 a cat。"
      },
      {
        "title": "两个以上通常要用复数",
        "wrong": "She has two dog.",
        "right": "She has two dogs.",
        "text": "two 表示两个，dog 要变成 dogs。"
      }
    ],
    "advanced": false
  },
  {
    "id": "noun-collective",
    "g": "parts",
    "title": "集体名词",
    "en": "Collective nouns",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "a team：一支队；two teams：两支队",
    "take": "集体名词用一个词来表示一群人或动物。比如 family（家庭）、team（队伍）。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "集体名词用一个词来表示一群人或动物。比如 family（家庭）、team（队伍）。"
      },
      {
        "h": "一个词表示一个群体",
        "t": "one player 是一个球员，one team 是一支队伍。队里虽然有很多人，team 仍可以表示“一支队”。"
      },
      {
        "h": "先学把它当作一个整体",
        "t": "Our team is small. 是“我们的队很小”。这里把整支队当成一个整体，用 is。two teams 则是两支队。"
      },
      {
        "h": "再了解一点：强调队员时",
        "t": "想说队员们各自做什么，可以直接写 team members（队员们）。英式英语也常让单数 team 配复数动词来强调成员；美式英语更常把 team 当整体。"
      }
    ],
    "examples": [
      {
        "en": "Our team is small.",
        "zh": "我们的队很小。",
        "note": "team 是队伍。这里说整支队，所以用 is。"
      },
      {
        "en": "The team members are here.",
        "zh": "队员们在这里。",
        "note": "members 是成员。这里明确说多位成员，所以用 are。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "team 的集体名词用法，哪项说明合理？",
        "options": [
          "team 永远没有复数形式",
          "a team 与 two teams 都可用，谓语还受整体/成员视角影响",
          "team 只能指两个人",
          "team 的所有用法都与 cattle 相同"
        ],
        "answer": 1,
        "why": "team 可以作为群体单位计数；谓语选择还需结合意义、语域与英美习惯。",
        "id": "noun-collective-0"
      },
      {
        "type": "fill",
        "prompt": "We saw a flock of ____ (sheep) near the river.",
        "answer": [
          "sheep"
        ],
        "why": "sheep 的单复数形式相同；flock 表一群，of 后表示组成群体的羊。",
        "id": "noun-collective-1"
      },
      {
        "type": "mc",
        "prompt": "若想明确表达“每位队员分别检查自己的装备”，最清楚的主语是：",
        "options": [
          "The team members",
          "A furniture",
          "The informations",
          "An advice"
        ],
        "answer": 0,
        "why": "the team members 直接把各个成员作为复数主语，比单独 team 更明确地突出成员视角。",
        "id": "noun-collective-2"
      }
    ],
    "related": [
      "agreement-meaning",
      "agreement",
      "noun-plural-irregular"
    ],
    "classification": [
      "可数群体：team / family",
      "整体或成员视角",
      "常用集合短语",
      "police / cattle 等特殊复数词"
    ],
    "pitfalls": [
      {
        "title": "police 通常配复数动词",
        "wrong": "The police is here.",
        "right": "The police are here.",
        "text": "police 表示警察，通常用 are。不要把所有表示群体的词都套成同一种形式。"
      },
      {
        "title": "两支队伍要用 teams",
        "wrong": "Two team are here.",
        "right": "Two teams are here.",
        "text": "一支队是 a team，两支队是 two teams。"
      }
    ],
    "advanced": true,
    "extraUsage": [
      {
        "h": "再了解一点：不是所有集合词都一样",
        "t": "police（警察）通常配 are；cattle（牛群）通常不加复数 s。它们不能全部照搬 a team、two teams 的形式。",
        "advanced": true
      }
    ]
  },
  {
    "id": "noun-material",
    "g": "parts",
    "title": "物质名词",
    "en": "Material nouns",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "water / rice；a cup of water",
    "take": "物质名词表示水、米、木头等材料或物质。它们通常不用“一、二”直接数。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "物质名词表示水、米、木头等材料或物质。它们通常不用“一、二”直接数。"
      },
      {
        "h": "先看“物质”的意思",
        "t": "water 是水，rice 是米。我们通常说一些水、一些米，不直接用英语说 two water、three rice 来数。"
      },
      {
        "h": "用杯、碗等单位来数",
        "t": "a cup of water 是一杯水。two cups of water 是两杯水。变成复数的是 cup，不是 water。"
      },
      {
        "h": "再了解一点：意思会变",
        "t": "glass 可以指玻璃，也可以指玻璃杯。表示一个杯子时可以说 a glass。点餐时 two coffees 也常表示两杯咖啡。"
      }
    ],
    "examples": [
      {
        "en": "I drink water.",
        "zh": "我喝水。",
        "note": "water 是水。这里不说一份饮品，前面不加 a。"
      },
      {
        "en": "I need some rice.",
        "zh": "我需要一些米。",
        "note": "rice 是米。some rice 表示一些米，不用把 rice 加 s。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "物质名词的数量表达中，哪项自然？",
        "options": [
          "three rices",
          "two bottles of water",
          "an gold",
          "many breads（普通面包材料意义）"
        ],
        "answer": 1,
        "why": "bottles 提供可数容器单位，water 保持不可数的物质意义。",
        "id": "noun-material-0"
      },
      {
        "type": "fill",
        "prompt": "There are three ____ (bottle) of water in the bag.",
        "answer": [
          "bottles"
        ],
        "why": "three 对单位 bottle 计数，因此 bottle 用复数 bottles。",
        "id": "noun-material-1"
      },
      {
        "type": "mc",
        "prompt": "two coffees 在点单语境中通常表示：",
        "options": [
          "coffee 永远不可数，因此一定错",
          "两份咖啡",
          "两个咖啡分子",
          "只能表示两个咖啡国家"
        ],
        "answer": 1,
        "why": "咖啡在点单语境中可按份量计数，这不等于其所有用法都变为可数。",
        "id": "noun-material-2"
      }
    ],
    "related": [
      "noun-uncountable-specific",
      "noun-countability-shifts",
      "quantifiers"
    ],
    "classification": [
      "液体与气体",
      "材料与食物",
      "单位计量",
      "份量或种类的可数转换"
    ],
    "pitfalls": [
      {
        "title": "两个杯子，cup 要加 s",
        "wrong": "We need two cup of water.",
        "right": "We need two cups of water.",
        "text": "这里数的是两只杯子，所以 cup 变成 cups。"
      },
      {
        "title": "说两碗米饭时要写出单位",
        "wrong": "I eat two rices for lunch.",
        "right": "I eat two bowls of rice for lunch.",
        "text": "这里想说两碗米饭，用 bowls（碗）来数；rice 不变。"
      }
    ],
    "advanced": true,
    "extraUsage": [
      {
        "h": "再了解一点：同一个词可以换意思",
        "t": "paper 说纸这种材料时通常不可数；a paper 可以说一篇文章。是否加 a、是否用复数，要跟着当前的意思判断。",
        "advanced": true
      }
    ]
  },
  {
    "id": "noun-abstract",
    "g": "parts",
    "title": "抽象名词",
    "en": "Abstract nouns",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "love / help / idea：感情、想法等",
    "take": "抽象名词表示想法、感情、状态等。比如 love（爱）、help（帮助）、idea（想法）。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "抽象名词表示想法、感情、状态等。比如 love（爱）、help（帮助）、idea（想法）。"
      },
      {
        "h": "不是一个能拿在手里的物品",
        "t": "book 是一本书，可以拿起来。love 表示爱，idea 表示想法；它们是在说感情或想法。"
      },
      {
        "h": "抽象不等于不能数",
        "t": "idea 可以说 one idea、two ideas。advice（建议）通常不能直接这样数，要说 a piece of advice（一条建议）。"
      },
      {
        "h": "再了解一点：看当前意思",
        "t": "experience 表示经验时通常不能直接数；an experience 表示一次经历时可以数。先看这句话到底想表达什么。"
      }
    ],
    "examples": [
      {
        "en": "Love is important.",
        "zh": "爱很重要。",
        "note": "love 表示爱；important 是重要的。这里把 love 当作一个整体来说，用 is。"
      },
      {
        "en": "Her idea is good.",
        "zh": "她的想法很好。",
        "note": "idea 表示一个想法，可以数；两个想法是 two ideas。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "哪一项在本义上表示抽象品质？",
        "options": [
          "courage",
          "wood",
          "chair",
          "Paris"
        ],
        "answer": 0,
        "why": "courage 表示勇气这种品质；wood 为物质，chair 为物体，Paris 为专有地点名称。",
        "id": "noun-abstract-0"
      },
      {
        "type": "fill",
        "prompt": "She has two years of ____ (experience).（指工作经验）",
        "answer": [
          "experience"
        ],
        "why": "这里表示积累的经验，experience 采用不可数用法，不加复数 -s。",
        "id": "noun-abstract-1"
      },
      {
        "type": "mc",
        "prompt": "an unforgettable experience 中 experience 的意思是：",
        "options": [
          "一次难忘的经历",
          "无限量的工作经验",
          "一件玻璃制品",
          "只有拼写错误才能如此使用"
        ],
        "answer": 0,
        "why": "experience 在“一次经历”的意义下可以作可数名词；不能把抽象名词一律规定为不可数。",
        "id": "noun-abstract-2"
      }
    ],
    "related": [
      "noun-concrete",
      "noun-countability-shifts",
      "noun-uncountable-specific"
    ],
    "classification": [
      "感情：love",
      "想法：idea",
      "状态与关系",
      "有些可以数"
    ],
    "pitfalls": [
      {
        "title": "一般建议不用 an advice",
        "wrong": "I need an advice.",
        "right": "I need some advice.",
        "text": "这里说需要一些建议，用 some advice。也可以说 a piece of advice（一条建议）。"
      },
      {
        "title": "多个想法配 are",
        "wrong": "Her ideas is good.",
        "right": "Her ideas are good.",
        "text": "ideas 表示多个想法，所以用 are。"
      }
    ],
    "advanced": true
  },
  {
    "id": "noun-concrete",
    "g": "parts",
    "title": "具体名词与抽象名词的交叉",
    "en": "Concrete and abstract meanings",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "cat / table / bell：具体的对象",
    "take": "具体名词常指能看见、摸到，或用感官感受到的对象。比如 cat（猫）、table（桌子）、bell（铃）。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "具体名词常指能看见、摸到，或用感官感受到的对象。比如 cat（猫）、table（桌子）、bell（铃）。"
      },
      {
        "h": "先从身边的东西认识它",
        "t": "a cat 是一只猫，a table 是一张桌子。它们都可以指向现实中的具体对象。"
      },
      {
        "h": "和抽象名词放在一起比较",
        "t": "book 表示书这个物品。love 表示爱这种感情。前者是具体名词，后者是抽象名词。"
      },
      {
        "h": "具体也不等于一定可数",
        "t": "book 可以说 two books。water 也是具体的物质，但通常说 some water，不直接数 two water。"
      }
    ],
    "examples": [
      {
        "en": "The dog is on the bed.",
        "zh": "狗在床上。",
        "note": "dog 是狗，bed 是床，都是具体的对象。"
      },
      {
        "en": "I hear a bell.",
        "zh": "我听见铃声。",
        "note": "bell 是铃。这里的 a bell 表示一个发出声音的具体对象。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "具体与可数的关系，哪项正确？",
        "options": [
          "具体名词全部可数",
          "water 可表示具体物质，但常用不可数形式",
          "抽象名词永远不能带 a",
          "一个词只能属于一种分类"
        ],
        "answer": 1,
        "why": "具体/抽象观察意义，可数/不可数观察当前用法能否按单位计数，应分开判断。",
        "id": "noun-concrete-0"
      },
      {
        "type": "fill",
        "prompt": "a book 中 book 表示一种类别名称，因此按命名方式属于____名词。",
        "answer": [
          "普通"
        ],
        "why": "book 不是某本书的专有名称；按命名方式属于普通名词，同时还可属于个体、具体、可数等类别。",
        "id": "noun-concrete-1"
      },
      {
        "type": "mc",
        "prompt": "book 在 a book 中可同时被描述为：",
        "options": [
          "普通、个体、具体、可数",
          "专有、物质、不可数",
          "只能是具体，不能再分类",
          "只能是可数，不再属于词性"
        ],
        "answer": 0,
        "why": "这些标签从命名、意义类型、感知意义和计数方式四个角度描述同一用法，并不互相排斥。",
        "id": "noun-concrete-2"
      }
    ],
    "related": [
      "noun-common",
      "noun-abstract",
      "countable"
    ],
    "classification": [
      "具体实体",
      "物质也是具体意义",
      "抽象概念",
      "多个分类角度交叉"
    ],
    "pitfalls": [
      {
        "title": "一张桌子配 is",
        "wrong": "The table are small.",
        "right": "The table is small.",
        "text": "table 在这里是一张桌子，用 is。"
      },
      {
        "title": "两把椅子要用复数",
        "wrong": "She has two chair.",
        "right": "She has two chairs.",
        "text": "chair 是椅子。two 后面用 chairs。"
      }
    ],
    "advanced": false
  },
  {
    "id": "noun-countable-specific",
    "g": "parts",
    "title": "可数名词的单数与复数搭配",
    "en": "Countable noun patterns",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "a book / one book / two books",
    "take": "可数名词能用英语说一个、两个等。比如 one book（一本书）、two books（两本书）。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "可数名词能用英语说一个、两个等。比如 one book（一本书）、two books（两本书）。"
      },
      {
        "h": "先看一个怎么说",
        "t": "a book 或 one book 都表示一本书。普通单数可数名词通常不能单独放着，要有 a、my、this 等词。"
      },
      {
        "h": "两个以上通常改成复数",
        "t": "two books 是两本书，three cats 是三只猫。多数名词后面加 s，但 child 要变成 children。"
      },
      {
        "h": "看句子里是哪一种意思",
        "t": "glass 表示杯子时可数，表示玻璃材料时通常不可数。不要只记住“这个词永远可数”。"
      }
    ],
    "examples": [
      {
        "en": "I have one book.",
        "zh": "我有一本书。",
        "note": "one 后面用单数 book。"
      },
      {
        "en": "She has two books.",
        "zh": "她有两本书。",
        "note": "two 后面用复数 books。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "可数名词的限定搭配，哪项正确？",
        "options": [
          "a books",
          "these book",
          "many books",
          "three book"
        ],
        "answer": 2,
        "why": "many 与可数复数 books 配合；a 要接单数，these 和 three 在此也要接复数。",
        "id": "noun-countable-specific-0"
      },
      {
        "type": "fill",
        "prompt": "Two ____ (box) are on the desk.",
        "answer": [
          "boxes"
        ],
        "why": "two 表多个可数单位；box 的复数为 boxes。",
        "id": "noun-countable-specific-1"
      },
      {
        "type": "mc",
        "prompt": "The label on the bottles is clear. 的单数谓语主要由谁决定？",
        "options": [
          "label",
          "bottles",
          "on",
          "clear"
        ],
        "answer": 0,
        "why": "主语中心是单数 label，on the bottles 是修饰部分，不使外层主语变为复数。",
        "id": "noun-countable-specific-2"
      }
    ],
    "related": [
      "noun-plural-regular",
      "noun-plural-irregular",
      "articles",
      "agreement"
    ],
    "classification": [
      "单数单位",
      "多个单位",
      "泛指与特指",
      "中心词的数"
    ],
    "pitfalls": [
      {
        "title": "a 后面不直接用复数",
        "wrong": "I have a books.",
        "right": "I have a book.",
        "text": "a 在这里表示一本，后面用 book。"
      },
      {
        "title": "two 后面用复数",
        "wrong": "She has two dog.",
        "right": "She has two dogs.",
        "text": "two 表示两只，后面用 dogs。"
      }
    ],
    "advanced": false
  },
  {
    "id": "noun-uncountable-specific",
    "g": "parts",
    "title": "不可数名词与单位表达",
    "en": "Uncountable nouns and measures",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "some water / two cups of water",
    "take": "不可数名词通常不直接用英语说一个、两个。比如 milk（奶）、water（水）；可以借助杯、瓶等单位来数。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "不可数名词通常不直接用英语说一个、两个。比如 milk（奶）、water（水）；可以借助杯、瓶等单位来数。"
      },
      {
        "h": "通常不直接加 a 或数字",
        "t": "一般说 some milk（一些奶），不把 milk 直接当成一个个东西来数。是否可数要按英语的习惯学，不能只按中文判断。"
      },
      {
        "h": "想说多少，就加单位",
        "t": "a cup of water 是一杯水。two cups of water 是两杯水。这里 cup 变成 cups，water 不变。"
      },
      {
        "h": "把它当整体时通常用 is",
        "t": "The milk is cold. 是“奶是凉的”。普通不可数用法一般配 is，不配 are。特殊的种类、份数用法以后再单独认识。"
      }
    ],
    "examples": [
      {
        "en": "I drink milk.",
        "zh": "我喝奶。",
        "note": "milk 表示奶，这里不加 a，也不加 s。"
      },
      {
        "en": "We need two cups of water.",
        "zh": "我们需要两杯水。",
        "note": "cups 是杯子，可以数；water 仍写原来的形式。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "不可数名词普通用法中，哪项自然？",
        "options": [
          "an information",
          "many advices",
          "some useful advice",
          "three furnitures"
        ],
        "answer": 2,
        "why": "advice 在这里不可数，some useful advice 自然；需要计数时可说 pieces of advice。",
        "id": "noun-uncountable-specific-0"
      },
      {
        "type": "fill",
        "prompt": "She offered two ____ (piece) of advice.",
        "answer": [
          "pieces"
        ],
        "why": "two 对单位 piece 计数，因此单位用复数 pieces，advice 保持不可数形式。",
        "id": "noun-uncountable-specific-1"
      },
      {
        "type": "mc",
        "prompt": "The news ____ surprising.（普通“消息”用法）",
        "options": [
          "are",
          "is",
          "have",
          "be"
        ],
        "answer": 1,
        "why": "news 虽以 s 结尾，在这里通常按不可数单数处理，所以用 is。",
        "id": "noun-uncountable-specific-2"
      }
    ],
    "related": [
      "noun-material",
      "noun-abstract",
      "quantifiers",
      "agreement"
    ],
    "classification": [
      "常见不可数意义",
      "计量单位",
      "单数谓语",
      "限制范围不等于改为可数"
    ],
    "pitfalls": [
      {
        "title": "普通奶的用法配 is",
        "wrong": "The milk are cold.",
        "right": "The milk is cold.",
        "text": "这里把奶当作一个整体，用 is。"
      },
      {
        "title": "多个杯子变化的是 cup",
        "wrong": "I need two cup of water.",
        "right": "I need two cups of water.",
        "text": "two 后要用复数 cups；water 不加 s。"
      }
    ],
    "advanced": false
  },
  {
    "id": "noun-countability-shifts",
    "g": "parts",
    "title": "同一名词的可数性转换",
    "en": "Countability and changes of meaning",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "chicken：鸡肉；a chicken：一只鸡",
    "take": "同一个词，意思变了，可数用法也可能变。chicken 可以说鸡肉，也可以说一只鸡。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "同一个词，意思变了，可数用法也可能变。chicken 可以说鸡肉，也可以说一只鸡。"
      },
      {
        "h": "先问这句话说的是什么",
        "t": "I eat chicken. 中 chicken 通常说鸡肉。a chicken 则是一只鸡。先弄清意思，再决定怎么数。"
      },
      {
        "h": "再看需要哪种形式",
        "t": "two chickens 是两只鸡。some chicken 是一些鸡肉。同样的词，前面的词和后面的 s 会帮助我们看懂意思。"
      },
      {
        "h": "再认识一个例子",
        "t": "glass 表示玻璃材料；a glass 表示一个玻璃杯。点餐时 a coffee 也可以表示一杯咖啡，但不是每个不可数词都能随意这样用。"
      }
    ],
    "examples": [
      {
        "en": "I eat chicken for lunch.",
        "zh": "我午饭吃鸡肉。",
        "note": "这里说食物鸡肉，用 chicken，不加 a 或 s。"
      },
      {
        "en": "Two chickens are in the yard.",
        "zh": "院子里有两只鸡。",
        "note": "这里说两只活鸡，所以用 chickens；yard 是院子。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "比较 a chicken 与 some chicken（鸡肉），正确的是：",
        "options": [
          "前者通常指一只鸡，后者可指鸡肉",
          "两者都只能指一只鸡",
          "chicken 永远不能出现复数",
          "加 some 就一定错误"
        ],
        "answer": 0,
        "why": "同一拼写在动物和肉的意义下有不同计数方式。",
        "id": "noun-countability-shifts-0"
      },
      {
        "type": "fill",
        "prompt": "For lunch, we ate some ____ (chicken).（指鸡肉）",
        "answer": [
          "chicken"
        ],
        "why": "题目明确指鸡肉，用不可数的物质形式 chicken，不加复数 -s。",
        "id": "noun-countability-shifts-1"
      },
      {
        "type": "mc",
        "prompt": "哪项最能解释 an unforgettable experience？",
        "options": [
          "一次具体经历的可数用法",
          "experience 所有意义都必须可数",
          "冠词 a 可直接限定所有抽象概念",
          "这只能是错误的英语"
        ],
        "answer": 0,
        "why": "一次经历是 experience 的可数意义；经验这一常见意义通常不可数。",
        "id": "noun-countability-shifts-2"
      }
    ],
    "related": [
      "noun-material",
      "noun-abstract",
      "noun-countable-specific",
      "noun-uncountable-specific"
    ],
    "classification": [
      "材料与物品",
      "肉与动物",
      "一份饮品",
      "意思变，数法变"
    ],
    "pitfalls": [
      {
        "title": "两只鸡要用 chickens",
        "wrong": "Two chicken are in the yard.",
        "right": "Two chickens are in the yard.",
        "text": "这里明确说两只鸡，不是鸡肉，chicken 要加 s。"
      },
      {
        "title": "一个玻璃杯配 is",
        "wrong": "The glass are clean.",
        "right": "The glass is clean.",
        "text": "这里的 glass 是一个杯子，所以用 is。两个杯子才是 glasses。"
      }
    ],
    "advanced": false
  },
  {
    "id": "noun-plural-regular",
    "g": "parts",
    "title": "名词复数的规则变化",
    "en": "Regular plural endings",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "cat → cats；box → boxes；city → cities",
    "take": "复数用来表示两个或更多。大多数可数名词在词尾加 s，有些按拼写规则变化。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "复数用来表示两个或更多。大多数可数名词在词尾加 s，有些按拼写规则变化。"
      },
      {
        "h": "最常见：加 s",
        "t": "one cat 是一只猫，two cats 是两只猫。book、dog 等也常直接加 s。"
      },
      {
        "h": "有些加 es 或改 y",
        "t": "box 变 boxes。以辅音字母加 y 结尾的 city 变 cities；但 boy 前面是元音字母 o，只加 s，变 boys。"
      },
      {
        "h": "先记常见词，再认识例外",
        "t": "不是所有 o 或 f 结尾的词都按同一条规则变化。遇到新词时，记住它常用的复数写法更可靠。"
      }
    ],
    "examples": [
      {
        "en": "I see two cats.",
        "zh": "我看见两只猫。",
        "note": "cat 加 s 变成 cats。"
      },
      {
        "en": "She has three boxes.",
        "zh": "她有三个盒子。",
        "note": "box 加 es 变成 boxes。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "规则复数判断：city 应变为：",
        "options": [
          "citys",
          "cities",
          "cityes",
          "cityies"
        ],
        "answer": 1,
        "why": "city 的 y 前是辅音字母 t，通常把 y 改为 ies。",
        "id": "noun-plural-regular-0"
      },
      {
        "type": "fill",
        "prompt": "There are four ____ (key) on the desk.",
        "answer": [
          "keys"
        ],
        "why": "key 的 y 前是元音字母 e，通常直接加 -s，成为 keys。",
        "id": "noun-plural-regular-1"
      },
      {
        "type": "mc",
        "prompt": "哪一组都是常见标准复数？",
        "options": [
          "photoes / pianos",
          "photos / boxes",
          "rooves / citys",
          "babys / watches"
        ],
        "answer": 1,
        "why": "photos 与 boxes 都是常见标准形式；f、o、y 结尾的变化不能各自一律化。",
        "id": "noun-plural-regular-2"
      }
    ],
    "related": [
      "noun-plural-irregular",
      "noun-countable-specific",
      "word-formation"
    ],
    "classification": [
      "通常加 -s",
      "s / x / ch / sh 等后加 -es",
      "辅音 + y",
      "f / fe / o 的常见例外"
    ],
    "pitfalls": [
      {
        "title": "数两个时要加复数词尾",
        "wrong": "Two cat are here.",
        "right": "Two cats are here.",
        "text": "two 表示两个，cat 要变成 cats。"
      },
      {
        "title": "box 的复数加 es",
        "wrong": "She has three boxs.",
        "right": "She has three boxes.",
        "text": "box 的复数写作 boxes，不是 boxs。"
      }
    ],
    "advanced": true
  },
  {
    "id": "noun-plural-irregular",
    "g": "parts",
    "title": "不规则复数与单复数同形",
    "en": "Irregular and unchanged plurals",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "child → children；sheep → sheep",
    "take": "有些名词的复数不能只加 s，要记住另一种写法。比如 child 变 children，sheep 的单复数写法一样。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "有些名词的复数不能只加 s，要记住另一种写法。比如 child 变 children，sheep 的单复数写法一样。"
      },
      {
        "h": "有些词要换一种写法",
        "t": "一个孩子是 a child，两个孩子是 two children。一个男人是 a man，两个男人是 two men。"
      },
      {
        "h": "有些单复数写法一样",
        "t": "one sheep 是一只羊，two sheep 是两只羊。sheep 不因为数量多就加 s。"
      },
      {
        "h": "再了解一点：有些有不同用法",
        "t": "people 是 person 常见的复数。persons 在正式告示等地方也会出现；fish 和 fishes 也有不同用法。初学时先掌握最常用的表达。"
      }
    ],
    "examples": [
      {
        "en": "The children are at home.",
        "zh": "孩子们在家。",
        "note": "children 是 child 的复数，表示多个孩子，用 are。"
      },
      {
        "en": "I see two sheep.",
        "zh": "我看见两只羊。",
        "note": "两只羊仍写 sheep，不加 s。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "在普通数量“三只羊”的表达中，应选：",
        "options": [
          "three sheeps",
          "three sheep",
          "three sheepes",
          "three sheeping"
        ],
        "answer": 1,
        "why": "sheep 的普通单数和复数形式相同，three sheep 表三只羊。",
        "id": "noun-plural-irregular-0"
      },
      {
        "type": "fill",
        "prompt": "Both ____ (child) are reading quietly.",
        "answer": [
          "children"
        ],
        "why": "child 的复数为 children；both 在这里指两个儿童。",
        "id": "noun-plural-irregular-1"
      },
      {
        "type": "mc",
        "prompt": "关于单复数同形，正确的是：",
        "options": [
          "sheep 没有 -s，所以永远不可数",
          "one sheep 与 three sheep 都可用，数由上下文判断",
          "所有动物名称都单复数同形",
          "feet 是 foot 的单数"
        ],
        "answer": 1,
        "why": "同形不等于不可数；sheep 可以按个体计数，而形式由限定词和谓语等线索辨认。",
        "id": "noun-plural-irregular-2"
      }
    ],
    "related": [
      "noun-plural-regular",
      "noun-collective",
      "noun-possessive-forms"
    ],
    "classification": [
      "词干变化",
      "特殊词尾",
      "单复数同形",
      "词形随意义与语域变化"
    ],
    "pitfalls": [
      {
        "title": "child 的复数不是 childs",
        "wrong": "Two childs are here.",
        "right": "Two children are here.",
        "text": "child 的常见复数要写 children。"
      },
      {
        "title": "sheep 通常不加 s",
        "wrong": "I see two sheeps.",
        "right": "I see two sheep.",
        "text": "one sheep 和 two sheep 的 sheep 写法一样。"
      }
    ],
    "advanced": true
  },
  {
    "id": "noun-possessive-forms",
    "g": "parts",
    "title": "名词所有格的基本形式",
    "en": "Forms of the possessive",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "Tom’s bag：汤姆的包；the boys’ room：男孩们的房间",
    "take": "想说“谁的东西”，可以用名字或名词加 ’s。比如 Tom’s bag 是汤姆的包。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "想说“谁的东西”，可以用名字或名词加 ’s。比如 Tom’s bag 是汤姆的包。"
      },
      {
        "h": "先学一个人的东西",
        "t": "Tom’s book 是汤姆的书。mother’s bag 是妈妈的包。’s 要和前面的名字或名词连在一起。"
      },
      {
        "h": "多个拥有者要看复数结尾",
        "t": "boys 已经有复数 s，“男孩们的房间”写 boys’ room。children 没有 s 结尾，“孩子们的书”写 children’s books。"
      },
      {
        "h": "再认识 of 的说法",
        "t": "the door of the room 是房间的门。’s 和 of 都能说一些所属关系，但搭配不同，不要把它们随意互换。"
      }
    ],
    "examples": [
      {
        "en": "This is Tom's bag.",
        "zh": "这是汤姆的包。",
        "note": "Tom's 表示汤姆的。"
      },
      {
        "en": "The boys' room is big.",
        "zh": "男孩们的房间很大。",
        "note": "boys 是多个男孩；在 s 后加 ’ 表示他们的。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "children 的所有格应写为：",
        "options": [
          "childrens'",
          "children's",
          "childrens's",
          "children"
        ],
        "answer": 1,
        "why": "children 本身已是复数且不以 s 结尾，所有格通常加 ’s。",
        "id": "noun-possessive-forms-0"
      },
      {
        "type": "fill",
        "prompt": "把 the toys of the children 改为所有格：the ____ toys。",
        "answer": [
          "children's",
          "children’s"
        ],
        "why": "children 为不规则复数，所有格为 children’s。",
        "id": "noun-possessive-forms-1"
      },
      {
        "type": "mc",
        "prompt": "两位老师共有的办公室，可写为：",
        "options": [
          "the two teacher's office",
          "the two teachers' office",
          "the two teachers's office",
          "the two teachers office's"
        ],
        "answer": 1,
        "why": "先把 teacher 变为 two teachers，再在复数 s 后加所有格撇号，中心名词 office 保持本句单数。",
        "id": "noun-possessive-forms-2"
      }
    ],
    "related": [
      "noun-joint-possessive",
      "noun-plural-irregular",
      "possession"
    ],
    "classification": [
      "单数所有格",
      "规则复数所有格",
      "不规则复数所有格",
      "of 与双重所有格"
    ],
    "pitfalls": [
      {
        "title": "名字后的符号不能漏",
        "wrong": "This is Toms bag.",
        "right": "This is Tom's bag.",
        "text": "这里说汤姆的包，写 Tom's，不是 Toms。"
      },
      {
        "title": "复数已经有 s 时通常只加 ’",
        "wrong": "The boys's room is big.",
        "right": "The boys' room is big.",
        "text": "这里说多个男孩的房间。boys 已有 s，后面加 ’。"
      }
    ],
    "advanced": false
  },
  {
    "id": "noun-joint-possessive",
    "g": "parts",
    "title": "共同所有与分别所有",
    "en": "Joint and separate possession",
    "level": "基础",
    "source": "参考《英语语法知识体系详解》· 名词；细分类别、例句与练习补充",
    "formula": "Tom and Ann’s dog：两人共有的狗",
    "take": "说两个人的东西时，要先弄清是共同的一件，还是各自的东西。",
    "steps": [
      {
        "h": "先看懂它的意思",
        "t": "说两个人的东西时，要先弄清是共同的一件，还是各自的东西。"
      },
      {
        "h": "共有一件：通常在最后加 ’s",
        "t": "Tom and Ann’s dog 是汤姆和安共同养的狗。通常只在后一个名字 Ann 后加 ’s。"
      },
      {
        "h": "各自拥有：名字分别加 ’s",
        "t": "Tom’s and Ann’s bags 可以说汤姆的包和安的包。这里是各自的东西，两个名字都加 ’s。"
      },
      {
        "h": "物品的数量也要讲清楚",
        "t": "两个人各有一个包，一共两个，用 bags。若一句话可能有两种理解，可以分开说 Tom’s bag and Ann’s bag。"
      }
    ],
    "examples": [
      {
        "en": "Tom and Ann's dog is small.",
        "zh": "汤姆和安共有的狗很小。",
        "note": "句中说两人共有的一只狗。"
      },
      {
        "en": "Tom's and Ann's bags are here.",
        "zh": "汤姆和安各自的包在这里。",
        "note": "句中有多个包，所以用 bags 和 are。"
      }
    ],
    "quiz": [
      {
        "type": "mc",
        "prompt": "Tom and Mary's room 在通常的共同所有读法中表示：",
        "options": [
          "汤姆与玛丽共用的房间",
          "汤姆和玛丽一定各有十个房间",
          "Mary 是 room 的复数",
          "任何语境都只能指玛丽的房间"
        ],
        "answer": 0,
        "why": "此种结构通常把两个名字作为共同拥有者；实际关系仍应结合上下文。",
        "id": "noun-joint-possessive-0"
      },
      {
        "type": "fill",
        "prompt": "Anna and ____ (Ben) laboratory 表示两人共有的一个实验室。",
        "answer": [
          "Ben's",
          "Ben’s"
        ],
        "why": "共同所有的常用结构只在最后一个名字后加 ’s，构成 Anna and Ben’s laboratory。",
        "id": "noun-joint-possessive-1"
      },
      {
        "type": "mc",
        "prompt": "Tom's and Mary's cars ____ outside.（两人各自的车辆）",
        "options": [
          "is",
          "are",
          "has",
          "be"
        ],
        "answer": 1,
        "why": "主语中心 cars 是复数，谓语用 are；名字数量不是直接判断谓语形式的唯一依据。",
        "id": "noun-joint-possessive-2"
      }
    ],
    "related": [
      "noun-possessive-forms",
      "agreement",
      "noun-phrase"
    ],
    "classification": [
      "共同拥有",
      "分别拥有",
      "中心名词单复数",
      "用改写消除歧义"
    ],
    "pitfalls": [
      {
        "title": "共有的狗：Ann 后用 ’s",
        "wrong": "Tom and Ann' dog is small.",
        "right": "Tom and Ann's dog is small.",
        "text": "这里说两人共有的狗，通常在最后一个名字后写 ’s。"
      },
      {
        "title": "多个包要配 are",
        "wrong": "Tom's and Ann's bags is here.",
        "right": "Tom's and Ann's bags are here.",
        "text": "这里 bags 是多个包，所以用 are。"
      }
    ],
    "advanced": false
  }
];
  for(const e of entries){
    add(e.g,e.id,e.title,e.en,e.level,e.source,e.formula,e.take,
      e.steps.map(s=>[s.h,s.t]),e.examples.map(x=>[x.en,x.zh,x.note]),e.quiz,e.related);
  }
  window.LESSON_DETAILS={...(window.LESSON_DETAILS||{}),...Object.fromEntries(entries.map(e=>[e.id,{
    definition:e.steps[0].t,classification:e.classification,
    usage:e.steps.slice(1).map((s,i)=>({...s,...(e.advanced&&i===2?{advanced:true}:{})})).concat(e.extraUsage||[]),
    pitfalls:e.pitfalls,examples:e.examples
  }]))};
})();
