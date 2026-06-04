const STORAGE_KEY = 'foodRandomizerEatCounts';

const foodsRaw = [
  [1, '蜀砂锅', '肉末茄子、砂锅鲜椒兔', '龙湖时代天街'],
  [2, '劲烤地摊牛肉小串', '蜂蜜面包片、猪五花', '龙湖时代天街'],
  [3, '小王鲜炒', '小炒肉、一碗香', '龙湖时代天街'],
  [4, '无名蹄花', '蹄花、凉拌菜', '南门'],
  [5, '秦味和面馆', '三合一扯面、油泼拉条子', '龙湖时代天街'],
  [6, '余记快炒', '仔姜肉丝、泡椒鸡杂', '龙湖时代天街'],
  [7, '吉六六荤豆花', '黄金豆汤锅底', '龙湖时代天街'],
  [8, '鲜肉老友粉', '老友粉+虎皮凤爪', '龙湖时代天街'],
  [9, '石烹木桶鱼', '藤椒锅底+黔鱼', '龙湖时代天街'],
  [10, '来凤鱼璧山兔', '长条馒头、来凤鱼', '龙湖时代天街'],
  [11, '旺苍酸辣粉', '酸辣粉', '龙湖时代天街'],
  [12, '吹炊鸡杂馆', '美团双人套餐', '龙湖时代天街'],
  [13, '小煲贝', '黑椒牛肉+叉烧+窝蛋', '南门'],
  [14, '南门叔叔肠粉', '原味肠粉+火腿', '南门'],
  [15, '柳螺哥螺蛳粉', '招牌+猪皮+腊肠', '黄焖鸡对面'],
  [16, '陈索索花雕醉鸡', '中辣锅+豆腐皮、小狗', '龙湖时代天街'],
  [17, '蕉南街', '咖喱牛腩、猪颈排', '龙湖时代天街'],
  [18, '刘小亮东北铁锅炖', '铁锅炖大鹅、锅包肉', '龙湖时代天街'],
  [19, '山喜和牛自助', '上脑、肥牛', '龙湖时代天街'],
  [20, '一把骨', '干锅、糯香鸭掌', '龙湖时代天街'],
  [21, '贝贝乔意面', '墨鱼意面、原切牛排', '龙湖时代天街'],
  [22, '东北饺子家常菜', '溜肉段、东北大拉皮', '龙湖时代天街'],
  [23, '盐都干锅王', '干锅鸡', '龙湖时代天街'],
  [24, '丁一鸣花雕醉鸡', '蒜香排骨、微辣锅底', '龙湖时代天街'],
  [25, '好运猪咖喱饭', '蒜香厚切川辣鸡排', '龙湖时代天街'],
  [26, '臻溢香冒烤鸭', '烤鸭+免费素菜自选', '龙湖时代天街'],
  [27, '鸡公小灶', '油豆腐、凤爪', '龙湖时代天街'],
  [28, '老美牛排饭', '卤肉饭、红烧牛腩饭', '龙湖时代天街'],
  [29, '点妈手工饺子', '猪肉大葱饺、三鲜饺', '龙湖时代天街'],
  [30, '老叶川菜馆', '蒜香排骨、椒麻仔鸡', '龙湖时代天街'],
  [31, '有盐有味川菜馆', '麻辣腰花、一碗香', '龙湖时代天街'],
  [32, '张亮麻辣烫', '美团 23.8 单人套餐', '龙湖时代天街'],
  [33, '汤婆婆鸡汤饭', '排骨鸡汤饭', '龙湖时代天街'],
  [34, 'WIKI Burger', '安格斯牛肉拌饭', '龙湖时代天街'],
  [35, '抱汁汁', '藤椒鸡腿、烧椒皮蛋牛肉堡', '龙湖时代天街'],
  [36, '北村韩屋韩式炸鸡', '海苔肉松贝贝炸鸡', '龙湖时代天街'],
  [37, '达美乐披萨', '金沙咸蛋黄嫩鸡披萨', '龙湖时代天街'],
  [38, '必胜客', '每一款汉堡', '龙湖时代天街'],
  [39, '汉江里炸鸡', '威士忌脆脆鸡、年糕香肠卷', '龙湖时代天街'],
  [40, '八度烤云南菜', '鸡脚筋、土豆泥', '龙湖时代天街'],
  [41, '攀枝花盐边米线', '双哨羊肉米线', '龙湖时代天街'],
  [42, '何记美蛙鱼', '鱼蛙混吃自助', '龙湖时代天街'],
  [43, '升钟鱼', '美蛙肥肠鱼自助', '龙湖时代天街'],
  [44, '拾间拾好巷口串串', '火锅粉、蛋炒饭', '龙湖时代天街'],
  [45, '钰善里', '锅包肉炸酱面', '龙湖时代天街'],
  [46, '不止鲜', '锅包肉、炸蘑菇、卤肉饭', '龙湖时代天街'],
  [47, '尹三顺', '鸡蛋布蕾、泰式咖喱牛肉', '龙湖时代天街'],
  [48, '昊来了', '脑花一口饭、鹅肝', '龙湖时代天街'],
  [49, '派克鸡排', '脆皮去骨鸡腿排', '龙湖时代天街'],
  [50, '围满停车场烧烤', '芥菜春饺、沙葱牛肉', '龙湖时代天街'],
  [51, '螺一螺螺蛳粉', '鸭掌螺蛳粉', '龙湖时代天街'],
  [52, '李记河南烩面', '生椒牛肉、大盘鸡', '龙湖时代天街'],
  [53, '滨寿司', '鳗鱼系列全肯定', '龙湖时代天街'],
  [54, '黄师傅拌面', '小炒牛肉拌面', '南门'],
  [55, '啫小小瓦香鸡', '中辣煲（一定要加方便面）', '龙湖时代天街'],
  [56, '学子餐厅档口', '麻辣烫、酸汤肥牛（不要米饭+方便面）、笋干肉拌面、家园串串', '学子餐厅'],
  [57, '桃园餐厅档口', '猪蹄（求白月光回归）', '桃园餐厅'],
  [58, '西北餐厅档口', '孜然牛肉拌面、大盘鸡拌饼', '西北餐厅'],
  [59, '朝阳餐厅档口', '渣渣肉拌饭、煲仔饭、老麻抄手、可乐鸡饭、土耳其烤肉饭、三味饭', '朝阳餐厅'],
  [60, '银桦食堂档口', '滑蛋饭、冒烤鸭、土豆泥炸酱拌面、鱼香藕饼、厨之味、麻辣蛙（三楼自选菜）、烧鸭饭', '银桦食堂'],
  [61, '食堂', '铁板烧、鸡汤馄饨、跷脚牛肉', '思源食堂'],
  [62, '科创食堂档口', '花溪牛肉米粉、猪脚饭、重庆小面、小炒全肯定、麻辣烫、番茄牛腩饭', '科创食堂'],
  [63, '芙蓉餐厅档口', '三楼冒菜、担担面', '芙蓉餐厅'],
  [64, '商业街小吃', '巷口老卤猪脚饭、酥肉蛋汤饭、麦当劳、JOJO 小铺', '商业街'],
  [65, '小黑酱', '血糯米玫瑰奶酪芋泥、开心果奶酪、红豆沙、土豆泥辣卤鸡腿、土豆泥芝士火鸡面、烧椒香菜牛肉滑蛋、傣味虾仁魔芋面、鲜椒仔姜鸡胸肉', '配送到校'],
  [66, '芋见', '东北饭包、麻辣火锅鸡、咖喱碎牛肉饭、可乐土豆泥卤肉饭、椰香咖喱鸡腿饭、抹茶奶酪可可奶砖、黑芝麻奶酪茉莉奶冻、酸菜芝士辣牛肉滑蛋、火鸡面厚蛋烧', '配送到校'],
  [67, '塔普料理', '北非蛋、猪肉打抛饭', '配送到校'],
  [68, '宜味小食', '暂无推荐菜', '南门'],
  [69, '蜀味农家小炒', '暂无推荐菜', '龙湖时代天街'],
  [70, '壹间小厨', '暂无推荐菜', '龙湖时代天街'],
  [71, '寻味烤鱼', '豆花烤鱼', '龙湖时代天街']
];

const categories = [
  { key: 'all', label: '全部', title: '全部店铺' },
  { key: 'party', label: '聚餐', title: '聚餐' },
  { key: 'delivery', label: '外卖', title: '外卖' },
  { key: 'single', label: '单人餐', title: '单人餐' },
  { key: 'canteen', label: '食堂', title: '食堂' }
];

const categoryMap = {
  party: [1, 2, 3, 4, 6, 7, 9, 10, 12, 16, 17, 18, 19, 20, 22, 23, 24, 26, 27, 30, 31, 37, 38, 39, 40, 42, 43, 44, 46, 48, 50, 52, 53, 55, 68, 69, 70, 71],
  delivery: [34, 35, 36, 37, 38, 39, 49, 64, 65, 66, 67],
  single: [5, 8, 11, 12, 13, 14, 15, 21, 25, 28, 29, 32, 33, 34, 35, 36, 38, 41, 45, 46, 47, 49, 51, 54, 64, 65, 66, 67],
  canteen: [56, 57, 58, 59, 60, 61, 62, 63]
};

const locationProfiles = {
  times: {
    name: '龙湖成都时代天街',
    detail: '成都市高新西区合作路89号，电子科技大学清水河校区西门附近',
    lat: 30.75644,
    lng: 103.91837,
    refs: ['龙湖时代天街购物广场', '合信路（时代天街）站', '电子科大清水河校区西门']
  },
  southGate: {
    name: '电子科技大学清水河校区南门',
    detail: '成都市郫都区西源大道2006号，清水河校区南门周边',
    lat: 30.74656,
    lng: 103.92292,
    refs: ['电子科大清水河校区南门', '顺江小区', '清源环街']
  },
  campus: {
    name: '电子科技大学清水河校区',
    detail: '成都市郫都区西源大道2006号，校内餐厅或取餐点附近',
    lat: 30.75316,
    lng: 103.92829,
    refs: ['电子科技大学清水河校区', '图书馆', '校内生活区']
  },
  xuezi: { name: '学子餐厅', detail: '电子科技大学清水河校区内，学子餐厅档口', lat: 30.75316, lng: 103.92829, refs: ['学子餐厅', '清水河校区', '校内生活区'] },
  taoyuan: { name: '桃园餐厅', detail: '电子科技大学清水河校区内，桃园餐厅档口', lat: 30.75316, lng: 103.92829, refs: ['桃园餐厅', '清水河校区', '校内生活区'] },
  northwest: { name: '西北餐厅', detail: '电子科技大学清水河校区内，西北餐厅档口', lat: 30.75316, lng: 103.92829, refs: ['西北餐厅', '清水河校区', '校内生活区'] },
  chaoyang: { name: '朝阳餐厅', detail: '电子科技大学清水河校区内，朝阳餐厅档口', lat: 30.75316, lng: 103.92829, refs: ['朝阳餐厅', '清水河校区', '校内生活区'] },
  yinhua: { name: '银桦食堂', detail: '电子科技大学清水河校区内，银桦食堂档口', lat: 30.75316, lng: 103.92829, refs: ['银桦食堂', '清水河校区', '校内生活区'] },
  siyuan: { name: '思源食堂', detail: '电子科技大学清水河校区内，思源食堂档口', lat: 30.75316, lng: 103.92829, refs: ['思源食堂', '清水河校区', '校内生活区'] },
  kechuang: { name: '科创食堂', detail: '电子科技大学清水河校区内，科创食堂档口', lat: 30.75316, lng: 103.92829, refs: ['科创食堂', '清水河校区', '校内生活区'] },
  furong: { name: '芙蓉餐厅', detail: '电子科技大学清水河校区内，芙蓉餐厅档口', lat: 30.75316, lng: 103.92829, refs: ['芙蓉餐厅', '清水河校区', '校内生活区'] },
  commercial: { name: '电子科技大学清水河校区商业街', detail: '清水河校区商业街附近，小吃和快餐集中区域', lat: 30.75316, lng: 103.92829, refs: ['清水河校区商业街', '麦当劳', 'JOJO 小铺'] },
  delivery: { name: '配送到校', detail: '配送到电子科技大学清水河校区，按实际取餐点或宿舍区为准', lat: 30.75316, lng: 103.92829, refs: ['清水河校区', '校内取餐点', '学生宿舍区'] }
};

function getLocationProfile(place) {
  if (place.indexOf('龙湖') >= 0) return locationProfiles.times;
  if (place.indexOf('南门') >= 0 || place.indexOf('黄焖鸡') >= 0) return locationProfiles.southGate;
  if (place.indexOf('学子') >= 0) return locationProfiles.xuezi;
  if (place.indexOf('桃园') >= 0) return locationProfiles.taoyuan;
  if (place.indexOf('西北') >= 0) return locationProfiles.northwest;
  if (place.indexOf('朝阳') >= 0) return locationProfiles.chaoyang;
  if (place.indexOf('银桦') >= 0) return locationProfiles.yinhua;
  if (place.indexOf('思源') >= 0) return locationProfiles.siyuan;
  if (place.indexOf('科创') >= 0) return locationProfiles.kechuang;
  if (place.indexOf('芙蓉') >= 0) return locationProfiles.furong;
  if (place.indexOf('商业街') >= 0) return locationProfiles.commercial;
  if (place.indexOf('配送') >= 0) return locationProfiles.delivery;
  return locationProfiles.campus;
}

function getFoodCategories(id) {
  return categories
    .filter(category => category.key !== 'all' && (categoryMap[category.key] || []).indexOf(id) >= 0)
    .map(category => category.label);
}

function normalizeCounts(counts) {
  return counts && typeof counts === 'object' ? counts : {};
}

function buildFoods(eatCounts) {
  return foodsRaw.map(row => {
    const location = getLocationProfile(row[3]);
    return {
      id: row[0],
      store: row[1],
      dish: row[2],
      place: row[3],
      location: Object.assign({}, location, { refsText: location.refs.join('、') }),
      categoryLabels: getFoodCategories(row[0]),
      eatCount: Number(eatCounts[row[0]] || 0)
    };
  });
}

function getCategoryIds(categoryKey) {
  if (categoryKey === 'all') return foodsRaw.map(row => row[0]);
  return categoryMap[categoryKey] || [];
}

Page({
  data: {
    chips: ['🍲 干锅', '🍣 寿司', '🍕 披萨', '🥟 饺子', '🍛 咖喱饭', '🍢 烧烤', '🍮 甜品', '🥗 食堂'],
    categories,
    activeCategory: 'all',
    activeTitle: '全部店铺',
    numberText: '?',
    isRolling: false,
    manualValue: '',
    keyword: '',
    currentId: null,
    picked: null,
    currentLocation: null,
    markers: [],
    history: [],
    foods: [],
    visibleFoods: [],
    eatCounts: {}
  },

  onLoad() {
    const eatCounts = normalizeCounts(wx.getStorageSync(STORAGE_KEY));
    const foods = buildFoods(eatCounts);
    this.setData({ eatCounts, foods }, () => this.refreshVisibleFoods());
  },

  refreshVisibleFoods() {
    const ids = getCategoryIds(this.data.activeCategory);
    const idSet = {};
    ids.forEach(id => { idSet[id] = true; });
    const keyword = this.data.keyword.trim().toLowerCase();
    const visibleFoods = this.data.foods.filter(item => {
      if (!idSet[item.id]) return false;
      if (!keyword) return true;
      return `${item.id} ${item.store} ${item.dish} ${item.location.detail}`.toLowerCase().indexOf(keyword) >= 0;
    });
    const active = categories.find(item => item.key === this.data.activeCategory) || categories[0];
    this.setData({
      visibleFoods,
      activeTitle: active.title
    });
  },

  changeCategory(event) {
    this.setData({
      activeCategory: event.currentTarget.dataset.key
    }, () => this.refreshVisibleFoods());
  },

  randomFood() {
    const pool = this.data.visibleFoods.length ? this.data.visibleFoods : this.data.foods;
    return pool[Math.floor(Math.random() * pool.length)];
  },

  draw() {
    if (this.data.isRolling || !this.data.visibleFoods.length) return;
    this.setData({ isRolling: true });
    const started = Date.now();
    const timer = setInterval(() => {
      const preview = this.randomFood();
      this.setData({ numberText: String(preview.id) });
      if (Date.now() - started > 900) {
        clearInterval(timer);
        this.pickFood(this.randomFood());
        this.setData({ isRolling: false });
      }
    }, 54);
  },

  pickFood(item) {
    const location = item.location;
    const markers = [{
      id: item.id,
      latitude: location.lat,
      longitude: location.lng,
      title: item.store,
      callout: {
        content: item.store,
        color: '#231f20',
        fontSize: 13,
        borderRadius: 6,
        bgColor: '#ffffff',
        padding: 8,
        display: 'ALWAYS'
      }
    }];
    const history = [item].concat(this.data.history.filter(historyItem => historyItem.id !== item.id)).slice(0, 8);
    this.setData({
      currentId: item.id,
      picked: item,
      currentLocation: location,
      markers,
      numberText: String(item.id),
      history
    });
  },

  pickByCard(event) {
    const id = Number(event.currentTarget.dataset.id);
    const item = this.data.foods.find(food => food.id === id);
    if (item) this.pickFood(item);
  },

  onManualInput(event) {
    const value = event.detail.value;
    const item = this.data.foods.find(food => food.id === Number(value));
    this.setData({ manualValue: value });
    if (item) this.pickFood(item);
  },

  onSearch(event) {
    this.setData({ keyword: event.detail.value }, () => this.refreshVisibleFoods());
  },

  confirmEat() {
    if (!this.data.picked) return;
    const id = this.data.picked.id;
    const eatCounts = Object.assign({}, this.data.eatCounts);
    eatCounts[id] = Number(eatCounts[id] || 0) + 1;
    wx.setStorageSync(STORAGE_KEY, eatCounts);
    const foods = buildFoods(eatCounts);
    const picked = foods.find(item => item.id === id);
    const history = this.data.history.map(item => foods.find(food => food.id === item.id) || item);
    this.setData({
      eatCounts,
      foods,
      picked,
      history
    }, () => this.refreshVisibleFoods());
  },

  openMap() {
    if (!this.data.picked || !this.data.currentLocation) return;
    const location = this.data.currentLocation;
    wx.openLocation({
      latitude: location.lat,
      longitude: location.lng,
      scale: 16,
      name: this.data.picked.store,
      address: `${location.detail}。参考：${location.refsText}`
    });
  },

  openCardMap(event) {
    const id = Number(event.currentTarget.dataset.id);
    const item = this.data.foods.find(food => food.id === id);
    if (!item) return;
    wx.openLocation({
      latitude: item.location.lat,
      longitude: item.location.lng,
      scale: 16,
      name: item.store,
      address: `${item.location.detail}。参考：${item.location.refsText}`
    });
  }
});
