const app = document.getElementById("app");


const Item = (props)=>(
    
    <div className="item">
        <a href={props.href}>
        <img className="img-item" src={props.src} alt="anh" />
        <p className="text-item">{props.text}</p>
        </a>
        
    </div>
);

class Card extends React.Component {
    render() {
        return (
            <div className="list">
    <Item href="/" src = "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn" text= "Thời Trang Nam"/>
    <Item href="/" src = "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn" text= "Điện thoại và Phụ Kiện"/>
    <Item href="/" src = "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn" text= "Thiết Bị Điện Tử"/>
    <Item href="/" src = "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn" text= "Máy Tính & Laptop"/>
    <Item href="/" src = "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn" text= "Máy Ảnh & Máy Quay Phim"/>

    <Item href="/" src = "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn" text= "Đồng Hồ"/>

    <Item href="/" src = "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn" text= "Giày Dép Nam"/>

    <Item href="/" src = "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn" text= "Thiết Bị Điện Gia Dụng"/>
    <Item href="/" src = "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn" text= "Thể Thao & Du Lịch"/>
    <Item href="/" src = "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn" text= "Ô Tô & Xe Máy & Xe Đạp"/>
    <Item href="/" src = "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn" text= "Thời Trang Nữ"/>
    <Item href="/" src = "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn" text= "Mẹ & Bé"/>
    <Item href="/" src = "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn" text= "Nhà Cửa & Đời Sống"/>
    <Item href="/" src = "https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn" text= "Sắc Đẹp"/>
    <Item href="/" src = "https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn" text= "Sức Khỏe"/>
    <Item href="/" src = "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn" text= "Giày Dép Nữ"/>
    <Item href="/" src = "https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn" text= "Túi Ví Nữ"/>
    <Item href="/" src = "https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn" text= "Phụ Kiện & Trang Sức Nữ"/>
    <Item href="/" src = "https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn" text= "Bách Hóa Online"/>
    <Item href="/" src = "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn" text= "Nhà Sách Online"/>
    </div>

        );
    }
}




const Categories = ()=>(
    
    <div className="categories">
        <h2 className="heading">Danh Mục</h2>
        <Card/>
    </div>
);


ReactDOM.render(<Categories />,app);


