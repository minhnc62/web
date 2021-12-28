const app = document.getElementById("pokemons");

const pokemon = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    }
  ];


const Item = (props)=>(
    
    <div className="item">
        <h2>{props.name}</h2>
        <img className="img-item" src={props.image} alt="anh" />
        <p className="text-item">type :{props.type}</p>
        
    </div>
);
Item.propTypes  = {
    name : PropTypes.string,
    image : PropTypes.string,
    type : PropTypes.string,

    
}

class Card extends React.Component {
    render() {
        return (
            <div className="list">
      {
          pokemon.map((pokemon) =>{
              return (
                <Item 
                key={pokemon.id}
                name={pokemon.name}
                image = {pokemon.image}
                type = {pokemon.type}

                />)
              
              
          })
      }
    </div>

        );
    }
}




const Categories = ()=>(
    
    <div className="categories">
        <h2 className="heading">Pokedex</h2>
        <Card/>
        
    </div>
);


ReactDOM.render(<Categories />,pokemons);



