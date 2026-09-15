(() => {
  LESSONS["11"] = {
    topic: "Character Details & Custom Tail Brush Creation",
    terms: [
      ["Vector Curve Conversion", "벡터 곡선 변형 (기본 도형을 선택한 후 Ctrl + Enter를 눌러 세부 조절 노드를 생성하고, 곡선을 자유롭게 구부려 유니크한 캐릭터나 사물 파츠를 제작하는 기능)"],
      ["New Texture Image Brush", "새 텍스처 이미지 브러시 만들기 (완성한 캐릭터 꼬리 개체를 PNG로 저장한 뒤 불러와, 그리는 패스를 따라 꼬리 디자인이 적용되는 커스텀 브러시로 등록하는 기능)"]
    ],
    brainstormKo: "",
    s1: {
      title: "Choosing Practice Concept & Character Details",
      subtitle: "연습하고 싶은 캐릭터 및 배경 컨셉 정하기",
      messages: [
        {role:"teacher", en:"We only have two diploma sessions left! What would you like to work on today, backgrounds or characters?", ko:"이제 디플로마 과정이 두 세션밖에 안 남았네요! 오늘 배경과 캐릭터 중 어떤 걸 더 연습해보고 싶나요?"},
        {role:"student", en:"I want to draw the <span class=\"slot\">[ 선택한 캐릭터/대상 ]</span> with <span class=\"slot\">[ 표정/소품 디테일 ]</span>.", ko:"저는 [ 표정/소품 디테일 ]을 가진 [ 선택한 캐릭터/대상 ]을 그려보고 싶어요!", group:"s1-character-detail-hint"},
        {role:"teacher", en:"Cool choice! Let's work on those details together!", ko:"멋진 선택이에요! 그 디테일들을 함께 만들어 봅시다!"}
      ],
      hints: [{
        after:1,
        group:"s1-character-detail-hint",
        label:"캐릭터 & 소품 단어 힌트",
        rows:[
          [["Sleeping tooth","자고 있는 치아"],["cavity detail","충치 디테일"]],
          [["Black cat","검은 고양이"],["apple cake","사과 케이크"]]
        ]
      }]
    },
    s2: {
      title:"Talking about Animals with Unique Tails",
      subtitle:"특이한 꼬리를 가진 동물과 브러시 활용",
      messages:[
        {role:"teacher", en:"What's your favorite animal with a unique pattern or a fluffy tail?", ko:"특이한 무늬나 폭신폭신한 꼬리를 가진 동물 중 어떤 동물을 가장 좋아하나요?"},
        {role:"student", en:"I like tigers for their striped tails and foxes for their fluffy tails!", ko:"저는 줄무늬 꼬리가 있는 호랑이와 폭신폭신한 꼬리가 있는 여우를 좋아해요!"},
        {role:"teacher", en:"Great! Today, we'll turn those tail shapes into custom brushes so you can draw them much more easily.", ko:"좋아요! 오늘은 그런 꼬리 모양을 커스텀 브러시로 만들어서 훨씬 쉽고 빠르게 그려볼 거예요!"}
      ]
    },
    patterns:[
      {tag:"GUIDE", title:"Converting Shapes to Editable Curves", koTitle:"기본 도형을 자유 곡선으로 전환하기", examples:[
        ["Select the basic shape, press Ctrl + Enter, and use the Node Tool to bend the lines and change the shape.","기본 도형을 선택하고 Ctrl + Enter를 누른 다음, Node Tool로 선을 구부리며 모양을 바꿔 보세요."],
        ["Once you convert the shape to curves, you can move the nodes and make shapes like rounded cake pieces or character eyes.","도형을 커브로 바꾸면 노드를 움직여 둥근 케이크 조각이나 캐릭터 눈처럼 원하는 모양을 만들 수 있어요."]
      ], quizKo:"도형을 선택하고 Ctrl + Enter를 눌러 노드 편집이 가능한 커브 상태로 만들어 보세요.", answer:"Select the shape and press Ctrl + Enter to convert it to curves so you can edit the nodes."},
      {tag:"GUIDE", title:"Direct Selecting Sub-Objects inside Groups", koTitle:"Ctrl 클릭으로 그룹 내 특정 개체 바로 선택하기", examples:[
        ["Hold Ctrl and click the white part of the tooth to select it without ungrouping.","그룹을 해제하지 않고 Ctrl 키를 누른 채 치아의 흰색 부분을 클릭해서 선택해 보세요."],
        ["Ctrl-click lets you select and edit one part inside a group without ungrouping the whole group.","Ctrl 클릭을 사용하면 전체 그룹을 풀지 않고도 그룹 안의 특정 부분만 선택해서 수정할 수 있어요."]
      ], quizKo:"Ctrl 키를 누른 채 캐릭터의 특정 부위만 직접 클릭하여, 그룹을 해제하지 않고 선택해 보세요.", answer:"Hold Ctrl and click the part you want to select without ungrouping."},
      {tag:"GUIDE", title:"Creating Custom Texture Image Brushes", koTitle:"PNG 이미지로 새 텍스처 브러시 등록하기", examples:[
        ["Open the Brushes panel menu, click New Texture Image Brush, and open the tail PNG you saved.","Brushes 패널 메뉴를 열고 New Texture Image Brush를 누른 뒤, 저장해 둔 꼬리 PNG 이미지를 불러오세요."],
        ["The PNG will become a custom brush, so your tail design will follow the path you draw.","PNG 이미지가 커스텀 브러시로 만들어져서, 그리는 패스를 따라 꼬리 디자인이 적용돼요."]
      ], quizKo:"Brushes 패널 우측 상단 메뉴에서 New Texture Image Brush를 누르고 저장한 꼬리 PNG 이미지를 불러와 보세요.", answer:"Open the Brushes panel menu, click New Texture Image Brush, and open your saved tail PNG."},
      {tag:"GUIDE", title:"Adjusting Brush Size and Settings", koTitle:"브러시 썸네일 더블클릭으로 크기 및 이름 설정하기", examples:[
        ["Double-click the tail brush thumbnail to open the brush settings.","꼬리 브러시 썸네일을 더블클릭해서 브러시 설정을 열어 보세요."],
        ["In the brush settings, you can change the brush size and give your brush a name.","브러시 설정에서 브러시 크기를 바꾸고 원하는 이름을 붙일 수 있어요."]
      ], quizKo:"브러시 썸네일을 두 번 누르고 크기와 이름을 원하는 대로 변경해 보세요.", answer:"Double-click the brush thumbnail and change the size and name in the brush settings."}
    ]
  };

  LESSONS["12"] = {
    topic:"Custom Brush Creation & Character Expressions for Picture Books",
    terms:[
      ["Pencil Tool Sculpt Mode","펜슬 스컬프 모드 (기존 패스의 끝부분에서 자연스럽게 이어 그리거나 형태를 수정하여 하나의 연속된 곡선으로 작업할 수 있도록 도와주는 기능)"],
      ["Texture Brush Stretch Mode","텍스처 브러시 늘리기 설정 (등록한 이미지 브러시의 세부 편집에서 빨간색 지정 선을 조절하여 캐릭터의 팔이나 몸통처럼 특정 구간만 자연스럽게 늘어나도록 설정하는 기능)"]
    ],
    brainstormKo:"",
    s1:{
      title:"Practicing Character Expressions & Poses for Picture Books",
      subtitle:"동화책 캐릭터의 다양한 표정과 포즈 연습하기",
      messages:[
        {role:"teacher", en:"Today, we're practicing character poses and facial expressions for our picture books! What character, expression, or pose would you like to try today?", ko:"오늘은 동화책에 들어갈 캐릭터의 포즈와 표정을 연습해 볼 거예요! 오늘 어떤 캐릭터와 표정 또는 포즈를 만들어보고 싶나요?"},
        {role:"student", en:"I want to draw a <span class=\"slot\">[ 캐릭터/동물 ]</span> <span class=\"slot\">[ 포즈/동작 ]</span> with a <span class=\"slot\">[ 표정 ]</span>.", ko:"저는 [ 포즈/동작 ]을 하며 [ 표정 ]을 짓고 있는 [ 캐릭터/동물 ]을 그려보고 싶어요!", group:"s1-expression-pair-hint"},
        {role:"teacher", en:"Great! Different expressions and poses will make your picture book much more lively!", ko:"좋아요! 다양한 표정과 포즈를 넣으면 여러분의 그림책이 훨씬 더 생동감 있어질 거예요!"}
      ],
      hints:[{
        after:1,
        group:"s1-expression-pair-hint",
        label:"캐릭터 표정 & 포즈 단어 힌트",
        rows:[
          [["Surprised rabbit","놀란 토끼"],["wide-open mouth with teeth","이빨이 보이는 크게 벌린 입"]],
          [["King character","왕 캐릭터"],["confident or crying expression","당당하거나 눈물을 흘리는 표정"]]
        ]
      }]
    },
    s2:{
      title:"Diploma Course Graduation & Next Step to Editor Course",
      subtitle:"디플로마 과정 수료 및 에디터 코스 안내",
      messages:[
        {role:"teacher", en:"Can you believe it? Today is the very last session of our Diploma course! How do you feel?", ko:"믿겨지나요? 오늘이 우리 디플로마 코스의 마지막 수업이에요! 기분이 어때요?"},
        {role:"student", en:"I can't believe we finished all 12 sessions! I'm so excited to start the Editor course and make my own picture book!", ko:"12번의 수업을 모두 마쳤다니 믿기지 않아요! 에디터 코스를 시작해서 나만의 그림책을 만들 생각에 정말 기대돼요!"},
        {role:"teacher", en:"You've grown so much! In the Editor course, we'll start creating your own characters and building your story and picture book world!", ko:"여러분 실력이 정말 많이 늘었어요! 에디터 코스에서는 여러분만의 캐릭터를 만들고 스토리와 그림책 세계를 본격적으로 만들어 갈 거예요!"}
      ]
    },
    patterns:[
      {tag:"GUIDE", title:"Connecting Lines with Pencil Tool Sculpt Mode", koTitle:"스컬프 모드로 기존 패스 선 자연스럽게 이어 그리기", examples:[
        ["Turn on Sculpt mode with the Pencil Tool to continue drawing from the end of an existing line.","Pencil Tool에서 Sculpt 모드를 켜면 기존 선의 끝부분에서 자연스럽게 이어 그릴 수 있어요."],
        ["Using Sculpt mode lets you extend character arms or body outlines without starting a new line.","Sculpt 모드를 사용하면 새로운 선을 따로 만들지 않고 캐릭터의 팔이나 몸통 라인을 계속 이어 그릴 수 있어요."]
      ], quizKo:"Pencil Tool을 선택하고 Sculpt 버튼을 활성화한 뒤, 기존 선의 끝부분에서 자연스럽게 이어 그려 보세요.", answer:"Select the Pencil Tool, turn on Sculpt mode, and start drawing from the end of the line."},
      {tag:"GUIDE", title:"Setting Stretch Areas for Texture Brushes", koTitle:"브러시 늘어남 구간 설정하기", examples:[
        ["Open the brush settings, choose Stretch, and move the red lines to set the part of the arm you want to stretch.","브러시 설정을 열고 Stretch를 선택한 뒤 빨간 선을 움직여 팔에서 늘어나게 할 부분을 정해 주세요."],
        ["Move the red lines so only the middle part of the arm stretches, while the hand and shoulder keep their shape.","빨간 선을 조절하면 손과 어깨 모양은 그대로 유지하면서 팔의 가운데 부분만 자연스럽게 늘어나게 할 수 있어요."]
      ], quizKo:"브러시 편집에서 Stretch를 선택하고 빨간 선을 움직여 늘어날 구간을 지정해 보세요.", answer:"Open the brush settings, choose Stretch, and move the red lines to the area you want to stretch."},
      {tag:"GUIDE", title:"Creating a Pixel Brush from a Selection", koTitle:"선택 영역으로 새 픽셀 브러시 만들기", examples:[
        ["Right-click the waterdrop group and choose Rasterize to turn it into a pixel image.","물방울 그룹을 마우스 오른쪽 버튼으로 클릭하고 Rasterize를 선택해서 픽셀 이미지로 바꿔 주세요."],
        ["Hold Ctrl or Command and click the layer thumbnail to select the waterdrop shape. Then choose New Brush from Selection in the Brushes panel.","Ctrl 또는 Command를 누른 채 레이어 썸네일을 클릭해서 물방울 모양의 선택 영역을 만든 다음, Brushes 패널에서 New Brush from Selection을 선택해 주세요."]
      ], quizKo:"물방울 그룹을 Rasterize한 뒤 Ctrl 또는 Command를 누른 채 레이어 썸네일을 클릭해서 선택 영역을 만들어 보세요.", answer:"Rasterize the group, then hold Ctrl or Command and click the layer thumbnail to make a selection."},
      {tag:"GUIDE", title:"Adding Random Dynamics to Custom Waterdrop Brushes", koTitle:"물방울 브러시 다이나믹스 및 지터 설정하기", examples:[
        ["In the Dynamics menu, adjust Size, Rotation, and Scatter Jitter to make the waterdrops appear in different sizes, angles, and positions.","Dynamics 메뉴에서 Size, Rotation, Scatter Jitter를 조절하면 물방울의 크기, 각도, 위치가 다양하게 나오도록 만들 수 있어요."],
        ["Adjust Hue Jitter to make the waterdrops come out in slightly different colors.","Hue Jitter를 조절하면 물방울이 조금씩 다른 색으로 나오게 할 수 있어요."]
      ], quizKo:"Dynamics 메뉴에서 Size와 Rotation Jitter를 조절하여 물방울이 다양한 크기와 각도로 나오게 해 보세요.", answer:"Go to the Dynamics menu and adjust the Size and Rotation Jitter values."}
    ]
  };

  Object.assign(QUIZ_VISIBLE_TERMS, {
    "11-0":["Ctrl + Enter","edit the nodes"],
    "11-1":["Ctrl","without ungrouping"],
    "11-2":["New Texture Image Brush"],
    "11-3":["Double-click","size","name"],
    "12-0":["Sculpt mode","end of the line"],
    "12-1":["Stretch","red lines"],
    "12-2":["Rasterize","selection"],
    "12-3":["Dynamics","Rotation Jitter"]
  });

  if (typeof renderHome === "function") renderHome();
})();
