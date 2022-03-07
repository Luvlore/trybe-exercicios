const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = Object.values(order.order.delivery)[0];
  const name = order.name;
  const phone = order.phoneNumber;
  const address = `${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`;

  return `Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, ${address}`
}

console.log((customerInfo(order)));

const orderModifier = (order) => {
  order['name'] = 'Luiz Silva';
  order['payment'] = 50;
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;

  return `Olá ${order.name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é R$${order.payment.toFixed(2)}`
}

console.log(orderModifier(order));