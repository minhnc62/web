const products = [
    {
        
          id: 1,
          name: "Samsung Galaxy S8",
          price: 399,
          thumb: "./images/dt1.jpg",
        
        
      },
      {
        
          id: 2,
          name: "Samsung Galaxy S8",
          price: 499,
          thumb: "./images/dt1.jpg",
        
        
      },
      {
        
          id: 3,
          name: "Samsung Galaxy S8",
          price: 699,
          thumb: "./images/dt1.jpg",
        
        
      },
      {
        
          id: 4,
          name: "Samsung Galaxy S8",
          price: 399,
          thumb: "./images/dt1.jpg",
        
        
      }
];

export const getAll = () => products;

export const getById = (id) => products.find((p)=> p.id == id);