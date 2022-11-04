// Prop là read-only
//  Có một số props đặc biệt
// Thư viện proptype => Xác thực kiểu dữ liệu
// Có thể sử dụng typescript

// ? thường đung với các thuộc tính
// && thường dùng để hiện thị có điều kiện

function Header() {
  return <div className="Header-container">Our Reviews</div>;
}

function ReviewCard() {
  return (
    <div className="ReivewCard">
      <div className="Review">
        <div className="Author">
          <div className="Avatar">
            <img src="" alt="" srcset="" />
          </div>
          <div className="Info">
            <p className="Info-name">Susan Smith</p>
            <p className="Info-job">WEB DEVELOPER</p>
          </div>
        </div>
        <div className="Content">
          I'm baby meggings twee health goth +1. Bicycle rights tumeric
          chartreuse before they sold out chambray pop-up. Shaman humblebrag
          pickled coloring book salvia hoodie, cold-pressed four dollar toast
          everyday carry
        </div>
      </div>
      <div className="Control">
        <div className="Control-left"></div>
        <div className="Control-right"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <ReviewCard />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);

// Key gíups react định danh các component
// Sẽ trường hợp sử dụng keys

// ##Xử lý sự kiện, trạng thái
// + Cách gán sự kiện: Truyền trực tiếp trên jsx element
// + Các thuộc tính sự kiện sử dụng camelCase: onClick, onMouseOver, onDbClick
// + Truyền trực tuepes các hamg (giá trị hàm, không phải gọi hàm)

// const hadleClick = () => {}
// onClick = {handleCLick};

// + Để truyền thêm các tham số cho hàm handler thì sử dụng arrow function hoặc là bind

// const handleChange = (event, name) => {}
// onClick ={(e) => handleChange(e, "Ba")}
// onClick = {handleChange.bind(null, "Ba")}

// + EventObject => SytheticEvent = sự kiện tổng hợp
