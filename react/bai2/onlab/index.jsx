const app = document.getElementById("app");


const menu = [
    { href: "/", label: "Homepage" },
    { href: "/about", label: "About" },
    {  href: "/contact", label: "Contact" },
    { href: "/products", label: "Products" },
    { href: "/blogs", label: "Blog" },
    { href: "/more", label: "More" },
];

const Item = (props)=>(
    
        <li className="item">
        <a href={props.href}>
        {props.label}
        </a>
        </li>
    
);

Item.propTypes  = {
    href : PropTypes.string,
    label : PropTypes.string,
    
}

const Menu = ()=>(
    
    <div className="menu">
      {
          menu.map((menu,index) =>{
              return <ul key={index}>
                <Item 
                href = {menu.href}
                label = {menu.label}
                />
              </ul>
              
          })
      }
      
    </div>
);


ReactDOM.render(<Menu />,app);



