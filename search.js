
  const products = [
    { name: "壓克力飼養箱", price: "NT$1,000", img: "壓克力飼養箱.jpg" },
    { name: "南美角蛙", price: "NT$1,000", img: "南美角蛙l.jpg" },
    { name: "兩棲爬蟲 · 不銹鋼餵食夾", price: "NT$250", img: "兩棲爬蟲 · 不銹鋼餵食夾.jpg" },
    { name: "兩棲爬蟲 · 犀牛頭骨躲藏洞", price: "NT$360", img: "兩棲爬蟲 · 犀牛頭骨躲藏洞.jpg" },
    { name: "Rep-Cal 爬蟲專用D3鈣粉", price: "NT$350", img: "Rep-Cal 爬蟲專用D3鈣粉.jpg" },
    { name: "Rep-Cal 爬蟲專用綜合維生素", price: "NT$350", img: "Rep-Cal 爬蟲專用綜合維生素.jpg" },
    { name: "兩棲爬蟲．岩洞躲避屋", price: "NT$200", img: "兩棲爬蟲．岩洞躲避屋.jpg" },
    { name: "兩棲爬蟲．躲藏樹洞", price: "NT$150", img: "兩棲爬蟲．躲藏樹洞.jpg" },
    { name: "球蟒 · 火豹紋恩奇", price: "NT$6,000", img: "球蟒 · 火豹紋恩奇.jpg" },
    { name: "大黃蜂蟾蜍", price: "NT$3,600 ", img: "大黃蜂蟾蜍.jpg" },
    { name: "肥尾守宮：Oreo", price: "NT$3,680", img: "肥尾守宮：Oreo.jpg" },
    { name: "肥尾守宮．WO Oreo het Patty", price: "NT$3,680", img: "肥尾守宮．WO Oreo het Patty.jpg" },
    { name: "肥尾守宮·normal", price: "NT$2,000 ", img: "肥尾守宮·normal.jpg" },
    { name: "蘇卡達象龜", price: "NT$2,000", img: "蘇卡達象龜.jpg" },
    { name: "豹紋守宮·黑夜", price: "NT$15,000", img: "豹紋守宮·黑夜.jpg" },
    { name: "赫曼陸龜", price: "NT$1,100 ", img: "赫曼陸龜.jpg" },
    { name: "防逃脫食盆", price: "NT$100", img: "防逃脫食盆.jpg" },
    { name: "高夠力 · 水龜飼料", price: "NT$135", img: "高動力 · 水龜飼料.jpg" },
    { name: "鬆獅蜥·zero ", price: "NT$4,500", img: "鬆獅蜥·zero .jpg" },
    { name: "波子角蛙", price: "NT$1,800", img: "波子角蛙.jpg" },
];
function openSearchModal() {
  document.getElementById('searchModal').classList.add('active');
}

function closeSearchModal() {
  document.getElementById('searchModal').classList.remove('active');
}

function handleSearch(event) {
  if (event.key === 'Enter') {
      const query = event.target.value.trim().toLowerCase();
      const matches = products.filter(product =>
          product.name.toLowerCase().includes(query)
      );

      if (matches.length > 0) {
          // 保存搜尋結果到 localStorage
          localStorage.setItem('searchResults', JSON.stringify(matches));
          
          // 跳轉到 search.html 頁面
          window.location.href = 'search.html';
      } else {
          alert("目前無此商品喔!!!");
      }
  }
}
document.addEventListener('DOMContentLoaded', function() {
  // 讀取搜尋結果
  const searchResults = JSON.parse(localStorage.getItem('searchResults'));
  
  if (searchResults && searchResults.length > 0) {
      const productGrid = document.querySelector('.product-grid1');
      productGrid.innerHTML = ''; // 清空原本的內容

      // 顯示搜尋結果
      searchResults.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
              <img src="${product.img}" alt="商品圖片">
              <h3>${product.name}</h3>
              <p>${product.price}</p>
          `;
          productGrid.appendChild(productCard);
      });
  } else {
      alert("無搜尋結果");
  }
});
  function openContactModal() {
    document.getElementById('contactModal').classList.add('active');
  }
  
  function closeContactModal() {
    document.getElementById('contactModal').classList.remove('active');
  }
  function openLoginModal(){
    window.location.href = 'login.html';
  }
  function submitContactForm() {
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
  
    let valid = true;
  
    // 驗證電子郵件格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      emailError.style.display = 'block';
      emailError.textContent = '請輸入有效的電子郵件地址';
      valid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    // 驗證訊息內容是否非空
    if (!message) {
      messageError.style.display = 'block';
      messageError.textContent = '訊息不能為空';
      valid = false;
    } else {
      messageError.style.display = 'none';
    }
  
    if (valid) {
      alert('感謝您的聯絡，我們會儘快回覆！');
  
      // 清空輸入框內容
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
  
      closeContactModal();
    }
  }
  function openCartModal(){
    window.location.href = 'cart.html';
  }
  