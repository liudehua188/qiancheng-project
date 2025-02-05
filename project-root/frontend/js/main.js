// 模拟产品数据
const products = [
    {
        id: "P001",
        title: "芳晓卡28元包100G通用+500分钟通话",
        image: "./img/产品主图.jpg",
        operator: "中国联通",
        monthlyFee: "28元/月",
        packageDetails: "包含100GB全国通用流量，500分钟通话时长，超出按0.15元/分钟计费",
        numberSelection: true,    // 是否支持选号
        contractRules: "合约期12个月，合约期内注销需支付违约金200元；合约期满后可免费注销",
        age: "18-30周岁",
        location: "浙江",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",     // 秒返
            amount: "100元",
            rules: "用户激活后，商家获得100元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: false,
        listingDate: "2023-10-01",
        status: "在售",          // 在售/已下架
        tags: ["限时优惠", "仅剩北京", "数量有限", "大流量"]
    },
    {
        id: "P002",
        title: "联通超级卡49元包180G通用+800分钟",
        image: "./img/产品主图.jpg",
        operator: "中国联通",
        monthlyFee: "49元/月",
        packageDetails: "包含180GB全国通用流量，800分钟通话时长，超出按0.1元/分钟计费",
        numberSelection: true,
        contractRules: "合约期24个月，合约期内注销需支付违约金300元；合约期满后可免费注销",
        age: "18-35周岁",
        location: "随机分配",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",     // 月返
            amount: "150元",
            rules: "用户激活并使用3个月后，分3个月返还商家150元"
        },
        settlementRules: "首充达标，连续3个月不注销",
        isProvincialProduct: false,
        listingDate: "2023-11-15",
        status: "在售",
        tags: ["限时活动", "仅剩北京", "大流量"]
    },
    {
        id: "P003",
        title: "移动青春卡39元包150G通用+1000分钟",
        image: "./img/产品主图.jpg",
        operator: "中国移动",
        monthlyFee: "39元/月",
        packageDetails: "包含150GB全国通用流量，1000分钟通话时长，超出按0.1元/分钟计费",
        numberSelection: true,
        contractRules: "合约期12个月，合约期内注销需支付违约金200元；合约期满后可免费注销",
        age: "18-25周岁",
        location: "上海",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",
            amount: "120元",
            rules: "用户激活后，商家获得120元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: false,
        listingDate: "2023-12-01",
        status: "在售",
        tags: ["限时优惠", "大流量", "校园专属"]
    },
    {
        id: "P004",
        title: "电信星卡59元包200G通用+1200分钟",
        image: "./img/产品主图.jpg",
        operator: "中国电信",
        monthlyFee: "59元/月",
        packageDetails: "包含200GB全国通用流量，1200分钟通话时长，超出按0.1元/分钟计费",
        numberSelection: true,
        contractRules: "合约期12个月，合约期内注销需支付违约金200元；合约期满后可免费注销",
        age: "18-40周岁",
        location: "广东",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",
            amount: "130元",
            rules: "用户激活并使用3个月后，分3个月返还商家130元"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: false,
        listingDate: "2023-12-15",
        status: "在售",
        tags: ["限时优惠", "大流量", "明星推荐"]
    },
    {
        id: "P005",
        title: "广电首发卡19元包50G通用+300分钟",
        image: "./img/产品主图.jpg",
        operator: "中国广电",
        monthlyFee: "19元/月",
        packageDetails: "包含50GB全国通用流量，300分钟通话时长，超出按0.15元/分钟计费",
        numberSelection: true,
        contractRules: "合约期6个月，合约期内注销需支付违约金100元；合约期满后可免费注销",
        age: "18-60周岁",
        location: "全国",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",
            amount: "80元",
            rules: "用户激活后，商家获得80元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: false,
        listingDate: "2024-01-01",
        status: "在售",
        tags: ["新品上架", "性价比高"]
    },
    {
        id: "P006",
        title: "联通大流量卡79元包300G通用+不限量通话",
        image: "./img/产品主图.jpg",
        operator: "中国联通",
        monthlyFee: "79元/月",
        packageDetails: "包含300GB全国通用流量，国内通话不限量",
        numberSelection: true,
        contractRules: "合约期24个月，合约期内注销需支付违约金500元；合约期满后可免费注销",
        age: "18-50周岁",
        location: "全国",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",
            amount: "200元",
            rules: "用户激活并使用3个月后，分3个月返还商家200元"
        },
        settlementRules: "首充达标，连续3个月不注销",
        isProvincialProduct: false,
        listingDate: "2023-09-01",
        status: "offline",
        tags: ["超大流量", "无限通话"]
    },
    {
        id: "P007",
        title: "移动畅玩卡29元包120G通用+600分钟",
        image: "./img/产品主图.jpg",
        operator: "中国移动",
        monthlyFee: "29元/月",
        packageDetails: "包含120GB全国通用流量，600分钟通话时长，超出按0.15元/分钟计费",
        numberSelection: true,
        contractRules: "合约期12个月，合约期内注销需支付违约金150元；合约期满后可免费注销",
        age: "18-35周岁",
        location: "江苏",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",
            amount: "90元",
            rules: "用户激活后，商家获得90元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: true,
        listingDate: "2023-11-20",
        status: "在售",
        tags: ["游戏专属", "大流量"]
    },
    {
        id: "P008",
        title: "电信大王卡49元包250G通用+1000分钟",
        image: "./img/产品主图.jpg",
        operator: "中国电信",
        monthlyFee: "49元/月",
        packageDetails: "包含250GB全国通用流量，1000分钟通话时长，超出按0.1元/分钟计费",
        numberSelection: true,
        contractRules: "合约期24个月，合约期内注销需支付违约金300元；合约期满后可免费注销",
        age: "18-45周岁",
        location: "全国",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",
            amount: "160元",
            rules: "用户激活并使用3个月后，分3个月返还商家160元"
        },
        settlementRules: "首充达标，连续3个月不注销",
        isProvincialProduct: false,
        listingDate: "2023-08-15",
        status: "offline",
        tags: ["王卡系列", "超大流量"]
    },
    {
        id: "P009",
        title: "广电特惠卡29元包80G通用+500分钟",
        image: "./img/产品主图.jpg",
        operator: "中国广电",
        monthlyFee: "29元/月",
        packageDetails: "包含80GB全国通用流量，500分钟通话时长，超出按0.15元/分钟计费",
        numberSelection: true,
        contractRules: "合约期6个月，合约期内注销需支付违约金100元；合约期满后可免费注销",
        age: "18-55周岁",
        location: "湖南",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",
            amount: "100元",
            rules: "用户激活后，商家获得100元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: true,
        listingDate: "2023-12-20",
        status: "在售",
        tags: ["特惠活动", "性价比高"]
    },
    {
        id: "P010",
        title: "家庭宽带100M包月79元",
        image: "./img/产品主图.jpg",
        operator: "宽带产品",
        monthlyFee: "79元/月",
        packageDetails: "100M光纤宽带，支持IPv6，含机顶盒",
        numberSelection: false,
        contractRules: "合约期12个月，合约期内注销需支付违约金200元；合约期满后可免费注销",
        age: "不限制",
        location: "北京",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",
            amount: "180元",
            rules: "用户激活并使用3个月后，分3个月返还商家180元"
        },
        settlementRules: "首充达标，连续3个月不注销",
        isProvincialProduct: true,
        listingDate: "2023-10-15",
        status: "在售",
        tags: ["宽带专属", "家庭优惠"]
    },
    {
        id: "P011",
        title: "联通千兆宽带299元包月",
        image: "./img/产品主图.jpg",
        operator: "宽带产品",
        monthlyFee: "299元/月",
        packageDetails: "1000M光纤宽带，支持IPv6，含4K机顶盒",
        numberSelection: false,
        contractRules: "合约期24个月，合约期内注销需支付违约金500元；合约期满后可免费注销",
        age: "不限制",
        location: "上海",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",
            amount: "300元",
            rules: "用户激活后，商家获得300元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: true,
        listingDate: "2023-11-01",
        status: "在售",
        tags: ["宽带专属", "超高速"]
    },
    {
        id: "P012",
        title: "移动5G畅享套餐99元包500G通用+3000分钟",
        image: "./img/产品主图.jpg",
        operator: "中国移动",
        monthlyFee: "99元/月",
        packageDetails: "包含500GB全国通用流量，3000分钟通话时长，支持5G网络",
        numberSelection: true,
        contractRules: "合约期24个月，合约期内注销需支付违约金400元；合约期满后可免费注销",
        age: "18-65周岁",
        location: "全国",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",
            amount: "250元",
            rules: "用户激活并使用3个月后，分3个月返还商家250元"
        },
        settlementRules: "首充达标，连续3个月不注销",
        isProvincialProduct: false,
        listingDate: "2023-12-01",
        status: "在售",
        tags: ["5G专属", "超大流量", "明星推荐"]
    },
    {
        id: "P013",
        title: "联通校园卡19元包60G通用+200分钟",
        image: "./img/产品主图.jpg",
        operator: "中国联通",
        monthlyFee: "19元/月",
        packageDetails: "包含60GB全国通用流量，200分钟通话时长，超出按0.15元/分钟计费",
        numberSelection: true,
        contractRules: "合约期6个月，合约期内注销需支付违约金100元；合约期满后可免费注销",
        age: "18-25周岁",
        location: "北京",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",
            amount: "70元",
            rules: "用户激活后，商家获得70元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: true,
        listingDate: "2023-07-01",
        status: "offline",
        tags: ["校园专属", "特惠套餐"]
    },
    {
        id: "P014",
        title: "移动亲情卡39元包130G通用+500分钟",
        image: "./img/产品主图.jpg",
        operator: "中国移动",
        monthlyFee: "39元/月",
        packageDetails: "包含130GB全国通用流量，500分钟通话时长，支持亲情号码共享",
        numberSelection: true,
        contractRules: "合约期12个月，合约期内注销需支付违约金200元；合约期满后可免费注销",
        age: "18-60周岁",
        location: "广东",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",
            amount: "120元",
            rules: "用户激活并使用3个月后，分3个月返还商家120元"
        },
        settlementRules: "首充达标，连续3个月不注销",
        isProvincialProduct: true,
        listingDate: "2023-06-15",
        status: "offline",
        tags: ["亲情套餐", "流量共享"]
    },
    {
        id: "P015",
        title: "电信欢乐卡29元包88G通用+600分钟",
        image: "./img/产品主图.jpg",
        operator: "中国电信",
        monthlyFee: "29元/月",
        packageDetails: "包含88GB全国通用流量，600分钟通话时长，娱乐APP定向流量",
        numberSelection: true,
        contractRules: "合约期12个月，合约期内注销需支付违约金150元；合约期满后可免费注销",
        age: "18-45周岁",
        location: "浙江",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",
            amount: "90元",
            rules: "用户激活后，商家获得90元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: true,
        listingDate: "2023-05-20",
        status: "offline",
        tags: ["特惠套餐", "娱乐专属"]
    },
    {
        id: "P016",
        title: "广电体验卡9元包30G通用+100分钟",
        image: "./img/产品主图.jpg",
        operator: "中国广电",
        monthlyFee: "9元/月",
        packageDetails: "包含30GB全国通用流量，100分钟通话时长，首月体验特惠",
        numberSelection: true,
        contractRules: "合约期3个月，合约期内注销需支付违约金50元；合约期满后可免费注销",
        age: "18-70周岁",
        location: "四川",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",
            amount: "40元",
            rules: "用户激活并使用3个月后，一次性返还商家40元"
        },
        settlementRules: "首充达标，连续3个月不注销",
        isProvincialProduct: true,
        listingDate: "2023-04-10",
        status: "offline",
        tags: ["体验套餐", "限时特惠"]
    },
    {
        id: "P017",
        title: "联通大视频卡59元包200G通用+1000分钟",
        image: "./img/产品主图.jpg",
        operator: "中国联通",
        monthlyFee: "59元/月",
        packageDetails: "包含200GB全国通用流量，1000分钟通话时长，视频APP免流",
        numberSelection: true,
        contractRules: "合约期24个月，合约期内注销需支付违约金300元；合约期满后可免费注销",
        age: "18-50周岁",
        location: "全国",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",
            amount: "150元",
            rules: "用户激活后，商家获得150元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: false,
        listingDate: "2023-03-15",
        status: "offline",
        tags: ["视频专属", "高清免流"]
    },
    {
        id: "P018",
        title: "移动游戏卡69元包280G通用+1500分钟",
        image: "./img/产品主图.jpg",
        operator: "中国移动",
        monthlyFee: "69元/月",
        packageDetails: "包含280GB全国通用流量，1500分钟通话时长，游戏加速",
        numberSelection: true,
        contractRules: "合约期24个月，合约期内注销需支付违约金400元；合约期满后可免费注销",
        age: "18-35周岁",
        location: "全国",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",
            amount: "180元",
            rules: "用户激活并使用3个月后，分3个月返还商家180元"
        },
        settlementRules: "首充达标，连续3个月不注销",
        isProvincialProduct: false,
        listingDate: "2023-02-20",
        status: "offline",
        tags: ["游戏专属", "低延迟"]
    },
    {
        id: "P019",
        title: "电信直播卡89元包320G通用+2000分钟",
        image: "./img/产品主图.jpg",
        operator: "中国电信",
        monthlyFee: "89元/月",
        packageDetails: "包含320GB全国通用流量，2000分钟通话时长，上传加速",
        numberSelection: true,
        contractRules: "合约期24个月，合约期内注销需支付违约金500元；合约期满后可免费注销",
        age: "18-45周岁",
        location: "全国",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "instant",
            amount: "200元",
            rules: "用户激活后，商家获得200元返佣"
        },
        settlementRules: "首充达标，次月不注销",
        isProvincialProduct: false,
        listingDate: "2023-01-15",
        status: "offline",
        tags: ["直播专属", "高速上传"]
    },
    {
        id: "P020",
        title: "家庭宽带50M包月49元",
        image: "./img/产品主图.jpg",
        operator: "宽带产品",
        monthlyFee: "49元/月",
        packageDetails: "50M光纤宽带，支持IPv6",
        numberSelection: false,
        contractRules: "合约期12个月，合约期内注销需支付违约金150元；合约期满后可免费注销",
        age: "不限制",
        location: "江苏",
        delivery: {
            forbiddenAreas: ["新疆", "西藏", "港澳台"]
        },
        commission: {
            type: "monthly",
            amount: "100元",
            rules: "用户激活并使用3个月后，分3个月返还商家100元"
        },
        settlementRules: "首充达标，连续3个月不注销",
        isProvincialProduct: true,
        listingDate: "2022-12-20",
        status: "offline",
        tags: ["宽带专属", "实惠套餐"]
    }
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播图
    initCarousel();
    
    // 初始化运营商选择
    initOperatorSelection();
    
    // 初始化筛选条件
    initFilterTabs();
    
    // 初始化搜索图标
    initSearchIcon();
    
    // 初始渲染产品列表
    renderProductList(products);

    // 初始化导出和分享按钮
    initExportAndShare();
});

// 初始化运营商选择
function initOperatorSelection() {
    const operatorItems = document.querySelectorAll('.operator-item');
    operatorItems.forEach(item => {
        item.addEventListener('click', function() {
            operatorItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            filterProducts();
        });
    });
}

// 初始化筛选条件
function initFilterTabs() {
    const filterItems = document.querySelectorAll('.filter-bar .filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            filterItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            filterProducts();
        });
    });
}

// 统一的筛选函数
function filterProducts() {
    const activeOperator = document.querySelector('.operator-item.active span').textContent;
    const activeFilter = document.querySelector('.filter-bar .filter-item.active').textContent;
    
    let filteredProducts = [...products];
    
    // 运营商筛选
    if (activeOperator !== '全部产品') {
        filteredProducts = filteredProducts.filter(p => p.operator === activeOperator);
    }
    
    // 状态筛选
    switch(activeFilter) {
        case '秒返':
            filteredProducts = filteredProducts.filter(p => 
                p.commission.type === 'instant' && p.status !== 'offline'
            );
            break;
        case '月返':
            filteredProducts = filteredProducts.filter(p => 
                p.commission.type === 'monthly' && p.status !== 'offline'
            );
            break;
        case '已下架':
            filteredProducts = filteredProducts.filter(p => p.status === 'offline');
            break;
    }
    
    renderProductList(filteredProducts);
}

// 渲染产品列表
function renderProductList(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-item';
        // 添加点击事件到整个卡片
        productCard.onclick = () => showProductDetails(product.id);
        
        productCard.innerHTML = `
            <div class="product-image-wrapper">
                <span class="product-id">${product.id}</span>
                <img src="${product.image}" alt="${product.title}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-title-wrapper">
                    <h3 class="product-title ${product.status === 'offline' ? 'offline' : ''}">${product.title}</h3>
                    <span class="return-type ${product.commission.type === 'instant' ? 'instant' : 'monthly'}">
                        ${product.commission.type === 'instant' ? '秒返' : '月返'}
                    </span>
                </div>
                <div class="product-meta">
                    ${product.monthlyFee} | ${product.location} | ${product.age}
                </div>
                <div class="product-tags">
                    ${product.tags.map(tag => `<span class="tag tag-${getTagClass(tag)}">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        productList.appendChild(productCard);
    });

    // 更新产品数量显示
    document.getElementById('productCount').textContent = products.length;
}

// 辅助函数：获取标签的CSS类名
function getTagClass(tag) {
    if (tag.includes('限时')) return 'limited-time';
    if (tag.includes('仅剩')) return 'location';
    if (tag.includes('数量')) return 'quantity';
    if (tag.includes('流量')) return 'data';
    return 'default';
}

// 添加检测是否在微信浏览器中的函数
function isWeixinBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('micromessenger') !== -1;
}

// 修改导出表格按钮的事件监听
function initExportAndShare() {
    const exportBtn = document.querySelector('.export-btn');
    const shareBtn = document.querySelector('.share-btn');

    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            if (isWeixinBrowser()) {
                // 在微信中显示跳转浏览器的提示和选项
                const html = `
                    <div class="modal-mask" onclick="closeAlert(event)">
                        <div class="alert-dialog">
                            <div class="alert-content">
                                <p style="margin-bottom: 15px;">当前环境无法直接导出表格</p>
                                <p style="font-size: 13px; color: #666; margin-bottom: 20px;">请在浏览器中打开后再导出</p>
                            </div>
                            <div class="alert-buttons">
                                <button class="alert-button" onclick="openInBrowser()">在浏览器中打开</button>
                                <button class="alert-button secondary" onclick="closeAlert(event)">取消</button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.insertAdjacentHTML('beforeend', html);
            } else {
                // 非微信环境下显示导出选项
                const html = `
                    <div class="modal-mask" onclick="closeAlert(event)">
                        <div class="export-dialog">
                            <h3>导出表格</h3>
                            <div class="export-options">
                                <button onclick="handleExport('current')">导出当前筛选结果</button>
                                <button onclick="handleExport('all')">导出全部数据</button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.insertAdjacentHTML('beforeend', html);
            }
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', showShareDialog);
    }
}

// 添加在浏览器中打开的函数
function openInBrowser() {
    // 获取当前URL
    const url = window.location.href;
    // 使用微信内置浏览器打开
    window.location.href = `browseropen://${url}`;
    // 关闭提示框
    document.querySelector('.modal-mask')?.remove();
}

// 显示分享对话框
function showShareDialog() {
    const html = `
        <div class="modal-mask" onclick="closeAlert(event)">
            <div class="export-dialog">
                <h3>分享资料</h3>
                <p>请选择分享方式</p>
                <div class="export-options">
                    <button onclick="handleShare('wechat')">微信好友</button>
                    <button onclick="handleShare('moments')">朋友圈</button>
                    <button onclick="handleShare('copy')">复制链接</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
}

// 处理分享功能
function handleShare(type) {
    switch(type) {
        case 'wechat':
            if (isWeixinBrowser()) {
                // 调用微信分享API
                // 这里需要根据你的微信分享配置来实现
            } else {
                showAlert('请在微信中打开进行分享');
            }
            break;
        case 'moments':
            if (isWeixinBrowser()) {
                // 调用微信分享到朋友圈API
                // 这里需要根据你的微信分享配置来实现
            } else {
                showAlert('请在微信中打开进行分享');
            }
            break;
        case 'copy':
            // 复制当前页面链接
            const currentUrl = window.location.href;
            navigator.clipboard.writeText(currentUrl)
                .then(() => showAlert('链接已复制'))
                .catch(() => showAlert('复制失败，请手动复制'));
            break;
    }
    // 关闭分享对话框
    document.querySelector('.modal-mask')?.remove();
}

// 修改提示框样式
function showAlert(message) {
    const html = `
        <div class="modal-mask" onclick="closeAlert(event)">
            <div class="alert-dialog">
                <div class="alert-content">${message}</div>
                <button class="alert-button" onclick="closeAlert(event)">确定</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
}

function closeAlert(event) {
    const mask = event.target.closest('.modal-mask');
    if (mask) {
        mask.remove();
    }
}

// 修改轮播图功能
function initCarousel() {
    const images = document.querySelectorAll('.carousel-inner img');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    
    // 初始化显示第一张图片
    images[0].classList.add('active');
    indicators[0].classList.add('active');
    
    // 自动轮播
    function autoPlay() {
        images[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % images.length;
        
        images[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }
    
    // 点击指示器切换图片
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            indicators[currentIndex].classList.remove('active');
            
            currentIndex = index;
            
            images[currentIndex].classList.add('active');
            indicators[currentIndex].classList.add('active');
        });
    });
    
    // 设置自动轮播间隔
    setInterval(autoPlay, 3000);  // 每3秒切换一次
}

// 修改搜索图标点击事件
function initSearchIcon() {
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            showFilterPanel();
        });
    }
}

// 修改筛选面板显示函数
function showFilterPanel() {
    const filterPanelHtml = `
        <div class="modal-mask" onclick="closeFilterPanel(event)">
            <div class="filter-panel">
                <div class="filter-header">筛选条件</div>
                <div class="filter-content">
                    <div class="filter-section">
                        <div class="filter-section-title">排序方式</div>
                        <select class="filter-select" id="sortSelect">
                            <option value="">请选择排序方式</option>
                            <option value="priceAsc">价格从低到高</option>
                            <option value="priceDesc">价格从高到低</option>
                            <option value="dateDesc">最新上架</option>
                        </select>
                    </div>
                    <div class="filter-section">
                        <div class="filter-section-title">实测下单地址</div>
                        <input type="text" 
                               class="filter-input" 
                               id="deliveryAreaInput" 
                               placeholder="请输入要下单的省份，如：浙江">
                    </div>
                    <div class="filter-section">
                        <div class="filter-section-title">是否选号</div>
                        <div class="filter-radio-group">
                            <label><input type="radio" name="numberSelection" value="true"> 是</label>
                            <label><input type="radio" name="numberSelection" value="false"> 否</label>
                        </div>
                    </div>
                    <div class="filter-section">
                        <div class="filter-section-title">是否省内产品</div>
                        <div class="filter-radio-group">
                            <label><input type="radio" name="isProvincial" value="true"> 是</label>
                            <label><input type="radio" name="isProvincial" value="false"> 否</label>
                        </div>
                    </div>
                    <div class="filter-section">
                        <div class="filter-section-title">产品名称</div>
                        <input type="text" class="filter-input" id="nameInput" placeholder="请输入产品名称关键词">
                    </div>
                    <div class="filter-section">
                        <div class="filter-section-title">归属地</div>
                        <select class="filter-select" id="locationSelect">
                            <option value="">请选择归属地</option>
                            <option value="全国">全国</option>
                            ${getAllProvinces().map(province => 
                                `<option value="${province}">${province}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="filter-section">
                        <div class="filter-section-title">结算规则</div>
                        <input type="text" class="filter-input" id="settlementInput" placeholder="请输入结算规则关键词">
                    </div>
                    <div class="filter-section">
                        <div class="filter-section-title">产品状态</div>
                        <select class="filter-select" id="statusSelect">
                            <option value="">全部</option>
                            <option value="online">在售中</option>
                            <option value="offline">已下架</option>
                        </select>
                    </div>
                </div>
                <div class="filter-buttons">
                    <button class="reset-btn" onclick="resetFilters()">重置</button>
                    <button class="confirm-btn" onclick="applyFilters()">确定</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', filterPanelHtml);
    
    // 添加动画效果
    requestAnimationFrame(() => {
        document.querySelector('.filter-panel').classList.add('active');
    });
}

// 获取所有省份列表（除港澳台外）
function getAllProvinces() {
    return [
        "北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江",
        "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南",
        "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州",
        "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆"
    ];
}

// 重置筛选条件
function resetFilters() {
    const filterPanel = document.querySelector('.filter-panel');
    if (!filterPanel) return;

    // 重置所有select
    filterPanel.querySelectorAll('select').forEach(select => {
        select.value = '';
    });

    // 重置所有radio
    filterPanel.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });

    // 重置所有text input
    filterPanel.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
    });
}

// 应用筛选条件
function applyFilters() {
    // 获取所有筛选值
    const sortValue = document.getElementById('sortSelect')?.value;
    const deliveryArea = document.getElementById('deliveryAreaInput')?.value.trim();
    const numberSelection = document.querySelector('input[name="numberSelection"]:checked')?.value;
    const isProvincial = document.querySelector('input[name="isProvincial"]:checked')?.value;
    const nameKeyword = document.getElementById('nameInput')?.value.trim().toLowerCase();
    const location = document.getElementById('locationSelect')?.value;
    const settlementKeyword = document.getElementById('settlementInput')?.value;
    const status = document.getElementById('statusSelect')?.value; // 获取产品状态筛选值

    let filteredProducts = [...products];

    // 应用产品状态筛选
    if (status) {
        switch(status) {
            case 'online':
                filteredProducts = filteredProducts.filter(p => p.status !== 'offline');
                break;
            case 'offline':
                filteredProducts = filteredProducts.filter(p => p.status === 'offline');
                break;
        }
    }

    // 应用实测下单地址筛选
    if (deliveryArea) {
        filteredProducts = filteredProducts.filter(p => 
            !p.delivery.forbiddenAreas.some(area => 
                area.includes(deliveryArea) || deliveryArea.includes(area)
            )
        );
    }

    if (numberSelection) {
        filteredProducts = filteredProducts.filter(p => 
            p.numberSelection === (numberSelection === 'true')
        );
    }

    if (isProvincial) {
        filteredProducts = filteredProducts.filter(p => 
            p.isProvincialProduct === (isProvincial === 'true')
        );
    }

    if (nameKeyword) {
        filteredProducts = filteredProducts.filter(p => {
            // 检查ID匹配（移除'P'前缀后匹配）
            const idMatch = p.id.toLowerCase().replace('p', '').includes(nameKeyword);
            
            // 检查标题匹配
            const titleMatch = p.title.toLowerCase().includes(nameKeyword);
            
            // 检查流量数值匹配
            const flowMatch = p.packageDetails.toLowerCase().replace(/[^0-9]/g, '').includes(nameKeyword.replace(/[^0-9]/g, ''));
            
            // 如果输入的是纯数字，检查月租费用匹配
            const isNumber = /^\d+$/.test(nameKeyword);
            const feeMatch = isNumber ? p.monthlyFee.replace(/[^0-9]/g, '').includes(nameKeyword) : false;
            
            return idMatch || titleMatch || flowMatch || feeMatch;
        });
    }

    if (location) {
        filteredProducts = filteredProducts.filter(p => 
            p.location === location
        );
    }

    if (settlementKeyword) {
        filteredProducts = filteredProducts.filter(p => 
            p.settlementRules.toLowerCase().includes(settlementKeyword.toLowerCase())
        );
    }

    // 应用排序
    if (sortValue) {
        switch(sortValue) {
            case 'priceAsc':
                filteredProducts.sort((a, b) => 
                    parseInt(a.monthlyFee) - parseInt(b.monthlyFee)
                );
                break;
            case 'priceDesc':
                filteredProducts.sort((a, b) => 
                    parseInt(b.monthlyFee) - parseInt(a.monthlyFee)
                );
                break;
            case 'dateDesc':
                filteredProducts.sort((a, b) => 
                    new Date(b.listingDate) - new Date(a.listingDate)
                );
                break;
        }
    }

    // 渲染筛选后的结果
    renderProductList(filteredProducts);
    
    // 关闭筛选面板
    const modalMask = document.querySelector('.modal-mask');
    if (modalMask) {
        modalMask.remove();
    }
}

// 关闭筛选面板
function closeFilterPanel(event) {
    if (event.target.classList.contains('modal-mask')) {
        event.target.remove();
    }
}

// 添加标签页切换函数
function switchTab(event, tabId) {
    // 获取所有标签和内容
    const tabs = event.target.closest('.modal-tabs').querySelectorAll('.tab');
    const contents = event.target.closest('.modal-content').querySelectorAll('.tab-content');
    
    // 移除所有活动状态
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // 添加新的活动状态
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// 修改产品详情弹窗函数
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalHtml = `
        <div class="modal-mask" onclick="closeProductModal(event)">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>产品信息</h3>
                    <span class="close-btn" onclick="closeProductModal(event)">×</span>
                </div>
                <div class="detail-tabs">
                    <div class="tab active" onclick="switchDetailTab(this, 'details')">套餐详情</div>
                    <div class="tab" onclick="switchDetailTab(this, 'info')">相关资料</div>
                </div>
                <div class="modal-body">
                    <div id="details" class="tab-content active">
                        <img src="./img/产品主图1.jpg" alt="产品主图" class="detail-image">
                        <img src="./img/产品详情2.jpg" alt="产品详情" class="detail-image">
                    </div>
                    <div id="info" class="tab-content">
                        <div class="product-info-details">
                            <div class="info-item">
                                <label>ID</label>
                                <span>${product.id}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>运营商</label>
                                <span>${product.operator}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>产品名称</label>
                                <span>${product.title}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>月租费用</label>
                                <span>${product.monthlyFee}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>套餐详情</label>
                                <span>${product.packageDetails}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>合约规则</label>
                                <span>${product.contractRules}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>年龄限制</label>
                                <span>${product.age}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>是否选号</label>
                                <span>${product.numberSelection ? '是' : '否'}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>归属地</label>
                                <span>${product.location}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>禁发区域</label>
                                <span>${product.delivery.forbiddenAreas.join('、')}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>返佣类型</label>
                                <span>${product.commission.type === 'instant' ? '秒返' : '月返'}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>返佣规则</label>
                                <span>${product.commission.rules}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>结算规则</label>
                                <span>${product.settlementRules}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>是否省内</label>
                                <span>${product.isProvincialProduct ? '是' : '否'}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>上架时间</label>
                                <span>${product.listingDate}</span>
                            </div>
                            <div class="info-divider"></div>
                            <div class="info-item">
                                <label>产品状态</label>
                                <span>${product.status === 'offline' ? '已下架' : '在售'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// 切换标签页
function switchDetailTab(tab, contentId) {
    // 移除所有标签的active类
    const tabs = tab.parentElement.getElementsByClassName('tab');
    Array.from(tabs).forEach(t => t.classList.remove('active'));
    
    // 添加active类到当前点击的标签
    tab.classList.add('active');
    
    // 切换内容显示
    const contents = tab.closest('.modal-content').getElementsByClassName('tab-content');
    Array.from(contents).forEach(c => c.classList.remove('active'));
    document.getElementById(contentId).classList.add('active');
}

// 关闭弹窗
function closeProductModal(event) {
    if (event.target.classList.contains('modal-mask') || 
        event.target.classList.contains('close-btn')) {
        event.target.closest('.modal-mask').remove();
    }
}

// 处理导出功能
function handleExport(type) {
    try {
        let dataToExport;
        if (type === 'all') {
            dataToExport = products;
        } else {
            // 获取当前筛选条件
            const activeOperator = document.querySelector('.operator-item.active span').textContent;
            const activeFilter = document.querySelector('.filter-item.active')?.textContent;
            
            dataToExport = products.filter(p => {
                let match = true;
                // 运营商筛选
                if (activeOperator !== '全部产品') {
                    match = match && p.operator === activeOperator;
                }
                // 返现类型筛选
                if (activeFilter) {
                    switch(activeFilter) {
                        case '秒返':
                            match = match && p.commission.type === 'instant' && p.status !== 'offline';
                            break;
                        case '月返':
                            match = match && p.commission.type === 'monthly' && p.status !== 'offline';
                            break;
                        case '已下架':
                            match = match && p.status === 'offline';
                            break;
                    }
                }
                return match;
            });
        }

        // 创建工作表
        const data = dataToExport.map(p => ({
            'ID': p.id,
            '运营商': p.operator,
            '产品名称': p.title,
            '月租费用': p.monthlyFee,
            '套餐详情': p.packageDetails,
            '合约规则': p.contractRules,
            '年龄限制': p.age,
            '是否选号': p.numberSelection ? '是' : '否',
            '归属地': p.location,
            '禁发区域': p.delivery.forbiddenAreas.join('、'),
            '返佣类型': p.commission.type === 'instant' ? '秒返' : '月返',
            '返佣规则': p.commission.rules,
            '结算规则': p.settlementRules,
            '是否省内产品': p.isProvincialProduct ? '是' : '否',
            '上架时间': p.listingDate,
            '产品状态': p.status === 'offline' ? '已下架' : '在售'
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        
        // 设置列宽
        const cols = [
            { wch: 8 },  // ID
            { wch: 12 }, // 运营商
            { wch: 35 }, // 产品名称
            { wch: 12 }, // 月租费用
            { wch: 40 }, // 套餐详情
            { wch: 35 }, // 合约规则
            { wch: 12 }, // 年龄限制
            { wch: 10 }, // 是否选号
            { wch: 12 }, // 归属地
            { wch: 20 }, // 禁发区域
            { wch: 10 }, // 返佣类型
            { wch: 35 }, // 返佣规则
            { wch: 25 }, // 结算规则
            { wch: 12 }, // 是否省内产品
            { wch: 12 }, // 上架时间
            { wch: 10 }  // 产品状态
        ];
        ws['!cols'] = cols;

        // 创建工作簿
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "产品列表");
        
        // 将工作簿转换为二进制数据
        const wbout = XLSX.write(wb, {
            bookType: 'xlsx',
            type: 'array'
        });

        // 创建 Blob 对象
        const blob = new Blob([wbout], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });

        // 创建下载链接
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `产品列表_${new Date().toLocaleDateString()}.xlsx`;
        
        // 添加到文档并触发点击
        document.body.appendChild(link);
        link.click();
        
        // 清理
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);

        // 关闭弹窗
        document.querySelector('.modal-mask')?.remove();
    } catch (error) {
        console.error(error);
        showAlert('导出失败，请重试');
    }
}