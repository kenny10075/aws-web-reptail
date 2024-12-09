const products = [
    "豹紋守宮：Patty",
    "高動力 · 水龜飼料",
    "兩棲爬蟲 · 不銹鋼餵食夾",
    "兩棲爬蟲 · 犀牛頭骨躲藏洞",
    "球蟒 · 香蕉火"
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
        product.toLowerCase().includes(query)
      );
  
      if (matches.length > 0) {
        // 保存搜尋結果到 localStorage 並跳轉
        localStorage.setItem('searchResults', JSON.stringify(matches));
        window.location.href = 'search.html';
      } else {
        alert("目前無此商品喔!!!");
      }
    }
  }
  function openContactModal() {
    document.getElementById('contactModal').classList.add('active');
  }
  
  function closeContactModal() {
    document.getElementById('contactModal').classList.remove('active');
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
  