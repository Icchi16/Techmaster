// Prop là read-only
//  Có một số props đặc biệt
// Thư viện proptype => Xác thực kiểu dữ liệu
// Có thể sử dụng typescript

// ? thường đung với các thuộc tính
// && thường dùng để hiện thị có điều kiện

// return <div className="container">Hello </div>;
const HandleForm = () => {
  const handleSummit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <form action="">
      <input type="text" name="username" />
      <select name="gender" id="">
        <option value="M" key="">
          Male
        </option>
        <option value="F" key="">
          Female
        </option>
      </select>
      <button onClick={handleSummit}>Submit em di</button>
    </form>
  );
};

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

class State extends React.Component {
  state = { value: 1 };
  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>Decrease em di</button>;
        <button onClick={this.increment}>Increase em di</button>;
        <div>{this.state.value}</div>
      </div>
    );
  }
}

// class component => stateful component
// fucntion component => staeless componnent

// State khacs với Props:
// + State là trạng thái thuộc về 1 component / Props là giá trị truyền từ component cha xuống component
// + State thì có thể thay đổi được/ Prop thì không đo được

// ## Hook là hàm đặc biệt cho phép Function component sử dụng được các tính năng CLass Component, ví dụ
// state. lifecycle, ... => Biến fucntion component thành Stateful componetn

// Tất cả các hook đeuuef bắt đầu bằng use => useSatate, useEffect, useRef, useMemo,
// Có thể tự tạo các custom hook dựa trên các hook có sẵn

// useState
// Khai báo một giá trị trạng thái (cho phép Fucntion component ghi nhớ 1 giá trị giữa mỗi lần render). useState trả về một cặp giá trị (mảng 2 phần tử)

// Cú Pháp
// const [statem setState] = useState(initialValue)
// innitalValue: Có thê rlaf một giá trị hoặc một hàm trả vè các giá trị, sử dụng hàm
// (lazy initital state) trong trường hợp mà giá trị trạng thái ban đầu cần phải tính toán phức tạp

// State có thể là bất kể giá trị gì là chuỗi, null, undefined, object
// Sử dụng state thì truy cập trực tiếp qua biến state

// Để cập nhật state thì sử dụng hàm setState, lưu ý:
// + Không gọi setState trực tiếp trong phần thân hàm

const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const [color, setColor] = React.useRef("color: #333333");

  if (count < 0) {
    setColor("color: green");
  } else if (count > 0) {
    setColor("color: red");
  } else {
    setColor("color: #333333");
  }

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <button style={color}>{count}</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);

// ## useRef
// Tương tự như State, cho phép function component ghi nhớ giá trị giữa mỗi lần render, tuy nhiên khác biệt lớn nhất là nó không kích hoạt render lại component khi thay đổi giá trị

// ## useContext
