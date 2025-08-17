import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [countCart, setCountCart] = useState(0)
  const [products, setProducts] = useState([])
  const [clickedButtons, setClickedButtons] = useState(new Set())


  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/products.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('상품 데이터 로드 실패:', error))
  }, [])

  // useEffect(() => {
  //   fetch('/data/products.json')
  //     .then(res => res.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.error('상품 데이터 로드 실패:', error))
  // }, [])

  const handleCartClick = (productId) => {
    if (!clickedButtons.has(productId)) {
      setCountCart(countCart + 1)
      setClickedButtons(prev => new Set([...prev, productId]))
    }
  }

  return (
    <div className="app-frame">
      <nav className="menu-fixed">
        {/* 메뉴바 배경 SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 430 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        >
          <rect width="430" height="69" fill="black"/>
        </svg>
        {/* 장바구니+뱃지 */}
        <div style={{position: 'relative', width: 40, height: 40, zIndex: 1, marginLeft: 'auto'}}>
          {/* 장바구니 아이콘*/}
          <svg width="30" height="30" viewBox="380 22 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M388 22.5C387.19 22.5 386.437 22.7115 385.74 23.1346C385.043 23.5385 384.488 24.0962 384.073 24.8077C383.678 25.5192 383.48 26.2885 383.48 27.1154V28.0385H379.017L378.96 28.9038L378 46.5H398L397.04 28.9038L396.983 28.0385H392.52V27.1154C392.52 26.2885 392.313 25.5192 391.898 24.8077C391.503 24.0962 390.957 23.5385 390.26 23.1346C389.563 22.7115 388.81 22.5 388 22.5ZM388 24.3462C388.753 24.3462 389.394 24.6154 389.921 25.1538C390.448 25.6923 390.712 26.3462 390.712 27.1154V28.0385H385.288V27.1154C385.288 26.3462 385.552 25.6923 386.079 25.1538C386.606 24.6154 387.247 24.3462 388 24.3462ZM380.712 29.8846H383.48V32.6538H385.288V29.8846H390.712V32.6538H392.52V29.8846H395.288L396.079 44.6538H379.921L380.712 29.8846Z" fill="white" transform="translate(5, 0)"/>
          </svg>
          {/* 숫자 뱃지 */}
          <div style={{
            position: 'absolute',
            top: 18,
            right: 5,
            width: 15,
            height: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="7.5" fill="white"/>
            </svg>
            <span style={{
              position: 'absolute',
              top: countCart > 99 ? 1 : countCart >= 10 ? 0 : -2,
              left: countCart > 99 ? 1 : countCart >= 10 ? 3 : 4,
              width: '100%',
              height: '100%',
              fontSize: countCart > 99 ? 8 : countCart >= 10 ? 9 : 12,
              color: 'black',
              fontWeight: 'bold',
              pointerEvents: 'none'
            }}>{countCart > 99 ? '99+' : countCart}</span>
          </div>
        </div>
      </nav>

      {/* 상품 목록 페이지 */}
      <div className="product-list-page">
        {/* 상단 제목/설명 */}
        <header className="product-list-header">
          <h1>신발 상품 목록</h1>
          <p>현재 {products.length}개의 상품이 있습니다.</p>
        </header>
        
        <section className="product-list-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.brand} className="product-image" />
              <div className="product-brand">{product.brand}</div>
              <div className="product-desc">{product.desc}</div>
              <div className="product-price">{product.price.toLocaleString()}원</div>
              <button 
                className={`cart-btn ${clickedButtons.has(product.id) ? 'clicked' : ''}`}
                onClick={() => handleCartClick(product.id)}
              >
                {clickedButtons.has(product.id) ? '담음' : '담기'}
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App
