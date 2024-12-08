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
  