// Prop là read-only
//  Có một số props đặc biệt
// Thư viện proptype => Xác thực kiểu dữ liệu
// Có thể sử dụng typescript

// ? thường đung với các thuộc tính
// && thường dùng để hiện thị có điều kiện

const App = () => {
  return <div className="container">Hello </div>;
};

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
